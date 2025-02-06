import { Schema, model } from "mongoose";

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  library: { type: Schema.Types.ObjectId, ref: "Library", required: true },
  borrower: { type: Schema.Types.ObjectId, ref: "User" },
  image: { type: String, required: true },
});

export default model("Book", bookSchema);
