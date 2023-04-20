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
  return rest.reduce((acc, currRoom) => combineLeftToRight(acc, currRoom), first);
};

export const tower = (arrOfRooms) => {
  const [first, ...rest] = arrOfRooms;
  return rest.reduce((acc, currRoom) => combineTopToBottom(acc, currRoom), first);
};

export const topRightStaircase = (arrOfRooms) => {
  const [first, ...rest] = arrOfRooms;
  return rest.reduce((acc, currRoom, index) => index % 2 == 0 ? combineLeftToRight(acc, currRoom) : combineBottomToTop(acc, currRoom), first);
};

export const topLeftStaircase = (arrOfRooms) => {
  const [first, ...rest] = arrOfRooms;
  return rest.reduce((acc, currRoom, index) => index % 2 == 0 ? combineRightToLeft(acc, currRoom) : combineBottomToTop(acc, currRoom), first);
};

export const bottomRightStaircase = (arrOfRooms) => {
  const [first, ...rest] = arrOfRooms;
  return rest.reduce((acc, currRoom, index) => index % 2 == 0 ? combineLeftToRight(acc, currRoom) : combineTopToBottom(acc, currRoom), first);
};

export const bottomLeftStaircase = (arrOfRooms) => {
  const [first, ...rest] = arrOfRooms;
  return rest.reduce((acc, currRoom, index) => index % 2 == 0 ? combineRightToLeft(acc, currRoom) : combineTopToBottom(acc, currRoom), first);
};