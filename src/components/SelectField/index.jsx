// Components
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"

// Hooks
import { useState } from "react"

/**
 * A sub-component of the `SignupForm` which implements a selection field by use of props
 * @param {object} props - the component properties
 * @param {string} props.name - the name of the select element (not case sensitive)
 * @param {array} props.options - a list of options to populate the select element
 * @param {function} props.callback - an optional callback override for the selection options
 */
export default function SelectField({
	name,
	options,
	callback = (o) => <MenuItem key={o} value={o} children={o} />,
}) {
	const NAME = name.toLowerCase()
	const LABEL = `${name[0].toUpperCase()}${NAME.slice(1)}`
	const LABEL_ID = `${NAME}-select-label`

	const [value, setValue] = useState("")

	return (
		<FormControl required>
			<InputLabel id={LABEL_ID}>{LABEL}</InputLabel>
			<Select
				name={NAME}
				labelId={LABEL_ID}
				label={LABEL}
				value={value}
				onChange={({ target }) => setValue(target.value)}>
				{options?.map(callback) || (
					<MenuItem disabled>Loading {NAME}s...</MenuItem>
				)}
			</Select>
		</FormControl>
	)
}
