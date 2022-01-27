import axios from './axios';

export class Articles {
  static async getArticles() {
    const response = await axios.get('/articles');

    return response.data;
  }

  static async getArticle(id) {
    const response = await axios.get(`/articles/${id}`);

    return response.data;
  }

  static async createArticle(heading, content) {
    const response = await axios.post('/articles', { heading, content });

    return response.data;
  }

  static async updateArticle(id, heading, content) {
    const response = await axios.put(`/articles/${id}`, { heading, content });

    return response.data;
  }

  static async deleteArticle(id) {
    await axios.delete(`/articles/${id}`);
  }
}
