import Card from "./UI/Card";
import ProfileAttribute from "./ProfileAttribute";
import styles from "./Profile.module.css";
import Winner from "./Winner";

const Profile = props => {
	console.log(props.attributes);

	let imagePos = props.flipped ? 1 : 0;

	const avatar_url = props.attributes.filter(e => e[0].includes("avatar-url")).flat();
	const attributes = props.attributes.filter(e => !e[0].includes("avatar-url"));

	return (
		<Card className={styles.default}>
			{props.winner && <Winner />}
			<img src={avatar_url[1]} alt="[a pretty good photo]" style={{order: imagePos}} />
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
