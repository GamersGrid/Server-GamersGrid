# GamersGrid Backend

![GG LOGO](./images/gg.jpg)


## Description
This repository contains the backend code for GamersGrid, a platform for creating and managing gaming tournaments.

**IMPORTANT:**
This is the Backend (Express API) repository.

For the frontend code, please refer to the [GamersGrid Frontend Repository](https://github.com/GamersGrid/Client-GamersGrid).

## Instructions to Run this App on Your Computer
To run this application on your computer, follow these steps:

```bash
# Clone this repository to your local machine.
git clone https://github.com/GamersGrid/Server-GamersGrid

# Navigate to the project directory.
cd Server-GamersGrid

# Install the necessary dependencies.
npm install

# Set up any required environment variables. Refer to the documentation for a list of environment variables needed.

# Start the application.
npm run dev
```


## API Endpoints


**Authentication**



| HTTP verb   | Path | Request Headers | Request body  | Description |
| ------------- | ------------- | ------------- |------------- | ------------- |
| POST  | /api/auth/signup  | –  | { email: String, password: String, username: String }  | Create a new user in the database  |
| POST  | /api/auth/login  | –  | { email: String, password: String }  | Verifies email and password and returns a JWT  |
| GET  | /api/auth/verify  | Authorization: Bearer `<jwt>`  | –  | Used to verify JWT stored on the client  |




**Games**



| HTTP verb   | Path | Request Headers | Request body  | Description |
| ------------- | ------------- | ------------- |------------- | ------------- |
| POST  | /api/games/create  | Authorization: Bearer `<jwt>`  | { title: String, type: String, image: String }  | Create a new game  |
| GET  | /api/games  | –  | –  | Get all games  |
| GET  | /api/games/:gameId  | –  | – | Get game details  |
| PUT  | /api/games/:gameId  | Authorization: Bearer `<jwt>`  | { title: String, image: String }  | Update a game  |
| DELETE  | /api/games/:gameId  | Authorization: Bearer `<jwt>`  | – | Delete a game  |




**Tournaments**



| HTTP verb   | Path | Request Headers | Request body  | Description |
| ------------- | ------------- | ------------- |------------- | ------------- |
| POST  | /api/tournaments  | Authorization: Bearer `<jwt>`  | { title: String, description: String, prize: String, participants: Number, game: String, dateTime: Date, author: String }  | Create a new tournament  |
| GET  | /api/tournaments  | –  | –  | Get all tournaments  |
| GET  | /api/tournaments/:tournamentId  | –  | – | Get tournament details  |
| PUT  | /api/tournaments/:tournamentId  | Authorization: Bearer `<jwt>`  | { title: String, description: String, prize: String, participants: Number, game: String, dateTime: Date, author: String }  | Update a tournament  |
| DELETE  | /api/tournaments/:tournamentId  | Authorization: Bearer `<jwt>`  | – | Delete a tournament  |


## Demo
You can access the deployed version of GamersGrid on Netlify at [GamersGrid](https://gamersgrid.netlify.app/).


