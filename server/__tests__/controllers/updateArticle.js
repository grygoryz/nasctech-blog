const httpMocks = require('node-mocks-http');
const { updateArticle } = require('../../src/routes/articles/controllers');
const { ArticleService } = require('../../src/services/article');
const { AppError } = require('../../src/helpers/app-error');

jest.mock('../../src/services/article');
jest.mock('knex');

describe('updateArticle', () => {
	it('should send status 200 on success', async () => {
		const { req, res } = httpMocks.createMocks();
		res.sendStatus = jest.fn(res.sendStatus);

		await updateArticle(req, res, () => {});

		expect(res.sendStatus).toBeCalledWith(200);
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
