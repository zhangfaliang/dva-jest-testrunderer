import { request }  from '../servers/users';
export default {
  namespace: 'users',
  state: {
    list: [],
    total:null,
  },
  reducers: {
    save(state, { payload: { data: list, total } }) { 
      return {...state, list, total}
    }
  },
  effects: {
    *fetch({ payload: { page } }, { call, put }) { 
      try {
        const { data, headers } = yield call(request, '/api/users');
        yield put({ type: 'save', payload: { data, total: 1 } })
          
      } catch (error) {
          console.error(error);
          
      } 
   
    }
  },
  subscriptions: {
    setup({ dispatch, history }) { 
      return history.listen(({ pathname, query }) => {
        if (pathname === '/users') { 
          dispatch({ type: 'fetch', payload: query });
        }
      })
    }
  }
}