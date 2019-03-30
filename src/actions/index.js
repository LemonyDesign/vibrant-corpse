export function setModifierWords(modifierWords) {
  return {
    type: 'MODIFIER_WORDS_ADD',
    modifierWords,
  };
}

export function setBaseWords(baseWords) {
  return {
    type: 'BASE_WORDS_ADD',
    baseWords,
  };
}

export function fetchWords(partofspeech, wordtype) {
  let tempArr = [];
  return function (dispatch) {
    for (let i = 0; i < 3; i += 1) {
      fetch('/api/words', {
        method: 'post',
        body: JSON.stringify({ partofspeech }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then((content) => {
          tempArr = tempArr.concat([content]);
          if (wordtype === 'modifier') {
            dispatch(setModifierWords(tempArr));
          }
          if (wordtype === 'base') {
            dispatch(setBaseWords(tempArr));
          }
        })
        .catch(error => console.log('FETCH ERROR', error.message));
    }
  };
}

export function clearModifierWords() {
  return {
    type: 'MODIFIER_WORDS_CLEAR',
  };
}

export function clearBaseWords() {
  return {
    type: 'BASE_WORDS_CLEAR',
  };
}

export function setModifierOptions(modifierOptions) {
  return {
    type: 'MODIFIER_OPTIONS_SET',
    modifierOptions,
  };
}

export function setBaseOptions(baseOptions) {
  return {
    type: 'BASE_OPTIONS_SET',
    baseOptions,
  };
}

export function clearModifierOptions() {
  return {
    type: 'MODIFIER_OPTIONS_CLEAR',
  };
}

export function clearBaseOptions() {
  return {
    type: 'BASE_OPTIONS_CLEAR',
  };
}

export function goWorkshop() {
  return {
    type: 'WORKSHOP_START',
  };
}

export function displayWorkshop() {
  return {
    type: 'WORKSHOP_DISPLAY',
  };
}

export function addFavourites(favourites) {
  return {
    type: 'FAVOURITES_ADD',
    favourites,
  };
}

export function removeFromFavourites(favourites) {
  return {
    type: 'FAVOURITES_REMOVE',
    favourites,
  };
}
