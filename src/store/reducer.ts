import { Action, DELETE_ARTICLE, GET_ARTICLE } from "./actions";
import { initialState, State } from "./state";

const reducer = (state: State = initialState, action: Action): State => {
  const { type, payload } = action;

  switch (type) {
    case GET_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter((article) => article.id === payload),
      };
    case DELETE_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter((article) => article.id === payload),
      };
    default:
      return state;
  }
};

export default reducer;
