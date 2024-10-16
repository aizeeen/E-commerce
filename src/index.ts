import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3001;

mongoose
  .connect(
    "mongodb+srv://ihebbacha03:2UFeYsYFnI960KgZ@cluster0.yr0ko.mongodb.net/ecommerce"
  )
  .then(() => console.log("mongo connected"))
  .catch ((err) => console.log("failed to connect", err));

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
