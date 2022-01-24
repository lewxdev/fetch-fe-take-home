import axios from "axios"

/** The provided URL to make HTTP requests on */
const ENDPOINT_URL = "https://frontend-take-home.fetchrewards.com/form"

/**
 * An object representing a valid US state option
 * @typedef {object} State
 * @property {string} name - The literal name of the state
 * @property {string} abbreviation - The two-character abbreviation of the state
 */

/**
 * An object of form selection fields as keys and their respective valid options
 * @typedef {object} SelectOptions
 * @property {string[]} occupations - A list of valid occupations (strings)
 * @property {State[]} states - A list of valid states (objects)
 */

/**
 * Retrieves valid options for the form selection fields via the endpoint URL
 * @returns {Promise<SelectOptions>} a Promise for the SelectionOptions
 */
export const getOptions = async () =>
	await axios.get(ENDPOINT_URL).then(({ data }) => data)

/**
 * An object representing the POST body for the user creation form
 * @typedef {object} PostBody
 * @property {string} name - The full name of the user
 * @property {string} email - A valid email for the user
 * @property {string} password - The user password (backend should process this)
 * @property {string} occupation - The occupation of the user
 * @property {string} state - The US state of the user (abbreviated)
 */

/**
 * Sends valid JSON representing user creation data from a submission form
 * @param {PostBody} data - the POST body for the user creation form
 * @returns the `status` of the response given it was successful
 */
export const postUser = async (data) =>
	await axios.post(ENDPOINT_URL, data).then(({ status }) => status)
