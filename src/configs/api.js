import { getRandomNumbers } from "../helpers";

class Api {
  constructor(baseUrl, token, config) {
    this.baseUrl = baseUrl;
    this.token = token;
    this.config = config;
  }

  async getAllArticles() {
    try {
      const response = await fetch(`${this.baseUrl}/api/articles?populate=cover`, this.config);
      const value = await response.json();
      if (!value.data) throw value.error;
      return { ...value?.data };
    } catch (err) {
      return { message: err.message, status: false };
    }
  }

  async getOneArticle(articleId) {
    try {
      const response = await fetch(
        `${this.baseUrl}/api/articles/${articleId}?populate=cover`,
        this.config
      );
      const value = await response.json();
      if (!value.data) throw value.error;
      return { ...value?.data, status: true };
    } catch (err) {
      return { message: err.message, status: false };
    }
  }

  async getSelectedArticles() {
    const articlesIds = await this.getArticleIds()
    const selectedArticleIndexes = getRandomNumbers(articlesIds.length, 3)
    const selectedArticleIds = selectedArticleIndexes.map((index) => {
      return articlesIds[index]
    })

    const articlesObject = await this.getAllArticles();
    const articles = Object.keys(articlesObject).map((key) => {
      return articlesObject[key];
    });

    const selectedArticles = selectedArticleIds.map((id) => {
      const foundArticle = articles.find((el) => el.id === id)
      return foundArticle
    })
    return selectedArticles
  }

  async getArticleIds () {
    const articlesObject = await this.getAllArticles();
    const articles = Object.keys(articlesObject).map((key) => {
      return articlesObject[key];
    });
    const articlesIds = articles.map((el) => {
      return el.id
    })
    return articlesIds
  }
}

const baseUrl = import.meta.env.DEV_URL;
const token = import.meta.env.DEV_TOKEN;
const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
const api = new Api(baseUrl, token, config);

export default api;
