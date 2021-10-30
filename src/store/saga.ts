import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

import { GET_ARTICLES } from "./actions";

function* fetchArticle() {
  try {
    const { data } = yield call(axios.get, "http://localhost:3000/api/data");
    yield put({
      type: GET_ARTICLES,
      payload: { articles: data },
    });
  } catch (err: any) {
    console.log(err.message);
  }
}

function* saga() {
  yield takeLatest(GET_ARTICLES, fetchArticle);
}

export default saga;
