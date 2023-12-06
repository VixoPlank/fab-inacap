import { NextResponse } from "next/server";  
import { connectDB } from '@/libs/mongodb'
import Postulacion from "@/models/postulacion";
import User from "@/models/user";

export async function GET(request, {params}) {
    connectDB()
    const postFound = await Postulacion.findById(params.id)

    if(!postFound) return NextResponse.json({
        message: "postulacion not found"
    },{
        status:404
    })


    return NextResponse.json(postFound);
}

export async function DELETE (request, {params}) {
    const postDelete = await Postulacion.findByIdAndDelete(params.id)


    return NextResponse.json(postDelete)
}

export async function PUT (request, {params}) {
    const data = await request.json()
    const postUpdate = await Postulacion.findByIdAndUpdate(params.id, data,{new:true})



    return NextResponse.json(postUpdate)
}                                                              