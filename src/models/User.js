import { Schema, model } from "mongoose";

// esto no está relacionado con graphql
// esto es un modelo de la base de datos en mongo

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: String,
  age: Number,
});

export default model("User", userSchema);
