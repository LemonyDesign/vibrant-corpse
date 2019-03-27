function addModifierWords(state = [], action) {
  switch (action.type) {
    case 'MODIFIER_WORDS_ADD':
      return action.modifierWords;
    case 'MODIFIER_WORDS_CLEAR':
      return [];
    default:
      return state;
  }
}

export default addModifierWords;
