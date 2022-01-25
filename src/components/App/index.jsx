import { StrictMode } from "react"
import Container from "@mui/material/Container"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider, createTheme } from "@mui/material/styles"

import useMediaQuery from "@mui/material/useMediaQuery"

import themeContent from "./theme"

/**
 * The root React component of the app. Includes necessary configuration for MUI and React
 * @param {object} props - the component properties
 * @param {import("react").ReactNode} props.children - provided children, typically JSX element(s)
 */
export default function App({ children }) {
	const prefersDark = useMediaQuery("(prefers-color-scheme: dark)")
	const theme = createTheme(
		{ palette: { mode: prefersDark ? "dark" : "light" } },
		themeContent
	)
	const lg = useMediaQuery(theme.breakpoints.down("lg"))

	return (
		<StrictMode>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Container maxWidth={lg ? "sm" : "md"}>{children}</Container>
			</ThemeProvider>
		</StrictMode>
	)
}
