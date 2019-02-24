function setOptionsState(
  state = {
    modifierOptions: "",
    baseOptions: ""
  },
  action
) {
  switch (action.type) {
    case "MODIFIER_OPTIONS_SET":
      return Object.assign({}, state, {
        modifierOptions: action.modifierOptions
      });

    case "BASE_OPTIONS_SET":
      return Object.assign({}, state, { baseOptions: action.baseOptions });

    case "MODIFIER_OPTIONS_CLEAR":
      return Object.assign({}, state, { modifierOptions: "" });

    case "BASE_OPTIONS_CLEAR":
      return Object.assign({}, state, { baseOptions: "" });

    default:
      return state;
  }
}

export default setOptionsState;
