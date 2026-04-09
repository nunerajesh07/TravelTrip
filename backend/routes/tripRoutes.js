const express = require('express');
const router = express.Router();
const { createTrip, getMyTrips, getTripById, updateTrip, deleteTrip } = require('../controllers/tripController');
const { protect } = require('../middleware/authMiddleware');

// Protect all routes below with auth middleware
router.use(protect);

// Route: POST /api/trips
router.post('/', createTrip);

// Route: GET /api/trips
router.get('/', getMyTrips);

// Route: GET /api/trips/:id
router.get('/:id', getTripById);

// Route: PUT /api/trips/:id
router.put('/:id', updateTrip);

// Route: DELETE /api/trips/:id
router.delete('/:id', deleteTrip);

module.exports = router;
