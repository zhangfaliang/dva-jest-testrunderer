import { fetch, remove, patch } from "../servers/users";
export default {
  namespace: "users",
  state: {
    list: [],
    total: null,
    page: null
  },
  reducers: {
    save(
      state,
      {
        payload: { data: list, total, page }
      }
    ) {
      return { ...state, list, total, page };
    }
  },
  effects: {
    *fetch( { payload: { page = 1 } }, { call, put }) {
      try {
        const { data, count } = yield call(fetch, { page });
        yield put({
          type: "save",
          payload: {
            data,
            total: parseInt(count, 10),
            page: parseInt(page, 10)
          }
        });
      } catch (error) {
        console.error(error);
      }
    },
    *remove({ payload: id }, { call, put, select }) {
      yield call(remove, id);
      const page = yield select(state => state.users.page);
      yield put({ type: "fetch", payload: { page } });
    },
    *patch({ payload: { id, values } }, { call, put, select }) { 
      yield call(patch, id, values);
      const page = yield select(state => state.users.page);
      yield put({ type: "fetch", payload: { page } });
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === "/users") {
          dispatch({ type: "fetch", payload: query });
        }
      });
    }
  }
};
