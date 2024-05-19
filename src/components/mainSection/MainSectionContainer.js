import { connect } from 'react-redux';
import {
  changeIdInstance,
  changeTokenField,
  changeChatId,
  changeTextareaField,
  setAnswer,
  setAnswerThunkSettings,
  setAnswerThunkStateInstance,
  setThunkSendMessage,
  setThunkSendImage
  
 
} from '../../redux/Actions';


import MainSection from './MainSection';


let mapStateToProps = (state) => {

  return {
    // buttons: state.ButtonsReducer,

    mainState: state.MainReducer
  }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         changeLang: changeLang
//     }
// }


const MainSectionContainer = connect(mapStateToProps,
  {
    changeIdInstance,
    changeTokenField,
    changeChatId,
    changeTextareaField,
    setAnswer,
    setAnswerThunkSettings,
    setAnswerThunkStateInstance,
    setThunkSendMessage,
    setThunkSendImage

 
  })(MainSection)

export default MainSectionContainer