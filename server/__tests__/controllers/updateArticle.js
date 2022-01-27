const httpMocks = require('node-mocks-http');
const { updateArticle } = require('../../src/routes/articles/controllers');
const { ArticleService } = require('../../src/services/article');
const { AppError } = require('../../src/helpers/app-error');

jest.mock('../../src/services/article');
jest.mock('knex');

describe('updateArticle', () => {
	it('should send status 200 and updated_at on success', async () => {
		const updated_at = '2022-01-26T18:55:37.460Z';
		const { req, res } = httpMocks.createMocks();
		ArticleService.updateArticle = jest.fn().mockResolvedValue(updated_at);
		res.status = jest.fn(res.status);
		res.json = jest.fn(res.json);

		await updateArticle(req, res, () => {});

		expect(res.status).toBeCalledWith(200);
		expect(res.json).toBeCalledWith({ updated_at })
	});

	it('should pass error to next on failure', async () => {
		const errorMessage = 'Failure';
		ArticleService.updateArticle = jest.fn().mockRejectedValue(new Error(errorMessage));
		const { req, res } = httpMocks.createMocks();
		const next = jest.fn();

		await updateArticle(req, res, next);

		expect(next).toBeCalledWith(new AppError(errorMessage));
	});
});
