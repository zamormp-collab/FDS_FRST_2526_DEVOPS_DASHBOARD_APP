/**
 * Incidents API Routes
 * Endpoints for managing incidents
 */

const express = require('express');
const router = express.Router();

/**
 * GET /api/incidents
 * Returns list of all incidents
 */
router.get('/', (req, res) => {
  res.json({
    success: true,
    count: 0,
    incidents: []
  });
});

module.exports = router;
