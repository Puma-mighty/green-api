import styles from "./textArea.module.sass";

const TextArea = (props) => {
  return (
    <>
      {/* <label for="bio">Bio</label> */}
      <textarea
        className={styles.textArea}
        name="textArea"
        
        cols="30"
        rows="5"
        id="textArea"
        defaultValue={props.value}
        onChange={(e) => {
          props.onChange(e.target.value);
        }}></textarea>
    </>
  );
};

export default TextArea;