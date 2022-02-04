import React from "react";
import "./PopupMessage.scss";

function PopupMessage({ modalContent }) {
  return (
    <div className={`message-modal ${modalContent.cName}`}>
      <p>{modalContent.message}</p>
    </div>
  );
}

export default PopupMessage;
