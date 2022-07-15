import { useState } from "react";
import Button from "./UI/Button";
import Profile from "./Profile";
import Loading from './Loading';
import InputUsername from "./InputUsername";

import styles from "./Inspect.module.css";

const Inspect = props => {
	const [isLoading, setIsLoading] = useState(false);
	const [hasData, setHasData] = useState(false);
	const [username, setUsername] = useState("");

	let content = "";
	let profileAttributes = Object.entries(props.profile);

	const onClickHandler = async () => {
		setIsLoading(true);

		await props.onGetProfile(username);

		setIsLoading(false);
		setHasData(true);
	}

	const changeNameHandler = event => setUsername(event.target.value);

	const resetPage = () => setHasData(false);

	if(profileAttributes.length < 1 || !hasData) {
		content = ( 
		<>
			<InputUsername onChange={changeNameHandler} />
			<Button className={`${styles["large-font"]}`} onClick={onClickHandler}>Get Profile</Button>
		</>);
	}
	else {
		content = (
		<>
			<Profile attributes={profileAttributes} />
			<Button className={`${styles["large-font"]}`} onClick={resetPage}>Reset</Button>
		</>);
	}

	return (
		<div className={styles.centeredColumn}>
			{isLoading && <Loading />}
			{content}
		</div>
	);
}

export default Inspect;
