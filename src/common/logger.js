const { createLogger, format, transports } = require("winston");
const { combine, timestamp, printf } = format;

const logger = createLogger({
	level: "info",
	format: combine(
		format.colorize(),
		format.json(),
		timestamp(),
		printf(nfo => {
			return `${nfo.timestamp} ${nfo.level}: ${nfo.message}`;
		})
	),
	transports: [new transports.Console()]
});

module.exports = logger;
