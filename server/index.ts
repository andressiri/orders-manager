import path from "path";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config({ path: path.resolve(__dirname, ".env") });

const devEnvironment = process.env.NODE_ENV === "development";

const app = express();

app.get("/", (req, res) => {
  res.send("If you see this, server is running...");
});

// Setup cors
app.use(
  cors({
    origin: process.env.ALLOW_CORS,
  })
);

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  if (devEnvironment) console.log(`Server started at port ${PORT}`); // eslint-disable-line no-console
});
