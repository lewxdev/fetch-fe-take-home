# Fetch Frontend Take-Home Exercise #
*completed by J. Lewis (@[lewxdev](https://www.github.com/lewxdev))*

The given exercise, provided by Fetch Rewards hiring, demonstrates competency in frontend web development by producing a user creation form which interfaces with a basic API to `POST` some validated data. The codebase is well [documented using JSDoc](https://jsdoc.app/), the UI/UX of the webpage is clean and intuitive, and meets all [the exercise guidelines](https://fetch-hiring.s3.amazonaws.com/frontend.html).

## Deliverables ##
1. The user creation form has the inputs: `name`, `email`, `password`, `occupation`, and `state`
2. The form can be completed and submitted
3. Inputs should be pre-validated before form submission
4. Feedback is provided on successful form submission

## Dependencies ##
Justification for the few core dependencies of this project lies in its values for *code quality* and *developer and user experience*
+ [`@craco/craco`](https://www.npmjs.com/package/@craco/craco) - Allows for advanced configuration of webpack in create react app without ejection from the default (used for webpack aliases)
+ [`@mui/material`](https://mui.com) - MUI and its sibling dependencies (`@emotion/react` and `@emotion/styled`) are used as the primary React UI library for rapid/extensible development
+ [`axios`](https://www.npmjs.com/package/axios) - Provides a developer-friendly alternative to the browser-native [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) for making HTTP requests (for interfacing with the exercise's provided API)
+ [`email-validator`](https://www.npmjs.com/package/email-validator) - Provides a plug-and-play solution for validation of email strings

[See the completed exercise](https://lewxdev.github.io/fetch-fe-take-home)
