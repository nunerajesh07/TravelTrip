# TravelTrip

TravelTrip is a full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to book, overview, edit, and keep a history of their travel trips. It emphasizes a beginner-friendly, clean architecture that is easy to understand and build upon.

## Features

- **User Authentication:** Fully secure registration and login system using JWT (`jsonwebtoken`) and encrypted passwords (`bcryptjs`).
- **Trip Booking Workflow:** Setup new trips by specifying destinations, dates, and guests.
- **My Trips Dashboard:** Keep track of your currently booked trips. Real-time form controls allow you to seamlessly edit trip details.
- **Trip History:** Keep a permanent log of past trips or delete out-of-date records permanently from the database.
- **RESTful API:** Predictable API responses styled uniformly with a `{ success, message, data }` format.

## Technologies Used

- **Frontend:**
  - React.js (Bootstrapped with Vite)
  - React Router DOM
  - JS-Cookie (for authentication persistence)
- **Backend:**
  - Node.js & Express.js
  - MongoDB & Mongoose (Using MongoDB Atlas)
  - JWT for Authentication

## Setup Instructions

To run this application locally on your machine, follow these steps.

### 1. Prerequisites
- [Node.js](https://nodejs.org/en/) installed on your computer.
- A MongoDB account & Database Connection URI (such as [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)).

### 2. Backend Setup
1. Open a terminal and navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install the necessary Node packages:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory. *(Note: One already exists in the project containing predefined defaults that you can tweak.)*
   ```env
   PORT=5000
   MONGO_URI=mongodb+srv://<YOUR_USERNAME>:<YOUR_PASSWORD>@cluster0.vqmepdy.mongodb.net/traveltrip?appName=Cluster0
   JWT_SECRET=supersecretjwtkey_12345
   ```
4. Start the backend server:
   ```bash
   node server.js
   ```
   *You should see a message indicating the server is running on port 5000 and that MongoDB has connected.*

### 3. Frontend Setup
1. Open a **new** terminal and navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install the frontend dependencies:
   ```bash
   npm install
   ```
3. Start the Vite React development server:
   ```bash
   npm run dev
   ```
4. The application will immediately launch on `http://localhost:5173/`. Open it in your browser!

## Usage Guide
1. Launch both the backend and frontend servers.
2. Navigate to the Signup page and create an account.
3. Automatically log in and begin using the web portal to book new travel adventures.
4. Go to **My Trips** to edit active journeys, or **History** to review and delete past records.

## Project Structure Highlights
- `/backend/models`: Contains strict schemas for MongoDB `User` and `Trip` relationships.
- `/backend/controllers`: Contains simplified, CRUD-compatible logic wrapped in `async/await` try/catch blocks.
- `/frontend/src/Components`: A comprehensive layout structure containing dynamically rendered pages and robust Fetch API calls mapped out with `js-cookie` token verification.
