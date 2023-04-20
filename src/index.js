// Project by Gavin H. and Lawrence L.

import * as api from "./api.js";
import {interpret} from "./stringify.js";

const plainRoom = api.plainRoom();
const kitchen = api.makeRoomWithParams('Kitchen', ["Pans", "Stove", "Kitchen Gun"], "Chef's Knife");
const livingRoom = api.makeRoomWithParams('Living Room', ["Television", "Coffee Table", "Uvula"], "Lost Remote");
const bedroom = api.makeRoomWithParams('Bedroom', ["A Bed", "A Bed", "A Bed"], "Dirty Sheets");
const bathroom = api.makeRoomWithParams('Bathroom', ["Bathtub", "Showerhead", "Toothbrush"], "Stiff Towel");
const gamerRoom = api.makeRoomWithParams('Gamer Den', ["Game Console", "Couch", "Disgruntled Gamer"], "Smelly Socks");
const closet = api.makeRoomWithParams('Closet', ["Jacket", "Suit", "Coat Hangars"], "The Greatest Tie You've Ever Seen!")
const diningRoom = api.makeRoomWithParams('Dining Room', ["Table", "Chair", "Chair", "Plate", "Silverware"], "Golden Spoon")
const lavatory = api.makeRoomWithParams('Lavatory', ["Toilet", "Sink", "Molten Rock"], "Aloe Vera");
const workshop = api.makeRoomWithParams('Workshop', ["Wrench", "Table Saw", "Unfinished Canoe"], "Plank");
const prisonBlock = api.makeRoomWithParams('Prison Block', ["Prisoners", "Bars", "The result of class inequality leading innocent people to do bad things."], "Handcuffs");
const stables = api.makeRoomWithParams('Stables', ["Horses", "Hay", "Buckets"], "Used Shoe");
const lobby = api.makeRoomWithParams('Lobby', ["Benches", "Tired People", "Luggage"], "Unclaimed Bags");
const hotSprings = api.makeRoomWithParams('Hot Springs', ["Water", "Relaxed People", "Secondhand Embarrassment"], "Wet Towel");

const dungeonStr = interpret(api.tower([
  api.hallway([
    api.bottomRightStaircase([
      lavatory, workshop, prisonBlock
    ]),
    plainRoom,
    kitchen,
    livingRoom,
    api.topRightStaircase([
      stables, lobby, hotSprings
    ])
  ]), diningRoom, gamerRoom, closet])
);

//const testStr = interpret(api.topRightStaircase([kitchen, livingRoom, bedroom, bathroom, gamerRoom, closet]));

//console.log(api.topRightStaircase([kitchen, livingRoom, bedroom])["top"]["details"]["roomName"]);

console.log(dungeonStr);
console.log(api.tower([
  api.hallway([
    api.bottomRightStaircase([
      lavatory, workshop, prisonBlock
    ]),
    api.plainRoom(),
    kitchen,
    livingRoom,
    api.combineTopToBottom(
      bedroom,
      bathroom
    ),
    api.topRightStaircase([
      stables, lobby, hotSprings
    ])
  ]), diningRoom, gamerRoom, closet]));