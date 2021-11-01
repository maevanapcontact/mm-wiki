import { Action, DELETE_ARTICLE, GET_ARTICLE, GET_ARTICLES } from "./actions";
import { initialState, State } from "./state";

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case GET_ARTICLES:
      return state;
    case GET_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter(
          (article) => article.id === action.payload
        ),
      };
    case DELETE_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter(
          (article) => article.id === action.payload
        ),
      };
    default:
      return state;
  }
};

export default reducer;
