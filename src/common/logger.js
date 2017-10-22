const winston = require("winston");

const tsFormat = () => (new Date()).toLocaleTimeString();
const isProduction = process.env.NODE_ENV === "production";

const logger = new (winston.Logger)({
	transports: [
		new (winston.transports.Console)({
			timestamp: tsFormat,
			colorize: true,
			level: (isProduction ? "error": "debug")
		})
	]
});

module.exports = logger;
