import "dotenv/config";
import express, { json } from "express";
import morgan from "morgan";
import cors from "cors";
import { Server as SocketServer } from "socket.io";
import http from "http";

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

const port = process.env.SERVER_PORT || 4500;

// Middlewares
// Morgan Middleware
app.use(morgan("dev"));
// Json Middleware
app.use(express.json());
// Cors Middleware
app.use(cors());
// Router

// Error Middleware

// Sockets
io.on("connection", (socket) => {
  const id = socket.id;

  socket.on("message", (message) => {
    socket.broadcast.emit("message", { body: message, from: socket.id });
  });
});

// Running the server
server.listen(port);
console.clear();
console.log(`server started on port ${port}`);
