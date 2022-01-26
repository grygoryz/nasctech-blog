const httpMocks = require('node-mocks-http');
const { getArticles } = require('../../src/routes/articles/controllers');
const { ArticleService } = require('../../src/services/article');
const { AppError } = require('../../src/helpers/app-error');

jest.mock('../../src/services/article');
jest.mock('knex');

describe('getArticles', () => {
	it('should send status 200 and articles on success', async () => {
		const articles = [
			{ id: 1, heading: 'some heading', created_at: '2022-01-26T18:55:37.460Z' },
		];
		ArticleService.getArticles = jest.fn().mockResolvedValue(articles);
		const { req, res } = httpMocks.createMocks();
		res.status = jest.fn(res.status);
		res.json = jest.fn(res.json);

		await getArticles(req, res, () => {});

		expect(res.status).toBeCalledWith(200);
		expect(res.json).toBeCalledWith(articles);
	});

	it('should pass error to next on failure', async () => {
		const errorMessage = 'Failure';
		ArticleService.getArticles = jest.fn().mockRejectedValue(new Error(errorMessage));
		const { req, res } = httpMocks.createMocks();
		const next = jest.fn();

		await getArticles(req, res, next);

		expect(next).toBeCalledWith(new AppError(errorMessage));
	});
});
