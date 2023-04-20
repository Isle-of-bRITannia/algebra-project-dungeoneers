import {room, leftToRight, topToBottom} from "./algebra.js"

export const makeRoom = (details) => room(details);

export const makeRoomWithParams = (_roomName, _contents, _loot) => makeRoom({roomName: _roomName, contents: _contents, loot: _loot});

export const plainRoom = () => room({roomName: 'Normal Room', contents: [], loot: ""});

export const combineLeftToRight = (left, right) => leftToRight(left, right);

export const combineRightToLeft = (right, left) => combineLeftToRight(left, right);

export const combineTopToBottom = (top, bottom) => topToBottom(top, bottom);

export const combineBottomToTop = (bottom, top) => combineTopToBottom(top, bottom);

export const hallway = (arrOfRooms) => {
  const [first, ...rest] = arrOfRooms;
  return rest.reduce((acc, room) => combineLeftToRight(acc, room), first);
};

export const tower = (arrOfRooms) => {
  const [first, ...rest] = arrOfRooms;
  return rest.reduce((acc, room) => combineTopToBottom(acc, room), first);
};