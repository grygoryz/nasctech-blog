const { AppError } = require('../../helpers/app-error');
const { ArticleService } = require('../../services/article');

const getArticles = async (req, res, next) => {
	try {
		const result = await ArticleService.getArticles();

		res.status(200).json(result);
	} catch (err) {
		return next(new AppError(err.message));
	}
};

const getArticle = async (req, res, next) => {
	try {
		const { id } = req.params;
		const result = await ArticleService.getArticle(id);

		res.status(200).json(result);
	} catch (err) {
		return next(new AppError(err.message));
	}
};

const createArticle = async (req, res, next) => {
	try {
		const { heading, content } = req.body;
		const id = await ArticleService.createArticle(heading, content);

		res.status(201).json({ id });
	} catch (err) {
		return next(new AppError(err.message));
	}
};

const updateArticle = async (req, res, next) => {
	try {
		const { heading, content } = req.body;
		const { id } = req.params;
		await ArticleService.updateArticle(id, heading, content);

		res.sendStatus(200);
	} catch (err) {
		return next(new AppError(err.message));
	}
};

const deleteArticle = async (req, res, next) => {
	try {
		const { id } = req.params;
		await ArticleService.deleteArticle(id);

		res.sendStatus(200);
	} catch (err) {
		return next(new AppError(err.message));
	}
};


module.exports = { getArticle, createArticle, updateArticle, deleteArticle, getArticles };
