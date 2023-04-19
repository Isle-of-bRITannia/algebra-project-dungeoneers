const myDetailsObjectToText = (details) => {
    const {roomName, contents, loot} = details;
    return `You are in the ${roomName}. It contains ${contents.join(',')}.
    Loot: ${loot};`
}

const interpret = (dungeon) => {
    switch (dungeon._tag) {
      case 'room':
        return myDetailsObjectToText(dungeon.details);
      case 'leftToRight':
        return `You find to the left:
        ${interpret(dungeon.left)}
        You find to the right:
        ${interpret(dungeon.right)};`
      case 'topToBottom':
        return `You find above:
        ${interpret(dungeon.top)}
        You find below:
        ${interpret(dungeon.bottom)};`
  
    }
  }
  interpret(api.hallway([
    api.plainRoom({
      roomName: 'dungeon', contents: ['cool', 'stuff'], loot: 'someloot'
    }),
    api.plainRoom('kitchen'),
    api.plainRoom('living room'),
    api.combineTopToBottom(
      api.plainRoom('bedroom'),
      api.plainRoom('bathroom')
    )
  ]));