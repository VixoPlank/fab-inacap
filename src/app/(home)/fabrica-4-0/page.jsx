import CloudLogos from "@components-home/CloudLogos";
import React from "react";

const page = () => {
  return (
    <section className="w-full grid grid-cols-1 sm:grid-cols-2 gap-y-16 gap-x-14 sm:pt-10 pt-16 px-5 sm:px-20 overflow-hidden pb-8">
      <div class="w-full col-span-2 sm:col-span-1">
        <h1 class="text-4xl uppercase font-bold italic ">
          <span className="text-red-600">Fábrica 4.0: </span>
          La Evolución de la Producción hacia la Inteligencia Industrial
        </h1>
        <p class="font-normal text-xl leading-6 mt-4 ">
          Fábrica 4.0: La Revolución de la Producción Inteligente. Mejora la
          eficiencia y personalización de los procesos industriales mediante el
          uso de tecnologías avanzadas como la inteligencia artificial, el
          Internet de las cosas y la automatización. Permite una mayor
          integración de máquinas y sistemas, aumentando la productividad,
          reduciendo costos y ofreciendo productos adaptados a las necesidades
          del cliente.
        </p>
      </div>
      <div class="w-full sm:max-w-xl mx-auto col-span-2 sm:col-span-1">
        <iframe
          class="aspect-video w-full"
          src="https://www.youtube.com/embed/_tepS5kKvZA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div class="w-full col-span-2 sm:col-span-1">
        <h1 class="text-4xl uppercase font-bold italic">
          <span className="text-red-600">Alianzas Estratégicas: </span>
          Potenciando la Fábrica 4.0 junto a Empresas de Vanguardia
        </h1>
        <p class="font-normal text-xl leading-6 mt-4 ">
          Estas empresas líderes confían en nuestra visión de la Fábrica 4.0 y
          están colaborando con nosotros para impulsar la innovación en sus
          procesos de producción. Juntos, estamos transformando la industria y
          abriendo nuevas oportunidades en el mundo de la fabricación
          inteligente.
        </p>
      </div>
      <div className="w-full grid sm:grid-cols-3 grid-cols-2 gap-x-4 gap-y-3 sm:gap-y-1 items-center justify-center">
        <CloudLogos />
      </div>
    </section>
  );
};

export default page;
