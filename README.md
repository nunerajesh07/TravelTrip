# 🌍 TravelTrip - Your Ultimate Travel Companion

![TravelTrip Banner](C:\Users\nuner\.gemini\antigravity\brain\78ed47d7-ab46-4d31-8cdf-767f7142c32d\traveltrip_banner_1777095027274.png)

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

**TravelTrip** is a sophisticated, full-stack travel planning application designed to streamline your journey from inspiration to destination. Built with the modern MERN stack, it offers a seamless experience for managing your trips, exploring history, and planning future adventures.

---

## ✨ Key Features

- 🔐 **Secure Authentication**: Robust user registration and login system powered by JWT and bcrypt password hashing.
- 📅 **Trip Management**: Effortlessly create, view, edit, and delete your upcoming trips.
- 🗂️ **Travel History**: Keep a digital journal of your past adventures with a dedicated history view.
- 📱 **Responsive Design**: A premium, mobile-first interface that looks stunning on any device.
- 🚀 **Performance Optimized**: Built with Vite and React 19 for lightning-fast load times and smooth interactions.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 19, Vite, React Router 7, Vanilla CSS (Premium Styling) |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB with Mongoose ODM |
| **Auth** | JSON Web Tokens (JWT), HttpOnly Cookies |
| **DevOps** | CORS, Dotenv, ESLint |

---

## 📁 Project Structure

```text
TravelTrip/
├── backend/            # Express Server & API
│   ├── config/         # Database configuration
│   ├── controllers/    # Request handlers & logic
│   ├── middleware/     # Auth & error handling
│   ├── models/         # Mongoose schemas
│   └── routes/         # API endpoint definitions
└── frontend/           # React Application
    ├── src/
    │   ├── Components/ # UI Pages & Features
    │   ├── assets/     # Images & Static files
    │   └── App.jsx     # Main Application Entry
```

---

## 🚀 Getting Started

### 1. Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (Local or Atlas)

### 2. Backend Configuration

1.  Navigate to the backend directory:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file and add your credentials:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_super_secret_key
    ```
4.  Start the server:
    ```bash
    node server.js
    ```

### 3. Frontend Configuration

1.  Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Launch the development server:
    ```bash
    npm run dev
    ```

---

## 🚀 Deployment

### Backend (Render)
1. Create a new **Web Service** on [Render](https://render.com/).
2. Connect your repository.
3. Set the **Root Directory** to `backend`.
4. Set the **Build Command** to `npm install`.
5. Set the **Start Command** to `npm start`.
6. Add the following **Environment Variables**:
   - `MONGO_URI`: Your MongoDB Atlas connection string.
   - `JWT_SECRET`: A secure random string for signing tokens.
   - `ALLOWED_ORIGINS`: Your Vercel frontend URL (e.g., `https://traveltrip-app.vercel.app`).
   - `NODE_ENV`: `production`

### Frontend (Vercel)
1. Create a new project on [Vercel](https://vercel.com/).
2. Connect your repository.
3. Set the **Root Directory** to `frontend`.
4. Vercel will automatically detect the **Vite** framework.
5. Add the following **Environment Variable**:
   - `VITE_API_URL`: Your Render backend URL (e.g., `https://traveltrip-api.onrender.com`).
6. Deploy!

---

## 📡 API Reference

### Authentication
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Create a new user account |
| `POST` | `/api/auth/login` | Authenticate and get token |

### Trips
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/trips` | Get all user trips |
| `POST` | `/api/trips` | Create a new trip |
| `PUT` | `/api/trips/:id` | Update a trip |
| `DELETE` | `/api/trips/:id` | Remove a trip |

---

## 🎨 Design Philosophy

TravelTrip follows a **cinematic and premium** design aesthetic. We prioritize:
- **Rich Aesthetics**: Vibrant gradients, subtle shadows, and glassmorphism elements.
- **Dynamic Interactions**: Smooth transitions and micro-animations for a lifelike feel.
- **Visual Excellence**: Curated typography and a harmonious color palette that evokes the spirit of travel.

---

## 📈 Future Roadmap

- [ ] 🗺️ **Interactive Maps**: Visualize your journey with Google Maps integration.
- [ ] 📸 **Photo Gallery**: Upload and manage trip photos.
- [ ] 🤝 **Social Sharing**: Share your itineraries with friends and family.
- [ ] 🔔 **Smart Notifications**: Get reminders for upcoming flights and hotel check-ins.

---

## 📄 License

This project is licensed under the ISC License.

---

Developed with ❤️ by the TravelTrip Team.
