import styles from "./fileinput.module.sass"

const FileInput = (props) => {
  return (
    <form
      className={styles.fileInput}
      method="post"
      encType="multipart/form-data">
      <div>
        {/* <label for="file">Choose file to upload</label> */}
        <input
          type="file"
          id="file"
          name="file"
        />
      </div>
      <div>
        <button className={styles.sendButton}
          type="button"
          onClick={props.setThunkSendImage}
        >
          sendFileByUrl
        </button>
      </div>
    </form>
  );
};

export default FileInput;