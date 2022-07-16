import styles from "./ProfileAttribute.module.css";

const ProfileAttribute = props => {
	return (
		<div className={styles.default}>
			<div className={styles.attr}>{props.attr}</div>
			<div className={styles.value}>{props.value}</div>
		</div>
	);
};

export default ProfileAttribute;
