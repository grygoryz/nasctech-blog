const { Router } = require('express');
const { getArticle, createArticle, updateArticle, deleteArticle, getArticles } = require('./controllers');

const router = Router();

router.get('/', getArticles);
router.post('/', createArticle);

router.put('/:id', updateArticle);
router.delete('/:id', deleteArticle);
router.get('/:id', getArticle);

module.exports = { router };
