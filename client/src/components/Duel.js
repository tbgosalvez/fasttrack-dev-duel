import { useState } from "react";
import styles from "./Duel.module.css";
import InputUsername from "./InputUsername";
import Loading from "./Loading";
import Profile from "./Profile";
import Button from "./UI/Button";

const Duel = props => {
	const [isLoading, setIsLoading] = useState(false);
	const [hasData, setHasData] = useState(false);

	let content = "";
	const usernames = [];
	let profileAttributes = [];

	for (let pp of props.profiles) profileAttributes.push(Object.entries(pp));

	const onClickHandler = async () => {
		setIsLoading(true);
		await props.onDuel(usernames);

		setIsLoading(false);
		setHasData(true);
	};

	const changeNameHandler = event => (usernames[event.target.id] = event.target.value);

	const resetPage = () => setHasData(false);

	if (profileAttributes.length < 1 || !hasData) {
		content = (
			<>
				<div className={styles.versus}>
					<InputUsername id={0} onChange={changeNameHandler} />
					<InputUsername id={1} onChange={changeNameHandler} />
				</div>
				<Button className={styles.btn_duel} onClick={onClickHandler}>
					DUEL
				</Button>
			</>
		);
	} else {
		content = (
			<>
				<div className={styles.versus}>
					<div className={styles.card_vs}>
						<Profile attributes={profileAttributes[0]} />
					</div>
					<div className={styles.img_vs}>
						<img src="..//street-fighter-vs.png" />
					</div>
					<div className={styles.card_vs}>
						<Profile attributes={profileAttributes[1]} />
					</div>
				</div>
				<Button className={styles.btn_duel} onClick={resetPage}>
					Reset
				</Button>
			</>
		);
	}

	return (
		<div className={styles.container}>
			{isLoading && <Loading />}
			{content}
		</div>
	);
};

export default Duel;
