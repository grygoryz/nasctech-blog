const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { router: articleRouter } = require('./routes/articles');

const app = express();

// middlewares
app.use(cors());
app.use(bodyParser.json());

// routes
app.use('/articles', articleRouter);

app.use('*', (req, res, next) => {
	const error = new Error(
		`Can not find right route for method ${req.method} and path ${req.originalUrl}`,
	);
	next(error);
});

// error handling middleware
app.use((err, req, res, next) => {
	res.status(err.statusCode || 500).json({ message: err.message });
});

module.exports = { app };
