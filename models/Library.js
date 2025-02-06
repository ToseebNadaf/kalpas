import { Schema, model } from "mongoose";

const librarySchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  books: [{ type: Schema.Types.ObjectId, ref: "Book" }],
});

export default model("Library", librarySchema);
