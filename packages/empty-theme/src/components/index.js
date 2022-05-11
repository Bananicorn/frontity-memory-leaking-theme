import { connect } from "frontity";

const Theme = ({ state, actions, libraries }) => {
	const menu = state.source.get('/menu/menu/');

	return menu.isReady ? (
		<>
			<h2>Menu Items:</h2>
			{menu.items && menu.items.map((item, id) => {
				return (
					<div key={id}>
						<a href={item.url}>{item.title}</a>
					</div>
				);
			})}
		</>
	) : null;
};

export default connect(Theme);
