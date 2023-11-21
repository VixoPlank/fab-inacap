import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from '@/libs/mongodb'
import GoogleProvider from 'next-auth/providers/google'
import User from '@/models/user'
import bcrypt from 'bcryptjs'



const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        await connectDB()
        console.log(credentials)

        const userFound = await User.findOne({email: credentials?.email}).select('+password')
        if(!userFound) throw new Error("credenciales invalidas")
        console.log(userFound)

        const passwordMatch = await bcrypt.compare(credentials?.password, userFound.password)
        if(!passwordMatch) throw new Error("contraseña erronea")

        

        return userFound;
      },
    }),
  ],
  secret: process.env.SECRET,
  callbacks:{
    
    jwt({account, token, user, profile, session}){
     if (user) token.user = user;
     return token;
    },
    session ({session, token}){
      session.user = token.user;
      return session;
    }     
  },
  pages: {
    signIn:'/login'
  }
});

export { handler as GET, handler as POST };
