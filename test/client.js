"use strict";

const io = require("socket.io-client");
const logger = require("../src/common/logger");
const socket = io("http://localhost:9000");

socket.emit("message", { req: "i need the news!" });

socket.on("message-response", function (data) {
	logger.debug(data);
	socket.disconnect();
});
