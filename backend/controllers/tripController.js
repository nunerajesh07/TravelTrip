const Trip = require('../models/Trip');

// Create a new trip
const createTrip = async (req, res) => {
  try {
    const { destination, startDate, endDate, guests, userDetails } = req.body;

    if (!destination || !startDate || !endDate) {
      return res.status(400).json({ success: false, message: 'Please provide destination, start date, and end date' });
    }

    const trip = await Trip.create({
      userId: req.userId,
      destination,
      startDate,
      endDate,
      guests,
      userDetails,
    });

    res.status(201).json({ success: true, message: 'Trip created successfully', data: trip });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Get all trips for the logged-in user
const getMyTrips = async (req, res) => {
  try {
    const trips = await Trip.find({ userId: req.userId }).sort({ createdAt: -1 });
    res.json({ success: true, message: 'Trips fetched successfully', data: trips });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Get single trip details
const getTripById = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);

    if (!trip) {
      return res.status(404).json({ success: false, message: 'Trip not found' });
    }

    if (trip.userId.toString() !== req.userId) {
      return res.status(401).json({ success: false, message: 'Unauthorized access' });
    }

    res.json({ success: true, message: 'Trip fetched successfully', data: trip });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Update an existing trip
const updateTrip = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);

    if (!trip) {
      return res.status(404).json({ success: false, message: 'Trip not found' });
    }

    // Ensure user owns trip
    if (trip.userId.toString() !== req.userId) {
      return res.status(401).json({ success: false, message: 'Unauthorized access' });
    }

    const updatedTrip = await Trip.findByIdAndUpdate(
      req.params.id,
      req.body, // Contains destination, startDate, endDate, guests
      { new: true } // Returns updated document
    );

    res.json({ success: true, message: 'Trip updated successfully', data: updatedTrip });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Delete/Cancel a trip
const deleteTrip = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);

    if (!trip) {
      return res.status(404).json({ success: false, message: 'Trip not found' });
    }

    // Ensure trip belongs to current user
    if (trip.userId.toString() !== req.userId) {
      return res.status(401).json({ success: false, message: 'Unauthorized access' });
    }

    await trip.deleteOne();
    res.json({ success: true, message: 'Trip deleted successfully', data: {} });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = { createTrip, getMyTrips, getTripById, updateTrip, deleteTrip };
