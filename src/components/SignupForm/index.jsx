// Components
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import MenuItem from "@mui/material/MenuItem"
import TextField from "@mui/material/TextField"
import { SelectField } from "@components"

// Hooks
import { useState, useRef, useEffect } from "react"

// Miscellaneous
import { validate } from "email-validator"
import { getOptions, postUser } from "@helpers/api"
/** @typedef {import("@helpers/api").SelectOptions} SelectOptions */

/** The primary form component with all required fields for user creation */
export default function SignupForm() {
	/** @type {[SelectOptions, import("react").Dispatch<SelectOptions>]} */
	const [{ states, occupations }, setOptions] = useState({})
	const [emailError, setEmailError] = useState(false)
	const [passwordError, setPasswordError] = useState(false)
	const formEl = useRef(null)

	/**
	 * The form submission event handler for validating and sending the POST request
	 * @type {import("react").FormEventHandler<HTMLFormElement>}
	 */
	const handleSubmit = (event) => {
		event.preventDefault()
		const DATA = new FormData(formEl.current)

		// Form validation
		if (!validate(DATA.get("email"))) setEmailError(true)
		if (DATA.get("password") !== DATA.get("password-confirm"))
			setPasswordError(true)

		if (emailError || passwordError) return

		// Form submission
		DATA.delete("password-confirm")
		postUser(Object.fromEntries(DATA.entries())).then((response) => {
			if (response === 200) console.log("SENT")
		})
	}

	// Retrieve options from API when component mounts
	useEffect(() => (async () => setOptions(await getOptions()))(), [])

	return (
		<Box component="form" ref={formEl} onSubmit={handleSubmit}>
			<TextField name="name" label="Full Name" />
			<TextField
				name="email"
				label="Email Address"
				error={emailError}
				helperText={emailError && "Please enter valid email"}
				onChange={() => setEmailError(false)}
			/>
			<TextField
				name="password"
				label="Password"
				type="password"
				error={passwordError}
				helperText={passwordError && "Passwords do not match"}
				onChange={() => setPasswordError(false)}
			/>
			<TextField
				name="password-confirm"
				label="Confirm Password"
				type="password"
				error={passwordError}
				helperText={passwordError && "Passwords do not match"}
				onChange={() => setPasswordError(false)}
			/>

			<SelectField name="occupation" options={occupations} />
			<SelectField
				name="state"
				options={states}
				callback={({ name, abbreviation }) => (
					<MenuItem key={abbreviation} value={abbreviation}>
						{name}
					</MenuItem>
				)}
			/>
			<Button type="submit">Signup</Button>
			<Button variant="outlined">Login</Button>
		</Box>
	)
}
