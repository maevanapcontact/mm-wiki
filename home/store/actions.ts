export const GET_ARTICLES = "GET_ARTICLES";
export const GET_ARTICLE = "GET_ARTICLE";
export const DELETE_ARTICLE = "DELETE_ARTICLE";

export const getArticles = () => ({
  type: GET_ARTICLES,
});

export const getArticle = (payload: string) => ({
  type: GET_ARTICLE,
  payload,
});

export const deleteArticle = (payload: string) => ({
  type: DELETE_ARTICLE,
  payload,
});

export interface getArticlesInterface {
  type: typeof GET_ARTICLES;
}

export interface getArticleInterface {
  type: typeof GET_ARTICLE;
  payload: string;
}

export interface deleteArticleInterface {
  type: typeof DELETE_ARTICLE;
  payload: string;
}

export type Action =
  | getArticlesInterface
  | getArticleInterface
  | deleteArticleInterface;
