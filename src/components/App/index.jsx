import React, { StrictMode } from "react"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider, createTheme } from "@mui/material/styles"

import useMediaQuery from "@mui/material/useMediaQuery"

/**
 * The root React component of the app. Includes necessary configuration for MUI and React
 * @param {object} props - the component properties
 * @param {import("react").ReactNode} props.children - provided children, typically JSX element(s)
 */
export default function App({ children }) {
	const prefersDark = useMediaQuery("(prefers-color-scheme: dark)")
	const theme = createTheme({
		palette: {
			mode: prefersDark ? "dark" : "light",
		},
	})

	return (
		<StrictMode>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</StrictMode>
	)
}
