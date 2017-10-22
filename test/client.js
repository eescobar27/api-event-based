const io = require("socket.io-client");
const socket = io("http://localhost:9000");

socket.emit("message", { req: "i need the news!" });

socket.on("message-response", function (data) {
	console.log(data);
	socket.disconnect();
});
