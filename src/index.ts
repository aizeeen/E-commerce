import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";

const app = express();
const port = 3001;

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://ihebbacha03:2UFeYsYFnI960KgZ@cluster0.yr0ko.mongodb.net/ecommerce"
  )
  .then(() => console.log("mongo connected"))
  .catch ((err) => console.log("failed to connect", err));

app.use('/user', userRoute)

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
