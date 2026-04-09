const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  let token;

  // Check if token is sent in headers
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get token from header (Format: Bearer <token>)
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Attach userId to request object
      req.userId = decoded.userId;

      next(); // Move to the next middleware or controller
    } catch (error) {
      console.error(error);
      res.status(401).json({ success: false, message: 'Unauthorized access' });
    }
  }

  if (!token) {
    res.status(401).json({ success: false, message: 'Unauthorized access, no token' });
  }
};

module.exports = { protect };
