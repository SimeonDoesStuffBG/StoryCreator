const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const serverConfig = require("./config/serverConfig");

const PORT = serverConfig.PORT;
const MAX_REQUEST_SIZE = serverConfig.MAX_REQUEST_SIZE;

connectDB();

const app = express();

app.use(express.json({ limit: MAX_REQUEST_SIZE }));
app.use(express.urlencoded({ extended: false, limit: MAX_REQUEST_SIZE }));

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/characters", require("./routes/characterRoutes"));
app.use("/api/stories", require("./routes/storyRoutes"));
app.use("/api/plotpoints", require("./routes/plotpointRoutes"));
app.use("/api/relations", require("./routes/relationRoutes"));
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));
