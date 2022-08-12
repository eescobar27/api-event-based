"use strict";

const logger = require("./common/logger");

const connection = (socket) => {
	logger.info(`client connected: [${socket.id}]`);

	socket.on("disconnect", () => {
        logger.info(`client disconnected: [${socket.id}]`);
    });

	socket.on("message", (data) => {
		logger.info(data.req);
		socket.emit("message-response", { res: "here are the news" });
		logger.debug("response emitted");
	});
};

module.exports = connection;
