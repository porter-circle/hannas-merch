import { useEffect, useRef } from "react";

type ModalProps = {
  open: boolean;
  setOpen: (val: boolean) => void;
  title?: string;
  body?: string;
  onOkay?: (formData: FormData) => void;
};

const Modal = ({
  open,
  title = "title",
  body = "body",
  onOkay,
  setOpen = () => {},
}: ModalProps) => {
  const ref = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (open) {
      ref?.current?.showModal();
    } else {
      ref?.current?.close();
    }
  }, [open]);

  return (
    <dialog
      id="my_modal_1"
      className="modal "
      onCancel={() => setOpen(false)}
      ref={ref}
    >
      <div className="modal-box">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="py-4">{body}</p>
        <div className="modal-action">
          <form action={onOkay}>
            {onOkay && (
              <button className="btn btn-primary" type={"submit"}>
                Okay
              </button>
            )}
          </form>
          <button className="btn btn-nuetral" onClick={() => setOpen(false)}>
            Cancel
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
