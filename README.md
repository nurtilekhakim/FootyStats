# ⚽ FootyStats

FootyStats is a football information web application developed using Node.js, Express.js, EJS, and TheSportsDB API.

The application allows users to explore football clubs, search for teams, view player information, and check recent match results.

**Live Website:** https://footystats-f3xx.onrender.com

**GitHub Repository:** https://github.com/nurtilekhakim/FootyStats

## Features

- Explore football teams by league
- Search for football teams by name
- View detailed club information
- Browse team players
- View recent match results
- Responsive dark-themed user interface
- Dynamic EJS templates
- Custom request logging middleware
- Team ID input validation
- Centralized error handling
- API response caching for 5 minutes

## Technologies Used

- Node.js
- Express.js
- EJS
- Axios
- JavaScript
- HTML5 and CSS3
- TheSportsDB REST API
- dotenv
- Git and GitHub
- Render

## Project Architecture

FootyStats follows the Model-View-Controller (MVC) architectural pattern.

- **Routes:** Define application endpoints and connect requests to controllers.
- **Controllers:** Process incoming requests and prepare data for rendering.
- **Services:** Communicate with TheSportsDB API using Axios.
- **Views:** Display dynamic football data using EJS templates.
- **Middleware:** Handle request logging and team ID validation.
- **Cache:** Temporarily stores API responses to reduce repeated requests.

## Installation and Setup

1. Clone the repository:

   `git clone https://github.com/nurtilekhakim/FootyStats.git`

2. Navigate to the project directory:

   `cd FootyStats`

3. Install dependencies:

   `npm install`

4. Create a `.env` file in the project root:

   `PORT=3000`

5. Start the application:

   `npm start`

6. Open the application in your browser:

   `http://localhost:3000`

## Application Routes

| Method | Route | Description |
|---|---|---|
| GET | `/` | Home page |
| GET | `/teams` | Browse football teams |
| GET | `/team/:id` | View team details |
| GET | `/team/:id/players` | View team players |
| GET | `/team/:id/matches` | View recent matches |
| POST | `/search` | Search for a football team by name |

## API Integration

The application uses TheSportsDB REST API to retrieve football information.

API operations include:

1. Retrieving teams by league.
2. Retrieving detailed information about a team.
3. Retrieving players associated with a team.
4. Retrieving recent match results.
5. Searching for teams using a user-provided name.

Axios handles HTTP requests to the external API.

**API Provider:** https://www.thesportsdb.com/

## Middleware and Error Handling

The application implements built-in and custom Express middleware.

- Request logging
- URL-encoded form processing
- JSON request processing
- Static file serving
- Team ID validation
- Centralized error handling

Supported error responses:

- **400:** Invalid Team ID or search input
- **404:** Page Not Found
- **500:** Internal Server Error
- **503:** External API temporarily unavailable

## Caching

FootyStats uses in-memory caching to store API responses for 5 minutes.

Caching helps reduce repeated API requests and improve response times.

## Deployment

The application is hosted on Render and its source code is maintained on GitHub.

**Live Application:** https://footystats-f3xx.onrender.com

## Academic Purpose

FootyStats was developed as an individual Web Development project to demonstrate API integration, Express routing, MVC architecture, middleware, EJS templating, and deployment.

## AI Usage Declaration

AI tools, including ChatGPT, were used to assist with understanding programming concepts, generating and reviewing code, troubleshooting errors, and preparing documentation.

The project was