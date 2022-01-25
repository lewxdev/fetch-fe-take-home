// Helpers for generating dialog message content (objects with `title` and `content` properties)

/** A utility class for constructing Dialog objects */
class Dialog {
	/**
	 * @param {string} title
	 * @param  {...string} content
	 */
	constructor(title, ...content) {
		this.title = title
		this.content = content.join("\n")
	}
}

/**
 * Returns a Dialog object representing the success of a newly created user
 * @param {FormData} data - the form data of the successfully created user
 */
export const successCreateUser = (data) =>
	new Dialog(
		"Success!",
		`Created new user "${data.get("name")}".`,
		`Look for an email confirmation in your inbox: ${data.get("email")}`
	)

/** Returns a Dialog object representing an error in the create user process */
export const errorCreateUser = () =>
	new Dialog(
		"Oops.",
		"Something went wrong when trying to create that user.",
		"It could be our fault, try again?"
	)
