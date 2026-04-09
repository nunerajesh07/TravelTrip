# Travel Trip

Travel Trip is a modern React web application that allows users to book and manage their travel trips. It provides a seamless user experience for creating new trip bookings through a step-by-step wizard, viewing past/upcoming trips, and managing user details.

## Features

- **Authentication:** Secure login system with protected routes to ensure user data privacy.
- **Trip Booking Wizard:** A comprehensive, multi-step booking process (`/book-new-trip`) including:
  - Destination and Date Selection
  - Guest details management
  - User details input
  - Step-by-step progress sidebar
  - Order confirmation
- **Trip Management:** A dedicated "My Trips" dashboard (`/my-trips`) to view all booked trips.
- **Travel Assistant:** Integrated travel assistant component to help users with their travel plans.
- **Responsive Design:** Optimized for various devices and screen sizes.

## Tech Stack

- **Frontend Library:** [React 19](https://react.dev/)
- **Routing:** [React Router v7](https://reactrouter.com/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **State Management / Cookies:** `js-cookie`
- **Linting:** ESLint

## Folder Structure (Primary Components)

- `src/Components/Login` - Authentication and login UI.
- `src/Components/Home` - Landing page dashboard.
- `src/Components/MyTrips` - Display list of booked trips.
- `src/Components/BookNewTrip` - Main container for the multi-step booking process.
- `src/Components/DateSelection`, `Guests`, `YourDetails`, `Confirmation` - Wizard steps for booking a new trip.
- `src/Components/TravelAsssistant` - Interactive travel assistant.
- `src/Components/ProtectedRoute` - Wrapper for routes requiring authentication.

## Getting Started

### Prerequisites

You need to have Node.js and npm (or yarn/pnpm) installed on your machine.

### Installation

1. Clone the repository and navigate to the project directory:
   ```bash
   cd traveltrip
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running Locally

To start the development server:

```bash
npm run dev
```

The application will be running at `http://localhost:5173/` (or the port specified by Vite).

### Building for Production

To create a production build:

```bash
npm run build
```

This will create an optimized build in the `dist` folder. To preview the production build locally, run:

```bash
npm run preview
```
