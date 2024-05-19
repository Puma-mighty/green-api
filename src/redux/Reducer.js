// import {
//   calcSquareDiagonal,
//   calcSquareRadius,
//   calcRotationAngle,
//   calcAngles,
//   calcChord,
//   calcGypotenuse,
//   calcCatet,
//   calcLineSegment1,
//   calcLineSegment2
// } from "../helpers/calculation";

import {
  CHANGE_ID_INSTANCE,
  CHANGE_TOKEN_FIELD,
  CHANGE_CHAT_ID,
  CHANGE_TEXTAREA_FIELD,
  SET_ANSWER
} from "./Constants";



import { initialState } from "./InitialState";

const MainReducer = (state = initialState, action) => {
  
  switch (true) {
    case (action.type === CHANGE_ID_INSTANCE): {
      console.log(action.data)
      let copyState = { ...state };
      copyState.idInstance = action.data;
    
      return copyState
    }
    case (action.type === CHANGE_TOKEN_FIELD): {
      let copyState = { ...state };
      copyState.apiTokenInstance = action.data;
      return copyState
    }
    case (action.type === CHANGE_CHAT_ID): {
      let copyState = { ...state };
      copyState.chatId = action.data;
      return copyState
    }
    case (action.type === CHANGE_TEXTAREA_FIELD): {
      let copyState = { ...state };
      copyState.textAreaValue = action.data;
      return copyState
    }
    case (action.type === SET_ANSWER): {
      let copyState = { ...state };
      copyState.answer = action.data;
      return copyState
    }

    default:
      return state
  }
}

export default MainReducer