/** @type {import("@mui/material").ThemeOptions} */
const themeContent = {
	components: {
		MuiButton: {
			defaultProps: {
				variant: "contained",
			},
		},
		MuiFormControl: {
			defaultProps: {
				fullWidth: true,
			},
		},
		MuiTextField: {
			defaultProps: {
				required: true,
				fullWidth: true,
			},
		},
	}
}

export default themeContent
