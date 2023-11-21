'use client'

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const RutasProtegidas = ({ children, allowedRoles }) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "loading") return; // Espere hasta que se cargue la sesión

    if (!session || !session?.user) {
      router.replace("/login"); // Redirigir para iniciar sesión si no hay sesión
    } else if (
      (session.user.role === undefined && !allowedRoles.includes(undefined)) ||
      !allowedRoles.includes(session.user.role)
    ) {
      router.replace("/unauthorized"); // Redirigir si el rol del usuario no está permitido
    }
  }, [status, session, router, allowedRoles]);

  if (status === "loading") {
    return <div>Loading...</div>; // loading
  }

  return <>{children}</>; // Renderizar children si está permitido
};



export default RutasProtegidas;