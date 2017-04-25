export const TEXT_UPDATED = 'TEXT_UPDATED';

export const updateText = e => ({
  type: TEXT_UPDATED,
  payload: e.target.value,
});
