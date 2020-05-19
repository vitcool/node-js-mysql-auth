const express = require('express');

const AuthService = require('../services/auth');

const isAuth = require('../middlewares/isAuth');
const passport = require('../passport');

const router = new express.Router();

router.post('/api/login', passport.authenticate('local'), function (req, res) {
  res.json(req.user);
});

router.post('/api/signup', async (req, res) => {
  try {
    const { body: userData } = req;
    const { email, password } = req.body;
    const user = await AuthService.signUp({ email, password });
  
    res.status(201).send(user);
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
});

router.get('/api/user_data', function (req, res) {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({ message: 'You are not logged in!' });
  } else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id,
    });
  }
});

router.get('/api/secured', isAuth, function (req, res) {
  if (req.user) {
    return res.send(req.user);
  }
  return res.send('user is not visible now');
});

router.post('/api/logout', function (req, res) {
  if (req.user) {
    req.logout();
    return res.send({ message: 'User is logged out' });
  }
  return res.send({ message: 'User not found' });
});

module.exports = router;
