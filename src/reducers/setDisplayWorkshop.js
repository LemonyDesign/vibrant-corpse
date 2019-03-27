function setDisplayWorkshop(state = false, action) {
  switch (action.type) {
    case 'WORKSHOP_DISPLAY':
      return !state;
    default:
      return state;
  }
}

export default setDisplayWorkshop;
