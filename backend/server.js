const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const { PORT, MAX_REQUEST_SIZE } = require("./config/serverConfig");

connectDB();

const app = express();

app.use(express.json({ limit: MAX_REQUEST_SIZE }));
app.use(express.urlencoded({ extended: false, limit: MAX_REQUEST_SIZE }));

app.use("/api/users", require("./user/Routes"));
app.use("/api/characters", require("./character/Routes"));
app.use("/api/stories", require("./story/Routes"));
app.use("/api/plotpoints", require("./plotpoint/Routes"));
app.use("/api/relations", require("./relation/Routes"));
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));
