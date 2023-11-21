'use client'

import HeaderVideo from "@components-home/HeaderVideo";
import Contact from "@components-home/Contact";
import Fab from "@components-home/Fab";
import Fabrica_4_0 from "@components-home/Fabrica_4_0";
import InfoProyect from "@components-home/InfoProject";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

export default function Home() {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      const { role } = session.user || {}; // Obtenemos el rol del usuario
      if (role === 'admin') {
        router.replace("/admin/dashboard"); // Redirigir a la página de inicio de sesión para admin
      } else if (role === 'user' || role === undefined) {
        router.replace("/user/dashboard"); // Redirigir a la página de inicio de sesión para user o undefined
      }
    }
  }, [session, router]);
  return (
    
    <main>  
      
      <HeaderVideo />
      <Fab />
      <Fabrica_4_0 />
      <InfoProyect />
      <Contact />
    </main>
  );
}
