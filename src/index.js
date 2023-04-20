// Project by Gavin H. and Lawrence L.

import * as api from "./api.js";
import {interpret} from "./stringify.js";

const kitchen = api.makeRoomWithParams('Kitchen', ["Pans", "Stove", "Kitchen Gun"], "Chef's Knife");
const livingRoom = api.makeRoomWithParams('Living Room', ["Television", "Coffee Table", "Uvula"], "Lost Remote");
const bedroom = api.makeRoomWithParams('Bedroom', ["A Bed", "A Bed", "A Bed"], "Dirty Sheets");
const bathroom = api.makeRoomWithParams('Bathroom', ["Bathtub", "Showerhead", "Toothbrush"], "Stiff Towel");
const gamerRoom = api.makeRoomWithParams('Gamer Den', ["Game Console", "Couch", "Disgruntled Gamer"], "Smelly Socks");
const closet = api.makeRoomWithParams('Closet', ["Jacket", "Suit", "Coat Hangars"], "The Greatest Tie You've Ever Seen!")
const diningRoom = api.makeRoomWithParams('Dining Room', ["Table", "Chair", "Chair", "Plate", "Silverware"], "Golden Spoon")

const dungeonStr = interpret(api.tower([
  api.hallway([
    api.plainRoom(),
    kitchen,
    livingRoom,
    api.combineTopToBottom(
      bedroom,
      bathroom
    )
  ]), diningRoom, gamerRoom, closet])
);

console.log(dungeonStr);