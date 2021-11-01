import { Data } from "../../ms/interface";

export interface State {
  articles: Data[];
}

export const initialState = {
  articles: [
    {
      id: "",
      title: "",
      isCompleted: false,
      summary: "",
      sections: {},
      extra: {},
    },
  ],
};
