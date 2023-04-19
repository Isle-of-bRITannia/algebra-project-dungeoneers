// This is how we will manipulate the dungeon tiles

const algebra = {
    room: (details) => ({
      _tag: 'room',
      details
    }),
    leftToRight: (left, right) => ({
      _tag: 'leftToRight',
      left,
      right
    }),
    topToBottom: (top, bottom) => ({
      _tag: 'topToBottom',
      top,
      bottom
    })
  };

  export {algebra};