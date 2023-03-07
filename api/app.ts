import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/router";

dotenv.config();
const app: Application = express();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection established...");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.static("./public"));
app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use(router);

app.listen(process.env.PORT || 4000, () => {
  console.log("server running...");
});
