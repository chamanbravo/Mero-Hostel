const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const authRouter = require("./router/auth-router");
const connectDb = require("./utils/db");
const updateRouter = require('./router/update-router')
const hostelDetailsRouter = require('./router/hostelDetails-router')

app.use(express.json());
app.use(cors());
app.use("/api/auth", authRouter);
app.use('/api/user',updateRouter);
app.use('/api/hostel',hostelDetailsRouter)


connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});