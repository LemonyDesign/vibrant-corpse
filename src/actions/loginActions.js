// REGISTER USER
export function setRegistered(trueOrNull) {
  return {
    type: 'SET_REGISTERED',
    registered: trueOrNull,
  };
}

export function registerToState(name, value) {
  return {
    type: 'SET_REGISTER_INPUT',
    name,
    value,
  };
}

// flusher function
export function clearRegistrationStates() {
  return {
    type: 'CLEAR_REGISTRATION_STATES',
  };
}

export function addWriterToDB() {
  return function(dispatch, getState) {
    return (
      fetch('/api/writer', {
        method: 'post',
        body: JSON.stringify(getState().registerForm),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        // eslint-disable-next-line no-unused-vars
        .then(data => {
          dispatch(setRegistered(true));
        })
    );
  };
}
