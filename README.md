# Jeeva Ai Task Submission

## Description
A full-stack web application with a full-fledged front end. The purpose of this application is to keep a record of audio files containing information about patients in a database (MongoDB) while the audio files themselves are stored in Firebase for streaming capabilities. Also displaying all the records in a convenient tabular format.
This project consists of two folders: `server` and `client`. The `server` folder contains the backend Node.js application, while the `client` folder contains the frontend React application.

## Images
![Screenshot 2024-09-03 160548](https://github.com/user-attachments/assets/ec7acf63-2b45-4b2b-817c-0052ab34c6eb)


## Installation

### Server
1. Navigate to the `server` folder.
2. Run `npm install` to install the dependencies.

### Client
1. Navigate to the `client` folder.
2. Run `npm install` to install the dependencies.

## Usage
### Server
1. Navigate to the `server` folder.
2. Start the server by running `npm start`.
3. The server will start running on `http://localhost:3001`.

### Client
1. Navigate to the `client` folder.
2. Start the client by running `npm start`.
3. The client application will open in your default web browser at `http://localhost:3000`.

## Dependencies
- **Server**:
  - Express.js
  - Other server dependencies...

- **Client**:
  - React
  - Other client dependencies...

## Notes
All the corresponding .env files are included in the project.

## Information regarding use of FireBase
Using MongoDB for storing audio files larger than 16mb is not possible in MongoDB alone, though it possible with the use of GridFS, it is not suitable for audio streaming. Thus, the use of Firebase.
Integrating Firebase with MongoDB not only simplifies implementation but also enhances scalability for audio streaming. Firebase's cloud-based architecture allows for automatic scaling based on demand, ensuring that my application can handle a growing number of users and audio files without compromising performance. By leveraging Firebase's scalable infrastructure alongside MongoDB's flexible data storage, I can confidently expand my application's capabilities to meet the needs of a growing user base.
