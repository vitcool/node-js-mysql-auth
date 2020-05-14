const express = require('express');

const { PORT } = process.env;

const app = express();

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
