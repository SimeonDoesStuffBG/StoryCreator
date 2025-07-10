const dotenv = require("dotenv").config();

const MAX_REQUEST_SIZE = "25mb";
const PORT = process.env.PORT || 5000;

module.exports = { PORT, MAX_REQUEST_SIZE };
