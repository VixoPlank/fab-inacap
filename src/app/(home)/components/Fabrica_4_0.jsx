import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Fabrica_4_0 = () => {
  return (
    <section
      id="fabrica_4_0"
      className="grid grid-cols-1 sm:grid-cols-2 gap-y-16 gap-x-14 sm:pt-0 pt-16 px-5 sm:px-20 overflow-hidden"
    >
      <div className="col-span-2 sm:col-span-1">
        <Image
          src="/fabrica_4_0.png"
          width={1000}
          height={500}
          alt="foto de iansa"
          className="w-full"
        />
      </div>

      <div className="w-full flex flex-col justify-center gap-y-4 col-span-2 sm:col-span-1">
        <h1 className="text-4xl uppercase font-bold">
          Fábrica 4.0: La Evolución de la Producción hacia la Inteligencia
          Industrial
        </h1>
        <p className="font-normal text-xl leading-6">
          La Fábrica 4.0 representa la revolución de la producción inteligente.
          Mediante tecnologías avanzadas como la inteligencia artificial, el
          Internet de las cosas y la automatización, mejora la eficiencia y
          personalización de los procesos industriales. Esta transformación
          permite la integración de máquinas y sistemas, lo que se traduce en un
          aumento de la productividad, reducción de costos y la capacidad de
          ofrecer productos adaptados a las necesidades del cliente.
        </p>
        <p className="font-normal text-xl leading-6">
          <i>
            La Fábrica 4.0 no solo es una evolución de la industria, sino un
            salto hacia un futuro más eficiente y orientado al cliente en la
            fabricación.
          </i>
        </p>
        <Link className="block" href="/fabrica-4-0">
          <Button variant="destructive">Leer Más</Button>
        </Link>
      </div>

      <div className="w-full sm:max-w-xl mx-auto col-span-2 sm:col-span-1">
        <iframe
          className="aspect-video w-full"
          src="https://www.youtube.com/embed/_tepS5kKvZA"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div className=" mb-2 col-span-2 border-b-2 border-red-600"></div>
    </section>
  );
};

export default Fabrica_4_0;
