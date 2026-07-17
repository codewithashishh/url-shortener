# URL Shortener

A server-side URL shortener application built with Node.js, Express.js, MongoDB, Mongoose, and EJS. The project allows users to create shortened URLs and tracks the number of times each shortened URL is visited.

## Features

* Create short URLs from long URLs
* Redirect short URLs to their original URLs
* Track the number of clicks on shortened URLs
* Server-side rendering using EJS
* User signup and login
* Password hashing using bcrypt
* Session-based authentication using express-session
* Protected routes using authentication middleware
* Logout functionality
* Duplicate email validation during signup

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* EJS
* bcrypt
* express-session

## Authentication Flow

1. A new user creates an account through the signup page.
2. The user's password is hashed using bcrypt before being stored in MongoDB.
3. The user logs in using their email and password.
4. The entered password is verified against the stored password hash using bcrypt.
5. After successful login, the user's MongoDB ID is stored in the server-side session.
6. The browser receives a session cookie containing the session identifier.
7. Authentication middleware protects the URL shortener page from unauthenticated users.
8. Logging out destroys the user's session.

## Upcoming Improvements

* Associate shortened URLs with individual users
* Display only URLs created by the currently logged-in user
* Improve error handling and validation
* Store sensitive configuration using environment variables
* Add production-ready session storage and cookie configuration

## Run Locally

Install dependencies:

```bash
npm install
```

Start the application:

```bash
npm start
```

The application runs on:

```text
http://localhost:8000
```
