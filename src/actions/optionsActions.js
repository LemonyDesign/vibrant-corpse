export const setModifierOptions = modifierOptions => ({
  type: 'MODIFIER_OPTIONS_SET',
  modifierOptions,
});

export const setBaseOptions = baseOptions => ({
  type: 'BASE_OPTIONS_SET',
  baseOptions,
});

export const clearModifierOptions = () => ({
  type: 'MODIFIER_OPTIONS_CLEAR',
});

export const clearBaseOptions = () => ({
  type: 'BASE_OPTIONS_CLEAR',
});