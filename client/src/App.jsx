import { useEffect, useState } from "react";

import { inspectUser, duelUsers } from "./services/userService";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components";
import Inspect from "./components/Inspect";

import styles from "./App.module.css";
import Welcome from "./components/Welcome";
import Duel from "./components/Duel";

function App() {
	const [userProfile, setUserProfile] = useState({});
	const [duelProfiles, setDuelProfiles] = useState([]);
	const [winner, setWinner] = useState(null);

	// Hook that runs after React has updated the DOM
	// useEffect(() => {
	//   inspectUser()
	// }, [])

	const getProfileHandler = async username => setUserProfile(await inspectUser(username));

	const getVersusHandler = async usernamesArray => {
		const p = await duelUsers(...usernamesArray);
		setDuelProfiles(p);
		
		// do this instead of reading duelProfiles
		// because it won't change until after re-render
		determineWinner(p);
	};

	const determineWinner = profiles => {
		const [user0, user1] = profiles;
		const weights = {
			followers: 2.5,
			following: 1.5,
			"highest-starred": 5,
			"public-repos": 7,
			"perfect-repos": 9,
			"total-stars": 2
		}
		let score = 0;

		for(let key in weights) {
			score += user0[key] * weights[key];
			score -= user1[key] * weights[key];
		}

		// stuff with titles

		let w = (score > 0) ? user0.username : user1.username;
		if(score === 0) w = "draw";

		setWinner(w);
	}

	return (
		<Router>
			<Navbar />
			<div className={styles.container}>
				<Switch>
					<Route exact path="/">
						<Welcome />
					</Route>
					<Route exact path="/inspect">
						<Inspect onGetProfile={getProfileHandler} profile={userProfile} />
					</Route>
					<Route exact path="/duel">
						<Duel onDuel={getVersusHandler} profiles={duelProfiles} victor={winner} />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
