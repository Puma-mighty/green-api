import axios from 'axios';
import store from '../redux/ReduxStore';


// const idInstance = store.getState().MainReducer.idInstance
// const tokenInstance = store.getState().MainReducer.apiTokenInstance
// const chatId = store.getState().MainReducer.chatId
// const textAreaValue = store.getState().MainReducer.textAreaValue

// console.log(idInstance," ", tokenInstance)

export const getSettings = async () => {
  try {
    const idInstance = store.getState().MainReducer.idInstance
    const tokenInstance = store.getState().MainReducer.apiTokenInstance
    // use data destructuring to get data from the promise object
    const { data: response } = await axios.get(`https://api.green-api.com/waInstance${idInstance}/getSettings/${tokenInstance}`);
    return response;
    
  } catch (error) {
    console.log(error);
  }
};

export const getStateInstance = async () => {
  try {
    
    const idInstance = store.getState().MainReducer.idInstance
    const tokenInstance = store.getState().MainReducer.apiTokenInstance
    // use data destructuring to get data from the promise object
    const { data: response } = await axios.get(`https://api.green-api.com/waInstance${idInstance}/getStateInstance/${tokenInstance}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const postSendMessage = async () => {
  try {
    const idInstance = store.getState().MainReducer.idInstance
    const tokenInstance = store.getState().MainReducer.apiTokenInstance
    const chatId = store.getState().MainReducer.chatId
    const textAreaValue = store.getState().MainReducer.textAreaValue
    // use data destructuring to get data from the promise object
    const { data: response } = await axios.post(`https://api.green-api.com/waInstance${idInstance}/sendMessage/${tokenInstance}`,
      JSON.stringify({
        "chatId": `${chatId}@c.us`,
        "message": `${textAreaValue}`
      }),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const postSendImage = async () => {
  try {
    const idInstance = store.getState().MainReducer.idInstance
    const tokenInstance = store.getState().MainReducer.apiTokenInstance
    const chatId = store.getState().MainReducer.chatId
    const textAreaValue = store.getState().MainReducer.textAreaValue
    var formData = new FormData();
    var imagefile = document.querySelector('#file');
    if (imagefile.files[0]) {
      formData.append("file", imagefile.files[0])
      formData.append("caption", `${textAreaValue}`)
      formData.append("chatId", `${chatId}@c.us`);
      console.log("formData: ", formData)
      const { data: response } = await axios.post(`https://api.green-api.com/waInstance${idInstance}/sendFileByUpload/${tokenInstance}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      );
      console.log(response)
      return response;
    }

  } catch (error) {
    console.log(error);
  }
} 
