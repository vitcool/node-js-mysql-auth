const express = require('express');

const { User } = require('../models');

User.create({
  name: 'Tom',
  age: 35,
})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

const { PORT } = process.env;

const app = express();

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
