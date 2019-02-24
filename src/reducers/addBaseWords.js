function addBaseWords(state = [], action) {
  switch (action.type) {
    case "BASE_WORDS_ADD":
      return action.baseWords;
    case "BASE_WORDS_CLEAR":
      return [];
    default:
      return state;
  }
}

export default addBaseWords;
