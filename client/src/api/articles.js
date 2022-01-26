import axios from './axios';

export class Articles {
  static async getArticles() {
    const response = await axios.get('/articles');

    return response.data;
  }

  static async createArticle(heading, content) {
    const response = await axios.post('/articles', { heading, content });

    return response.data;
  }
}
