// Project by Gavin H. and Lawrence L.

import * as api from "./api.js";
import {interpret} from "./stringify.js";

const dungeonStr = interpret(api.tower([
  api.hallway([
    api.plainRoom(),
    api.makeRoomWithParams('Kitchen', ["Pans", "Stove", "Kitchen Gun"], "Chef's Knife"),
    api.makeRoomWithParams('Living Room', ["Television", "Coffee Table", "Uvula"], "Lost Remote"),
    api.combineTopToBottom(
      api.makeRoomWithParams('Bedroom', ["A Bed", "A Bed", "A Bed"], "Dirty Sheets"),
      api.makeRoomWithParams('Bathroom', ["Bathtub", "Showerhead", "Toothbrush"], "Stiff Towel")
    )
  ]), api.plainRoom(), api.plainRoom(), api.plainRoom()])
);

console.log(dungeonStr);