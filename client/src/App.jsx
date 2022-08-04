import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./styles/components/App.scss";
import Header from "./components/Header";
import InputBar from "./components/InputBar";
import MessagesList from "./components/MessagesList";

const socket = io();

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (message) {
      setMessages([
        ...messages,
        {
          body: message,
          from: "Me",
        },
      ]);

      socket.emit("message", message);
      setMessage("");
    }
  };

  useEffect(() => {
    const reciveMessage = (message) => {
      setMessages([...messages, message]);
    };

    socket.on("message", reciveMessage);

    return () => {
      socket.off("message", reciveMessage);
    };
  }, [messages]);

  return (
    <main className="app">
      <Header />
      <MessagesList messages={messages} />
      <InputBar
        message={message}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </main>
  );
}

export default App;
