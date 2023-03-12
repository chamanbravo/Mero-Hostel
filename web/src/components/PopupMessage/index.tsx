import "./index.scss";

type modalContentProps = {
  modalContent: {
    message: string;
    cName: string;
  };
};

function PopupMessage({ modalContent }: modalContentProps) {
  return (
    <div className={`message-modal ${modalContent.cName}`}>
      <p>{modalContent.message}</p>
    </div>
  );
}

export default PopupMessage;
