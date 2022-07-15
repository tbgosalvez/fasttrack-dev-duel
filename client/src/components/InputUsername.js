import styles from "./InputUsername.module.css";

const InputUsername = props => {
	return <input id={props.id} className={styles.default} type="text" placeholder="Enter Username" onChange={props.onChange} />;
};

export default InputUsername;
