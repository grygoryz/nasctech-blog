const { knex } = require('../db');
const { dbTables } = require('../helpers/constants');

class ArticleRepository {
	static getMany() {
		return knex(dbTables.articles).select('id', 'heading', 'created_at').orderBy('id', 'desc');
	}

	static async getOne(id) {
		const result = await knex(dbTables.articles)
			.select('id', 'heading', 'content', 'created_at', 'updated_at')
			.where({ id });

		if (!result.length) {
			throw new Error('Article not found');
		}
		return result[0];
	}

	static async create(heading, content) {
		const timestamp = new Date().toISOString();
		const result = await knex(dbTables.articles)
			.insert({
				heading,
				content,
				created_at: timestamp,
			})
			.returning('id');

		return result[0].id;
	}

	static async update(id, heading, content) {
		const timestamp = new Date().toISOString();
		const result = await knex(dbTables.articles)
			.update({
				heading,
				content,
				updated_at: timestamp,
			})
			.where({ id })
			.returning('updated_at');

		if (result === 0) {
			throw new Error('Article not found');
		}

		return result[0].updated_at;
	}

	static async delete(id) {
		const result = await knex(dbTables.articles).delete().where({ id });
		if (result === 0) {
			throw new Error('Article not found');
		}
	}
}

module.exports = { ArticleRepository };
