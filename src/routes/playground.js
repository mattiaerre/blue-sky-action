const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

// https://github.com/auth0/express-jwt

router.get('/', (req, res) => {
  res.send(jwt.sign({ message: 'jwt rulez!' }, process.env.JWT_SECRET));
});

module.exports = router;
