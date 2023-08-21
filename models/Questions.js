import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: String,
    bodyq: String,
  });

  export const Questions = mongoose.model("Questions", schema)