import "express-async-errors";
import * as dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";

// <============================> Routers <============================>
import jobRouter from "./routes/jobRouter.js";

// <============================> Middlewares <============================>
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

dotenv.config();
const app = express();

app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// <============================> BASIC <============================>

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/", (req, res) => {
  console.log(req);
  res.json({ message: "Data received" });
});

// <============================> JOB_ROUTER <============================>

app.use("/api/v1/jobs", jobRouter);

// <============================> ERROR <============================>

app.use("*", (req, res) => {
  res.status(404).json({ msg: "page not found" });
});

app.use(errorHandlerMiddleware);

// <============================> PORT <============================>

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  console.log("error in the MONGO_URL");
  process.exit(1);
}
