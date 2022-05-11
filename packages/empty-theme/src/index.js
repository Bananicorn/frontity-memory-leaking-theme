import Theme from "./components";
import menuHandler from "./components/handlers/menu-handler";

const EmptyTheme = {
	name: "empty-theme",
	roots: {
		theme: Theme,
	},
	actions: {
		theme: {
			beforeSSR: async ({ state, actions }) => {
				await actions.source.fetch('/menu/menu/');
			},
		}
	},
	libraries: {
		source: {
			handlers: [menuHandler],
		},
	}
};

export default EmptyTheme;
