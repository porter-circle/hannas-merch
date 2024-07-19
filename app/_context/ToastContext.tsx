import {
  ReactNode,
  createContext,
  useCallback,
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
  const [toastMsgs, setToastMsgs] = useState<ToastType[]>([]);

  const triggerToast = useCallback(
    (msg: string, type: ToastType["type"] = "success") => {
      setToastMsgs((msgs) => [...msgs, { msg, type }]);
    },
    []
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setToastMsgs((msgs): ToastType[] => msgs.toSpliced(0, 1));
    }, 5000);

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [toastMsgs]);

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
