const isFetchingModifiers = (
  state = {
    modifiers: [],
    loadingModifiers: false,
    errorModifiers: '',
  },
  action
) => {
  switch (action.type) {
    case 'FETCH_MODIFIERS_REQUEST':
      return Object.assign({}, state, {
        loadingModifiers: true,
        errorModifiers: '',
      });
    case 'FETCH_MODIFIERS_SUCCESS':
      return Object.assign({}, state, {
        modifiers: action.modifiers,
        loadingModifiers: false,
      });
    case 'FETCH_MODIFIERS_FAILURE':
      return Object.assign({}, state, {
        loadingModifiers: false,
        errorModifiers: action.errorModifiers,
        modifiers: [],
      });
    case 'MODIFIERS_CLEAR':
      return Object.assign({}, state, {
        modifiers: [],
      });
    default:
      return state;
  }
};

export default isFetchingModifiers;
