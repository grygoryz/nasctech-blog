require('dotenv').config();
const { createServer } = require('http');
const { createTerminus } = require('@godaddy/terminus');
const { app } = require('./server');
const { knex } = require('./db');

const { PORT } = process.env;

const httpServer = createServer(app);

httpServer.listen(PORT, () => {
	console.log(`Server listens on port ${PORT}`);
});

createTerminus(httpServer, {
	signals: ['SIGINT', 'SIGTERM'],
	onSignal() {
		console.log('Cleanup started');
		return knex.destroy();
	},
	onShutdown() {
		console.log('Cleanup finished, server is down');
	},
});
