class AppError extends Error {
	constructor(message, statusCode = 500) {
		if (!(statusCode >= 100 && statusCode <= 599)) {
			throw new Error('statusCode must be a number in range from 100 to 599');
		}
		super(message);
		this.statusCode = statusCode;
	}
}

module.exports = { AppError };
