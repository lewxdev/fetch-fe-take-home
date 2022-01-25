// Components
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import MenuItem from "@mui/material/MenuItem"
import TextField from "@mui/material/TextField"
import { SelectField, SubmitDialog } from "@components"

// Hooks
import { useState, useEffect } from "react"

// Miscellaneous
import { validate } from "email-validator"
import { getOptions, postUser } from "@helpers/api"
import { successCreateUser, errorCreateUser } from "@helpers/lang/dialog"
import { PASSWORD_MATCH, EMAIL_INVALID } from "@helpers/lang/errors"
/** @typedef {import("@helpers/api").SelectOptions} SelectOptions */

/** The primary form component with all required fields for user creation */
export default function SignupForm() {
	/** @type {[SelectOptions, import("react").Dispatch<SelectOptions>]} */
	const [{ states, occupations }, setOptions] = useState({})
	const [{ title, content }, setDialog] = useState({})
	const [emailError, setEmailError] = useState(false)
	const [passwordError, setPasswordError] = useState(false)

	/**
	 * The form submission event handler for validating and sending the POST request
	 * @type {import("react").FormEventHandler<HTMLFormElement>}
	 */
	const handleSubmit = (event) => {
		event.preventDefault()
		const { currentTarget: formEl } = event
		const DATA = new FormData(formEl)

		// Form validation
		const emailInvalid = !validate(DATA.get("email"))
		const passwordInvalid = DATA.get("password") !== DATA.get("password2")

		setEmailError(emailInvalid)
		setPasswordError(passwordInvalid)
		if (emailInvalid || passwordInvalid) return

		// Form submission
		DATA.delete("password2")

		postUser(Object.fromEntries(DATA.entries()))
			.then((response) => {
				if (response !== 200) return setDialog(errorCreateUser())
				setDialog(successCreateUser(DATA))
			})
			.catch(() => setDialog(errorCreateUser()))
	}

	// Retrieve options from API when component mounts
	useEffect(() => (async () => setOptions(await getOptions()))(), [])

	return (
		<Box component="form" onSubmit={handleSubmit}>
			<Grid
				container
				height="100vh"
				justifyContent="center"
				flexDirection="column">
				<SubmitDialog title={title} content={content} />
				<Grid item>
					<Grid container spacing={2} columns={2}>
						<Grid item xs={2} sm={1}>
							<TextField name="name" label="Full Name" />
						</Grid>
						<Grid item xs={2} sm={1}>
							<TextField
								name="email"
								label="Email Address"
								error={emailError}
								helperText={emailError && EMAIL_INVALID}
								onChange={() => setEmailError(false)}
							/>
						</Grid>

						<Grid item xs={2} sm={1}>
							<TextField
								name="password"
								label="Password"
								type="password"
								error={passwordError}
								helperText={passwordError && PASSWORD_MATCH}
								onChange={() => setPasswordError(false)}
							/>
						</Grid>
						<Grid item xs={2} sm={1}>
							<TextField
								name="password2"
								label="Confirm Password"
								type="password"
								error={passwordError}
								helperText={passwordError && PASSWORD_MATCH}
								onChange={() => setPasswordError(false)}
							/>
						</Grid>

						<Grid item xs={2} sm={1}>
							<SelectField
								name="occupation"
								options={occupations}
							/>
						</Grid>
						<Grid item xs={2} sm={1}>
							<SelectField
								name="state"
								options={states}
								callback={({ name, abbreviation }) => (
									<MenuItem
										key={abbreviation}
										value={abbreviation}>
										{name}
									</MenuItem>
								)}
							/>
						</Grid>
					</Grid>
					<Box sx={{ mt: 2 }}>
						<Grid container spacing={2} justifyContent="end">
							<Grid item>
								<Button type="submit">Signup</Button>
							</Grid>
						</Grid>
					</Box>
				</Grid>
			</Grid>
		</Box>
	)
}
