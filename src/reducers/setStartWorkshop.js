function setStartWorkshop(state = false, action) {
  switch (action.type) {
    case "WORKSHOP_START":
      return !state;
    default:
      return state;
  }
}

export default setStartWorkshop;