import React from "react";
import "../styles/components/Message.scss";

const Message = ({ data, messageClass }) => {
  return (
    <li className={`message ${messageClass}`}>
      <div className="message__content">
        {data.from !== "Me" && (
          <p className="message__from">
            <b>{data.from}</b>
          </p>
        )}
        <p className="message__body">{data.body}</p>
      </div>
    </li>
  );
};

export default Message;
