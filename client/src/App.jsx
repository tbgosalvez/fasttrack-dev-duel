import { useEffect, useState } from "react";

import { inspectUser, duelUsers } from "./services/userService";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import { Navbar } from "./components";
import Inspect from "./components/Inspect";

import styles from "./App.module.css";
import Welcome from "./components/Welcome";
import Duel from "./components/Duel";

function App() {
	const [userProfile, setUserProfile] = useState({});
	const [duelProfiles, setDuelProfiles] = useState([]);

	// Hook that runs after React has updated the DOM
	// useEffect(() => {
	//   inspectUser()
	// }, [])

	const getProfileHandler = async username => {
		setUserProfile(await inspectUser(username));
	}

	const getVersusHandler = async usernamesArray => {
		setDuelProfiles(await duelUsers(...usernamesArray));
	}

	return (
		<Router>
			<GlobalStyles />
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
						<Duel onDuel={getVersusHandler} profiles={duelProfiles} />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
