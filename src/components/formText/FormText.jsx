
import styles from "./formText.module.sass";

const FormText = (props) => {
  // console.log('form: ', props)
  return (
    <div className={styles.formText}>
      {/* <label for={props.nameField}>{props.nameField}</label> */}
      <input
        type="text"
        name={props.nameField}
        id={props.nameField}
        placeholder={props.placeholder}
        value={props.value}
       
        onChange={(e) => {
          if (props.nameField === "idInstance") {
            props.onChange(+e.target.value.replace(/\D/g, ""));
            // props.onChange(+e.target.value.replace(/[^\d]/, ""));
            return;
          }
          if (props.nameField === "ApiTokenInstance")
            props.onChange(e.target.value);
          if (props.nameField === "chatId")
            props.onChange(+e.target.value.replace(/\D/g, ""));
        }}
      />
    </div>
  );
}

export default FormText