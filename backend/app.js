import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import router from "./routes/router.js";

const app = express();

app.use(router);

app.listen(4000, () => {
  console.log("server running at http://localhost:4000");
});
