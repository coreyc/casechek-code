# casechek-code

## Project setup
Run `npm install` to install dependencies.

## Running locally
To run the project locally, run `gulp start`. The application will be served up on port 4200.

## Running unit tests
To run unit tests, run `gulp test`.

## Building project
To build the project, run `gulp build`. The output (with minified JS and CSS) will be output to dist/.

## Things to note
This project takes the approach of fetching all restaurant data upfront from the Chicago Data API endpoint. The dataset is small enough that this does not result in considerable load time, but if the dataset was much larger it would probably be wise to fetch using a SQL like query in the parameters based on the search term entered by the user. The advantage we get by fetching it all upfront is that that data is now in memory on the client and we don't have to make subsequent HTTP calls.