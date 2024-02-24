require("dotenv").config();
const express = require("express");
const app = express();
const server = require("http").createServer(app)
const socketio = require("socket.io")(server);
const mongoose = require("mongoose")