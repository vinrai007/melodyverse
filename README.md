# MelodyVerse

MelodyVerse is a full-stack web application built with Node.js, Express.js, and React. It allows users to sign up, log in, and view a list of posts. The project uses JWT for authentication and provides a responsive design using Tailwind CSS.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)


## Installation

### Backend

1. Clone the repository:
   ```bash
   git clone https://github.com/vinrai007/melodyverse
   cd melodyverse

2. Navigate to the backend folder and install dependencies:
   ```bash
   cd melodyverse-server
   npm install

3. Set up environment variables:
Create a .env file in the melodyverse-server directory and add the following:
   ```bash
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret



4. Start the server:
    ```bash
    npm start


### Frontend

1. Navigate to the frontend folder and install dependencies:
   ```bash
cd ../melodyverse-client
npm install

2.Start the React application:
   ```bash
npm start

## Usage 
1. Open your browser and navigate to http://localhost:3000 to access the application.
2. Sign up with a new account.
3. Log in with your credentials.
4. View and scroll through the list of posts.

## Features
1. User authentication with JWT.
2. Secure password storage using bcrypt.
3. Responsive design using Tailwind CSS.
4. Infinite scrolling for posts.
5. Clear error and success messages.
