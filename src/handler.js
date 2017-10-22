
const connection = (socket) => {
	console.log(`client connected: [${socket.id}]`);

	socket.on("disconnect", () => {
        console.log(`client disconnected: [${socket.id}]`);
    });

	socket.on("message", (data) => {
		console.log(data);

		socket.emit("message-response", { res: "here are the news" });
	});
};

module.exports = connection;
