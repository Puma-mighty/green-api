import Answer from "../answer/Answer";
import Button from "../buttons/Button";
import FileInput from "../fileInput/FileInput";
import FormText from "../formText/FormText";
import TextArea from "../textArea/TextArea";
import styles from "./mainSection.module.sass";

const MainSection = (props) => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.leftSide}>
        <FormText
          placeholder={props.mainState.idInstance}
          onChange={props.changeIdInstance}
          nameField="idInstance"
          value={props.mainState.idInstance}
        />
        <FormText
          placeholder={props.mainState.apiTokenInstance}
          onChange={props.changeTokenField}
          nameField="ApiTokenInstance"
          value={props.mainState.apiTokenInstance}
        />
        <br />
        <Button
          nameButton="getSettings"
          getSettings={props.setAnswerThunkSettings}
          idInstance={props.mainState.idInstance}
          apiTokenInstance={props.mainState.apiTokenInstance}
        />
        <Button
          nameButton="getStateInstance"
          getStateInstance={props.setAnswerThunkStateInstance}
          idInstance={props.mainState.idInstance}
          apiTokenInstance={props.mainState.apiTokenInstance}
        />
        <br />
        <br />
        <FormText
          placeholder={props.mainState.chatId}
          nameField="chatId"
          onChange={props.changeChatId}
          value={props.mainState.chatId}
        />
        <TextArea
          value={props.mainState.textAreaValue}
          onChange={props.changeTextareaField}
        />
        <Button
          nameButton="sendMessage"
          setThunkSendMessage={props.setThunkSendMessage}
        />
        <br />
        <FormText
          nameField="chatId"
          onChange={props.changeChatId}
          value={props.mainState.chatId}
        />
        <FileInput setThunkSendImage={props.setThunkSendImage} />
      </div>
      <div className={styles.rightSide}>
        <Answer answer={props.mainState.answer} />
      </div>
    </div>
  );
};

export default MainSection;
