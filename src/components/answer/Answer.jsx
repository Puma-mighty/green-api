import styles from "./answer.module.sass";

const Answer = (props) => {
  return (
    <div>
      <h3>Ответ:</h3>
      <div className={styles.answer}>
        {JSON.stringify(props.answer,null,1)}
      </div>
    </div>
  );
};

export default Answer;
