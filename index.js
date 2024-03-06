const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors")
const app = express();


app.use(cors({origin:"http://localhost:5173"}))
const httpServer = createServer(app);
const io = new Server(httpServer, { cors:"http://localhost:5173"});

io.on("connection", (socket) => {
  
  socket.on("beginPath", (args)=>{
    socket.broadcast.emit("beginPath",args)
  })

  socket.on("drawLine", (args)=>{
    socket.broadcast.emit("drawLine",args)
  })

  socket.on("changeConfig", (args)=>{
    socket.broadcast.emit("changeConfig",args)
  })
});

httpServer.listen(5000);