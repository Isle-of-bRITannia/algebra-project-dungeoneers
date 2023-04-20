export const room = (details) =>({
  _tag: 'room',
  details
});

export const leftToRight = (left, right) =>({
  _tag: 'leftToRight',
  left,
  right
});

export const topToBottom = (top, bottom) => ({
  _tag: 'topToBottom',
  top,
  bottom
});