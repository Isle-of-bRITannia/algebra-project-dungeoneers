const myDetailsObjectToText = (details) => {
    const {roomName, contents, loot} = details;
    const contentStr = contents.length > 0 ? `It contains ${contents.join(', ')}. ` : "";
    const lootStr = loot.length > 0 ? `Loot: ${loot}. ` : "";
    return `You are in the ${roomName}. ${contentStr}${lootStr}`;
}

export const interpret = (dungeon) => {
  switch (dungeon._tag) {
    case 'room':
       return myDetailsObjectToText(dungeon.details);
    case 'leftToRight':
      return `You find to the left:
      ${interpret(dungeon.left)}
      You find to the right:
      ${interpret(dungeon.right)}`;
    case 'topToBottom':
      return `You find above:
      ${interpret(dungeon.top)}
      You find below:
      ${interpret(dungeon.bottom)}`;
  }
};