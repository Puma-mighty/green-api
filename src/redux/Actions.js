import { getSettings, getStateInstance, postSendMessage, postSendImage } from "../api/api";
import {
  CHANGE_ID_INSTANCE,
  CHANGE_TOKEN_FIELD,
  CHANGE_CHAT_ID,
  CHANGE_TEXTAREA_FIELD,
  SET_ANSWER

} from "./Constants";



export function changeIdInstance(data) {
  return {
    type: CHANGE_ID_INSTANCE,
    data
  }
}

export function changeTokenField(data) {
  return {
    type: CHANGE_TOKEN_FIELD,
    data
  }
}

export function changeChatId(data) {
  return {
    type: CHANGE_CHAT_ID,
    data
  }
}

export function changeTextareaField(data) {
  return {
    type: CHANGE_TEXTAREA_FIELD,
    data
  }
}

export function setAnswer(data) {
  return {
    type: SET_ANSWER,
    data
  }
}

// export function setAnswerThunkSettings() {
//   return function (dispatch) {
//     return getSettings(setAnswer)
//   };
// }

export const setAnswerThunkSettings = () => async (dispatch) => {
  try {
    const userData = await getSettings()
    console.log("actionUserData", userData)
    dispatch(setAnswer(userData))
  } catch (e) {
    console.log(e)
  }
}

export const setAnswerThunkStateInstance = () => async (dispatch) => {
  try {
    const userData = await getStateInstance()
    console.log("actionUserData", userData)
    dispatch(setAnswer(userData))
  } catch (e) {
    console.log(e)
  }
}

export const setThunkSendMessage = () => async (dispatch) => {
  try {
    const userData = await postSendMessage()
    dispatch(setAnswer(userData))
  } catch (e) {
    console.log(e)
  }
}

export const setThunkSendImage = () => async (dispatch) => {
  try {
    const userData = await postSendImage()
    console.log("actionUserData", userData)
    dispatch(setAnswer(userData))
  } catch (e) {
    console.log(e)
  }
}