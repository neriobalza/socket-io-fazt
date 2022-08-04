import "dotenv/config";
import express, { json } from "express";
import morgan from "morgan";
import cors from "cors";
import { Server as SocketServer } from "socket.io";
import http from "http";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = process.env.PORT || 4000;

// App
const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {},
});

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

app.use(express.static(join(__dirname, "../client/dist")));

// Running the server
server.listen(port);
