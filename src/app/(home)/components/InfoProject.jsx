import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const InfoProyect = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-y-16 gap-x-14 pt-16 px-5 sm:px-20 overflow-hidden pb-8">
      <div className=" [&>p]:mt-5 [&>p]:text-xl [&>p]:leading-6  col-span-2 sm:col-span-1 ">
        <h1 className="text-5xl ">Fab Lab</h1>
        <p>¡Únete a la Revolución de la Innovación en INACAP Chillán!</p>
        <p>
          Estamos entusiasmados de invitarte a ser parte de nuestro emocionante
          programa, FAB INACAP. Si eres parte de nuestra comunidad interna o
          externa y tienes un proyecto innovador en mente, esta es tu
          oportunidad para hacerlo realidad.
        </p>
        <p>
          FAB INACAP es mucho más que un programa; es un espacio donde la
          creatividad y la tecnología se unen para impulsar el cambio. Aquí,
          podrás aprovechar tecnologías de vanguardia como la fabricación
          digital, la inteligencia artificial y el Internet de las cosas para
          llevar tus ideas al siguiente nivel.
        </p>
        <Link className=" block mt-4" href="/postulacion">
          <Button variant="destructive">Postula ya!</Button>
        </Link>
      </div>

      <div className="w-full col-span-2 sm:col-span-1">
        <Image
          src="/InfoProject.png"
          width={800}
          height={500}
          alt="Imagen de Impresoras"
        />
      </div>
      <div className=" mb-2 col-span-2 border-b-2 border-red-600"></div>
    </section>
  );
};

export default InfoProyect;
