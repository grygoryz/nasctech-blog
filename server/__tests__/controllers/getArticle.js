const httpMocks = require('node-mocks-http');
const { getArticle } = require('../../src/routes/articles/controllers');
const { ArticleService } = require('../../src/services/article');
const { AppError } = require('../../src/helpers/app-error');

jest.mock('../../src/services/article');
jest.mock('knex');

describe('getArticle', () => {
	it('should send status 200 and article data on success', async () => {
		const article = { id: 1, heading: 'some heading', created_at: '2022-01-26T18:55:37.460Z' };
		ArticleService.getArticle = jest.fn().mockResolvedValue(article);
		const { req, res } = httpMocks.createMocks();
		res.status = jest.fn(res.status);
		res.json = jest.fn(res.json);

		await getArticle(req, res, () => {});

		expect(res.status).toBeCalledWith(200);
		expect(res.json).toBeCalledWith(article);
	});

	it('should pass error to next on failure', async () => {
		const errorMessage = 'Failure';
		ArticleService.getArticle = jest.fn().mockRejectedValue(new Error(errorMessage));
		const { req, res } = httpMocks.createMocks();
		const next = jest.fn();

		await getArticle(req, res, next);

		expect(next).toBeCalledWith(new AppError(errorMessage));
	});
});
