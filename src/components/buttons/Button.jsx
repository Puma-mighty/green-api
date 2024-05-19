import styles from "./button.module.sass";

const Button = (props) => {
  return (
    <div className={styles.ButtonWrapper}>
      <button
        type="button"
        onClick={() => {
          if (props.nameButton === "getStateInstance")
            props.getStateInstance();
          if (props.nameButton === "getSettings")
            props.getSettings();
          if (props.nameButton === "sendMessage")
            props.setThunkSendMessage();

          
        }}>
        {props.nameButton}
      </button>
    </div>
  );
};

export default Button;
