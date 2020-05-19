const express = require('express');
const session = require('express-session');

const { User } = require('../models');
const authRouter = require('./routers/auth');
const passport = require('./passport');

const { PORT } = process.env;

const app = express();

app.use(express.json());
app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(authRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
