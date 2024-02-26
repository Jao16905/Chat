require("dotenv").config();
const express = require("express");
const app = express();
const server = require("http").createServer(app)
const socketio = require("socket.io")(server);
const mongoose = require("mongoose");
const path = require("path");
const userRouter = require("./routes/routes")

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/public/templates"));

app.use("/", userRouter)

app.listen(process.env.PORT, () =>{
    console.log("Server running")
})

