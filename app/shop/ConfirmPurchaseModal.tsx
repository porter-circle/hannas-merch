import Modal from "../_components/Modal";

type ConfirmPurchaseModalProps = {
  open: boolean;
  setOpen: (val: boolean) => void;
  itemName?: string;
  onOkay: (formData: FormData) => void;
};

const ConfirmPurchaseModal = ({
  open,
  setOpen,
  itemName = "this item",
  onOkay,
}: ConfirmPurchaseModalProps) => (
  <Modal
    open={open}
    setOpen={setOpen}
    body={`Are you sure you would like to purchase ${itemName}?`}
    title="Confirm Purchase"
    onOkay={onOkay}
  />
);

export default ConfirmPurchaseModal;
