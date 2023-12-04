import { NextResponse } from "next/server";
import { connectDB } from '@/libs/mongodb'
import Postulacion from "@/models/postulacion";
import User from "@/models/user";


export async function GET () {
    connectDB()
    const postular = await Postulacion.find()
    return NextResponse.json(postular);
}

export async function POST(request) {
  try{
    const data = await request.json()
    const newPostulacion = new Postulacion(data)
    const savedPostulacion = await newPostulacion.save()
    return NextResponse.json(savedPostulacion)
} catch (error){
    return NextResponse.json(error.message, {status:400})
}
   
}