import { connect } from "frontity";

const Theme = ({ state, actions, libraries }) => {
	const data = state.source.get(state.router.link);
	const post = state.source[data.type][data.id];

	return data.isReady ? (
		<>
			{data.items && data.items.map(({link, id}) => {
				return (
					<>
						<a href={link} key={id}>{link}</a>
						<br />
					</>
				);
			})}
			{!data.items && (<a href="/">home</a>)}
		</>
	) : null;
};

export default connect(Theme);
