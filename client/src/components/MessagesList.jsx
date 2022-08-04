import React, { useEffect } from "react";
import Message from "./Message";
import "../styles/components/MessagesList.scss";

const MessagesList = ({ messages }) => {
  useEffect(() => {
    document
      .getElementById("messages")
      .scroll(0, document.getElementById("messages").scrollHeight);
  }, [messages]);

  return (
    <ul className="messages-list" id="messages">
      {messages.map((message, i) => {
        let messageClass = "";

        if (message.from === "Me") {
          messageClass = "me";
          if (i + 1 < messages.length) {
            if (messages[i + 1].from === message.from) {
              messageClass = "me pb-s";
            }
          } else {
            messageClass = "me pb-n";
          }
        } else {
          if (i + 1 < messages.length) {
            if (messages[i + 1].from === message.from) {
              messageClass = "pb-s";
            }
          } else {
            messageClass = "pb-n";
          }
        }

        return <Message key={i} data={message} messageClass={messageClass} />;
      })}
    </ul>
  );
};

export default MessagesList;
