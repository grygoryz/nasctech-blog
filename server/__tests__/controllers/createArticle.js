const httpMocks = require('node-mocks-http');
const { createArticle } = require('../../src/routes/articles/controllers');
const { ArticleService } = require('../../src/services/article');
const { AppError } = require('../../src/helpers/app-error');

jest.mock('../../src/services/article');
jest.mock('knex');

describe('createArticle', () => {
	it('should send status 201 and article id on success', async () => {
		const articleId = 12;
		ArticleService.createArticle = jest.fn().mockResolvedValue(articleId);
		const { req, res } = httpMocks.createMocks();
		res.status = jest.fn(res.status);
		res.json = jest.fn(res.json);

		await createArticle(req, res, () => {});

		expect(res.status).toBeCalledWith(201);
		expect(res.json).toBeCalledWith({ id: articleId });
	});

	it('should pass error to next on failure', async () => {
		const errorMessage = 'Failure';
		ArticleService.createArticle = jest.fn().mockRejectedValue(new Error(errorMessage));
		const { req, res } = httpMocks.createMocks();
		const next = jest.fn();

		await createArticle(req, res, next);

		expect(next).toBeCalledWith(new AppError(errorMessage));
	});
});
