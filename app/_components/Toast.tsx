const Toast = ({ msg = "", type = "success" }) => (
  <div className={`alert ${type === "info" ? "alert-info" : "alert-success"}`}>
    <span>{msg}</span>
  </div>
);

export default Toast;
