import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "EL NOMBRE ES REQUERIDO"],
    minLength: [3, "minimo de 3 caracteres"],
    maxLength: [50, "maximo de 50 caracteres"],
  },
  lastname: {
    type: String,
    required: [true, "EL NOMBRE ES REQUERIDO"],
    minLength: [3, "minimo de 3 caracteres"],
    maxLength: [50, "maximo de 50 caracteres"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "EL EMAIL ES REQUERIDO"],
  },

  password: {
    type: String,
    required: [true, "EL PASSWORD ES REQUERIDO"],
    select: false,
  },

  role: {
    type: String,
    default: "user",
  },
});

const User = models.User || model("User", UserSchema);
export default User;
