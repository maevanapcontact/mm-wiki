export interface getArticleInterface {
  type: typeof GET_ARTICLE;
  payload: string;
}

export interface deleteArticleInterface {
  type: typeof DELETE_ARTICLE;
  payload: string;
}

export type Action = getArticleInterface | deleteArticleInterface;

export const GET_ARTICLE = "GET_ARTICLE";
export const DELETE_ARTICLE = "DELETE_ARTICLE";

export const getArticle = (payload: string) => ({
  type: GET_ARTICLE,
  payload,
});

export const deleteArticle = (payload: string) => ({
  type: DELETE_ARTICLE,
  payload,
});
