const { ArticleRepository } = require('../repositories/article');

class ArticleService {
	static getArticles() {
		return ArticleRepository.getMany();
	}

	static getArticle(id) {
		return ArticleRepository.getOne(id);
	}

	static createArticle(heading, content) {
		return ArticleRepository.create(heading, content);
	}

	static updateArticle(id, heading, content) {
		return ArticleRepository.update(id, heading, content);
	}

	static deleteArticle(id) {
		return ArticleRepository.delete(id);
	}
}

module.exports = { ArticleService };
