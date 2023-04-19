// Project by Gavin H. and Lawrence L.

// Imports go Here
import { api } from "./api";

const makeRoom = (label) => ({
      _tag: 'room',
      label
    });
    
    const combineLeftToRight = (left, right) => {
      return {
        _tag: 'combineLeftToRight',
        left,
        right
      }
    }
    
    const dungeon = makeRoom('dungeon');
    const upstairs = combineLeftToRight(makeRoom('kitchen'), 
                                        makeRoom('living room'));
    const house = combineLeftToRight(dungeon, upstairs);

