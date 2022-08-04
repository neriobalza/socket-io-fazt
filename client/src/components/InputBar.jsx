import React from "react";
import "../styles/components/InputBar.scss";
import { BiImageAdd, BiMicrophone, BiSend } from "react-icons/bi";

const InputBar = ({ message, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="input-bar">
      <div>
        <BiImageAdd />
      </div>
      <input
        type="text"
        name="message"
        id="message"
        placeholder="Message"
        value={message}
        onChange={handleChange}
        maxLength="100"
        autoComplete="off"
      />

      {message ? (
        <button>
          <BiSend />
        </button>
      ) : (
        <div>
          <BiMicrophone />
        </div>
      )}
    </form>
  );
};

export default InputBar;
