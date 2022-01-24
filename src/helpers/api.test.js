import { getOptions, postUser } from "./api"

describe("`getOptions()` TESTS", () => {
	/** @type {import("./api").SelectOptions} */
	let selectOptions
	beforeAll(async () => (selectOptions = await getOptions()))

	test("Returns an object with the correct properties", () => {
		expect(selectOptions).toHaveProperty("occupations")
		expect(selectOptions).toHaveProperty("states")
	})

	test("The `occupations` property contains expected values", () => {
		const { occupations } = selectOptions

		expect(occupations.every((job) => typeof job === "string")).toBe(true)
	})

	test("The `states` property contains expected values", () => {
		const { states } = selectOptions

		expect(states).toHaveLength(51)
		states.forEach((state) => {
			expect(state).toHaveProperty("name")
			expect(state).toHaveProperty("abbreviation")
		})
	})
})

describe("`postUser()` TESTS", () => {
	test("Promise rejected on invalid or empty JSON body", async () => {
		const BAD_REQUEST = { response: { status: 400 } }

		await expect(postUser({})).rejects.toMatchObject(BAD_REQUEST)
		await expect(postUser({ name: "J" })).rejects.toMatchObject(BAD_REQUEST)
	})

	test("Promise resolves when request POST body is valid", async () => {
		/** @type {import("./api").PostBody} */
		const VALID_BODY = {
			name: "J. Lewis",
			email: "inquiries.lewis@gmail.com",
			password: "tqt!KDK7ejf0gxd9yuv",
			occupation: "Entry-level Seat Recliner",
			state: "IN"
		}

		await expect(postUser(VALID_BODY)).resolves.toBe(200)
	})
})
