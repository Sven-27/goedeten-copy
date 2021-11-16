import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
	palette: {
		/* dark green */
		primary: {
			light: "#98bf82",
			main: "#1c3a2c",
		},
		/* red */
		secondary: {
			main: "#c32924",
		},
		// red
		error: {
			main: "#c32924",
		},
		// yellow
		warning: {
			main: "#f2f23d",
			dark: "#c32924",
		},
		/* light-green */
		info: {
			light: "#ffffdb",
			main: "#98bf82",
			dark: "#1c3a2c",
		},
		/* olive green */
		success: {
			main: "#6f9100",
		},
	},
});

export default theme;
