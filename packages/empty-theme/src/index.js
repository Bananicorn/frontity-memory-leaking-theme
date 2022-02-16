import Theme from "./components";

const EmptyTheme = {
	name: "empty-theme",
	state: {
		theme: {
			autoPrefetch: "in-view",
		}
	},
	roots: {
		theme: Theme,
	},
	actions: {
		//beforeSSR: async ({ state, actions }) => {
			//await actions.source.fetch(state.router.link);
		//}
	},
};

export default EmptyTheme;
