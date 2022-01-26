require('dotenv').config();
const { POSTGRES_USER, POSTGRES_DB, POSTGRES_PASSWORD, POSTGRES_HOST, POSTGRES_PORT } = process.env;

const common = {
	client: 'pg',
	connection: {
		host: POSTGRES_HOST,
		port: POSTGRES_PORT,
		user: POSTGRES_USER,
		password: POSTGRES_PASSWORD,
		database: POSTGRES_DB,
	},
	migrations: {
		tableName: 'migrations',
		directory: './src/db/migrations',
	},
};

module.exports = {
	development: {
		...common,
		debug: true,
	},
	production: {
		...common,
	},
};
