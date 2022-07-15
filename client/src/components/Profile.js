import Card from "./UI/Card";
import ProfileAttribute from "./ProfileAttribute";
import styles from "./Profile.module.css";

const Profile = props => {
	console.log(props.attributes);

	const avatar_url = props.attributes.filter(e => e[0].includes("avatar-url")).flat();
	const attributes = props.attributes.filter(e => !e[0].includes("avatar-url"));

	return (
		<Card className={styles.default}>
			<img src={avatar_url[1]} alt="[a pretty good photo]" />
			<ul>
				{attributes.map(a => {
					return (
						<li key={Math.random()}>
							<ProfileAttribute attr={a[0]} value={a[1]} />
						</li>
					)
				})}
			</ul>
		</Card>
	);
}

export default Profile;
