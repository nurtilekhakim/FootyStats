
# ⚽ FootyStats

FootyStats is a football information web application built with Node.js, Express.js, and EJS.

The application uses TheSportsDB API to retrieve football data, including teams, players, club information, and recent matches.

## Features

- Explore football teams by league
- View detailed club information
- Browse football players
- View recent match results
- Responsive dark-themed interface
- Custom request logging middleware
- Team ID input validation
- Centralized error handling
- API response caching (5 minutes)

## Technologies

- Node.js
- Express.js
- EJS
- Axios
- HTML5
- CSS3
- JavaScript
- TheSportsDB REST API
- dotenv

## Project Architecture

The application follows the MVC pattern:

- Models / Services: API communication and caching
- Views: EJS templates
- Controllers: Request handling
- Routes: URL routing
- Middleware: Logging and validation

## Installation

1. Clone the repository.
2. Open the project folder.
3. Install dependencies:

   npm install

4. Create a .env file:

   PORT=3000

5. Start the application:

   node app.js

6. Open:

   http://localhost:3000

## Application Routes

| Route | Description |
|---|---|
| / | Home page |
| /teams | Browse teams |
| /team/:id | Team details |
| /team/:id/players | Team players |
| /team/:id/matches | Recent matches |

## Error Handling

- 400: Invalid Team ID
- 404: Page Not Found
- 500: Internal Server Error
- 503: External API temporarily unavailable

## API

Football data is provided by TheSportsDB.

https://www.thesportsdb.com/

## Author

Individual Web Development Project

## Academic Purpose

This project was developed for educational purposes.
