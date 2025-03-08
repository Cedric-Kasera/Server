import express from "express";
import AuthRoute from "./routes/auth.routes.js";
import ConnectDB from "./config/db.config.js";
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Middleware to parse JSON request bodies
app.use(express.json());
app.use("/auth", AuthRoute);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

ConnectDB();
