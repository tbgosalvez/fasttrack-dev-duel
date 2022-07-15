import styles from "./ProfileAttribute.module.css";

const ProfileAttribute = props => {
	return (
		<div className={styles.default}>
			<div>{props.attr}</div>
			<div>{props.value}</div>
		</div>
	);
};

export default ProfileAttribute;
