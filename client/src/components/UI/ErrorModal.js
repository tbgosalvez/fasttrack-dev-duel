import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <>
      <div className={styles.backdrop} onClick={props.onClick}></div>
      <Card className={styles.error_modal}>
        <header>
          <h2>{props.title}</h2>
        </header>
        <p>{props.message}</p>
        <footer>
          <Button onClick={props.onClick}>ok</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
