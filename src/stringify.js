const myDetailsObjectToText = (details) => {
    const {roomName, contents, loot} = details;
    const contentStr = contents.length > 0 ? `It contains ${contents.join(', ')}. ` : "";
    const lootStr = loot.length > 0 ? `Loot: ${loot}. ` : "";
    return `  You are in the ${roomName}. ${contentStr}${lootStr}`;
}

export const interpret = (dungeon) => {
  const outputStr = recurseThrough(dungeon);
  //return outputStr.substring(outputStr.indexOf("You are in"));
  return outputStr;
};

const recurseThrough = (dungeon) => {
  switch (dungeon._tag) {
    case 'room':
       return myDetailsObjectToText(dungeon.details);
    case 'leftToRight':
      return `You find to the left:\n{\n${interpret(dungeon.left)}\n}\nYou find to the right:\n{\n${interpret(dungeon.right)}\n}`;
    case 'topToBottom':
      return `You find above:\n{\n${interpret(dungeon.top)}\n}\nYou find below:\n{\n${interpret(dungeon.bottom)}\n}`;
  }
};