import { NextResponse } from "next/server";
import User from "@/models/user";
import { connectDB } from "@/libs/mongodb";
import bcrypt from "bcryptjs";

export async function POST(request) {
  const { name, lastname, email, password } = await request.json();
  console.log(name, lastname, email, password);

  if (!password || password.length < 6)
    return NextResponse.json(
      {
        message: "password tiene que tener almenos 6 caracteres",
      },
      {
        status: 400,
      }
    );

  
  try {
    await connectDB();
    const userFound = await User.findOne({ email });

    if (userFound)
      return NextResponse.json(
        {
          message: "email ya existente",
        },
        {
          status: 400,
        }
      );

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({
      name,
      lastname,
      email,
      name,
      password: hashedPassword,
    });
    const savedUser = await user.save();
  

    return NextResponse.json({
      _id:savedUser._id,
      name:savedUser.name,
      lastname:savedUser.lastname,
      email:savedUser.email,
      
    });
  } catch (error) {
    console.log(error);
    if (error instanceof Error){
        return NextResponse.json({
            message: error.message
        },{
            status: 400
        })
    }
  }
}