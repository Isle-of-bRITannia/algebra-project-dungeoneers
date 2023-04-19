import { algebra } from "./algebra";

// This will interact with our algebra functions
// API functions will be the functions accessible to the user

const api = {
    plainRoom: (details) => algebra.room(details),
    combineLeftToRight: (left, right) => algebra.leftToRight(left, right),
    combineTopToBottom: (top, bottom) => algebra.topToBottom(top, bottom),
    combineBottomToTop: (bottom, top) => api.topToBottom(top, bottom),
    hallway: (arrOfRooms) => {
      const [first, ...rest] = arrOfRooms;
      return rest.reduce((acc, room) => api.leftToRight(acc, room), first);
    }
}

export{api};