import dva from 'dva';

/**
  类似于spring 的bean
  namespace 为bean 的name名称
*/
export default {
  namespace: 'products',
  state: [],
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
};
