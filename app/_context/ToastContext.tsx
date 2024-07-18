import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import Toast from "../_components/Toast";

type ToastContextType = {
  triggerToast: (msg: string, type?: ToastType["type"]) => void;
};

const ToastContext = createContext({} as ToastContextType);

export function useToast() {
  return useContext(ToastContext);
}

type ToastProviderProps = {
  children: ReactNode;
};

type ToastType = {
  msg: string;
  type: "info" | "success";
};

export function ToastProvider({ children }: ToastProviderProps) {
  const [open, setOpen] = useState(false);
  const [toastMsgs, setToastMsgs] = useState<ToastType[]>([]);

  const triggerToast = (msg: string, type: ToastType["type"] = "success") => {
    setOpen(true);
    setToastMsgs((msgs) => [...msgs, { msg, type }]);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpen(false);
      setToastMsgs((msgs): ToastType[] => msgs.toSpliced(0, 1));
    }, 4000);

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [open, toastMsgs]);

  return (
    <ToastContext.Provider
      value={{
        triggerToast,
      }}
    >
      <div className="toast toast-bottom toast-right z-20">
        {toastMsgs.map(({ msg, type }, i) => (
          <Toast msg={msg} type={type} key={i} />
        ))}
      </div>
      {children}
    </ToastContext.Provider>
  );
}
