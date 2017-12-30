# casechek-code

## Project setup
Run `npm install` to install dependencies.

## Running locally
To run the project locally, run `npm start`. The application will be served up on port 4200.

## Running unit tests
To run unit tests, run `npm run test`.

## Building project
To build the project and output minified, run `npm run webpack`.

## Things to note
Upon running the project locally, Webpack may throw an error stating `ERROR in Path must be a string. Received { dot: true }`. This is most likely related to the node version installed on your machine. It's safe to ignore for now as the project will still compile and run.

This project takes the approach of fetching all restaurant data upfront from the Chicago Data API endpoint. The dataset is small enough that this does not result in considerable load time, but if the dataset was much larger it would probably be wise to fetch using a SQL like query in the parameters based on the search term entered by the user. The advantage we get by fetching it all upfront is that that data is now in memory on the client and we don't have to make subsequent HTTP calls.