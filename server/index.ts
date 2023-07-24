import path from "path";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import db from "./infrastructure/db/models";
import router from "./adapters/routes";
import { API_ROUTE, API_VERSION } from "./adapters/config/constants";
import { errorHandler } from "./adapters/middlewares";
import { injectDB } from "./infrastructure/middlewares";

dotenv.config({ path: path.resolve(__dirname, ".env") });

const devEnvironment = process.env.NODE_ENV === "development";

const app = express();

// Setup cors
app.use(
  cors({
    origin: process.env.ALLOW_CORS,
  })
);

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Test database connection
db.sequelize
  .authenticate()
  .then(() => {
    if (devEnvironment) console.log("Database is connected..."); // eslint-disable-line no-console
  })
  .catch((err: Error) => {
    if (devEnvironment) {
      console.log("DB Error: " + err); // eslint-disable-line no-console
    }
  });

// @/api/v1 router
app.use(`/${API_ROUTE}/${API_VERSION}`, injectDB, router);

app.use(errorHandler);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  if (devEnvironment) console.log(`Server started at port ${PORT}`); // eslint-disable-line no-console
});
