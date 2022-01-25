import Dialog from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"

/**
 * A sub-component of the `SignupForm` to display feedback to the user on submission
 * @param {object} props - the component properties
 * @param {string=} props.title - the title to use for the dialog
 * @param {string} props.content - the message content of the dialog
 */
export default function SubmitDialog({ title, content }) {
	return (
		<Dialog
			open={Boolean(content)}
			onClose={() => window.location.reload()}>
			{title && <DialogTitle>{title}</DialogTitle>}
			<DialogContent>
				<DialogContentText>{content}</DialogContentText>
			</DialogContent>
		</Dialog>
	)
}
