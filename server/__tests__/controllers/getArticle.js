const httpMocks = require('node-mocks-http');
const { getArticle } = require('../../src/routes/articles/controllers');
const { ArticleService } = require('../../src/services/article');

jest.mock('../../src/services/article');
jest.mock('knex');

describe('getArticle', () => {
	it('should send status 200 and article data on success', async () => {
		const article = { id: 1 };
		ArticleService.getArticle = jest.fn().mockResolvedValue(article);
		const { req, res } = httpMocks.createMocks();
		res.status = jest.fn(res.status);

		await getArticle(req, res, () => {});

		expect(res.status).toBeCalledWith(200);
	});
});
