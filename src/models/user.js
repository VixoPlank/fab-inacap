import {Schema, model, models} from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, 'EL EMAIL ES REQUERIDO']
    }, 

    password: {
        type: String,
        required: [true, 'EL PASSWORD ES REQUERIDO'],
        select: false
    },

    fullname:{
        type: String,
        required: [true, 'EL NOMBRE ES REQUERIDO'],
        minLength: [3, 'minimo de 3 caracteres'],
        maxLength: [50, 'maximo de 50 caracteres']
    },
    role: {
        type: String,
        default: "user",
      },
    
})

 const User = models.User || model('User', UserSchema)
 export default User;