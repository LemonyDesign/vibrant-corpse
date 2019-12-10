const isFetchingBasewords = (
  state = {
    basewords: [],
    loadingBasewords: false,
    errorBasewords: '',
  },
  action
) => {
  switch (action.type) {
    case 'FETCH_BASEWORDS_REQUEST':
      return Object.assign({}, state, {
        loadingBasewords: true,
        errorBasewords: '',
      });
    case 'FETCH_BASEWORDS_SUCCESS':
      return Object.assign({}, state, {
        basewords: action.basewords,
        loadingBasewords: false,
      });
    case 'FETCH_BASEWORDS_FAILURE':
      return Object.assign({}, state, {
        loadingBasewords: false,
        errorBasewords: action.errorBasewords,
        basewords: [],
      });
    case 'BASEWORDS_CLEAR':
      return Object.assign({}, state, {
        basewords: [],
      });
    default:
      return state;
  }
};

export default isFetchingBasewords;
