export const fetchModifiersRequest = () => ({
  type: 'FETCH_MODIFIERS_REQUEST',
});

export function fetchModifiersSuccess(modifiers) {
  return {
    type: 'FETCH_MODIFIERS_SUCCESS',
    modifiers,
  };
}

export const fetchModifiersFailure = errorModifiers => ({
  type: 'FETCH_MODIFIERS_FAILURE',
  errorModifiers,
});

export const clearModifierWords = () => ({
  type: 'MODIFIERS_CLEAR',
});

export const fetchBasewordsRequest = () => ({
  type: 'FETCH_BASEWORDS_REQUEST',
});

export const fetchBasewordsSuccess = basewords => ({
  type: 'FETCH_BASEWORDS_SUCCESS',
  basewords,
});

export const fetchBasewordsFailure = errorBasewords => ({
  type: 'FETCH_BASEWORDS_FAILURE',
  errorBasewords,
});

export const clearBaseWords = () => ({
  type: 'BASEWORDS_CLEAR',
});

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

/* eslint-disable no-loop-func */
export const fetchModifierWords = partofspeech => {
  let tempArr = [];
  return function(dispatch) {
    dispatch(fetchModifiersRequest());
    for (let i = 0; i < 3; i += 1) {
      fetch('/api/words', {
        method: 'post',
        body: JSON.stringify({ partofspeech }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(handleErrors)
        .then(response => response.json())
        // .then(() => {
        //   throw new Error('Boom!');
        // })
        .then(content => {
          tempArr = tempArr.concat([content]);
          dispatch(fetchModifiersSuccess(tempArr));
        })
        .catch(error => {
          dispatch(fetchModifiersFailure(error.message));
        });
    }
  };
};

/* eslint-disable no-loop-func */
export const fetchBasewords = partofspeech => {
  let tempArr = [];
  return function(dispatch) {
    dispatch(fetchBasewordsRequest());
    for (let i = 0; i < 3; i += 1) {
      fetch('/api/words', {
        method: 'post',
        body: JSON.stringify({ partofspeech }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(handleErrors)
        .then(response => response.json())
        // .then(() => {
        //   throw new Error('Boom!');
        // })
        .then(content => {
          tempArr = tempArr.concat([content]);
          dispatch(fetchBasewordsSuccess(tempArr));
        })
        .catch(error => {
          dispatch(fetchBasewordsFailure(error.message));
        });
    }
  };
};
