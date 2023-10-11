import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Fab = () => {
  return (
    <section className="w-full grid grid-cols-1 sm:grid-cols-2 gap-y-16 gap-x-14 sm:pt-10 pt-16 px-5 sm:px-20 overflow-hidden pb-8 ">
      <div className="w-full col-span-2 sm:col-span-1">
        <h1 className="text-4xl uppercase font-bold ">
          Fab Lab <i>(Fabrication Laboratory)</i>
        </h1>
        <p className="font-normal text-xl leading-6 mt-4">
          FAB INACAP es un programa que busca mejorar las capacidades de
          innovación en sede, habilitando entornos de prototipado con
          fabricación digital; que contribuyen a la creación, ideación y
          desarrollo de proyectos; y que fortalecen el aprendizaje autónomo y
          colaborativo.
        </p>
        <p className="font-normal text-xl leading-6 mt-4">
          El concepto Fab Lab nace en MIT el año 2000 inspirado en el curso
          llamado “How to make (almost) anything». Hoy existen más de 2500 Fab
          Labs en el mundo, constituyendo una red mundial de investigación
          avanzada.
        </p>
      </div>
      <div className="w-full sm:max-w-xl mx-auto col-span-2 sm:col-span-1">
        <iframe
          className="aspect-video w-full"
          src="https://www.youtube.com/embed/L7EEHdHy_AY?si=_Uf9CYRRgUDehHf5"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div className="col-span-2 sm:col-span-1">
        <div className="w-full sm:max-w-md mx-auto">
          <Image src="/impresoras.png" alt="INACAP" width={500} height={300} />
        </div>
      </div>

      <div className="w-full col-span-2 sm:col-span-1 ">
        <p className="text-xl leading-7">
          En Inacap Chillán, estamos firmemente convencidos de que la innovación
          no solo es necesaria en el ámbito empresarial, sino que también es
          esencial en la educación. Por eso, FAB INACAP no solo se enfoca en
          potenciar las habilidades técnicas de nuestros estudiantes, sino que
          también promueve la creatividad, la resolución de problemas y el
          pensamiento crítico. A través de entornos de prototipado con
          fabricación digital, nuestros estudiantes tienen la oportunidad de
          convertir sus ideas en realidad. Este proceso les permite
          experimentar, cometer errores y aprender de ellos, fomentando así el
          aprendizaje autónomo y colaborativo. Además, al trabajar en proyectos
          reales, los estudiantes adquieren una comprensión más profunda de cómo
          aplicar sus conocimientos en situaciones del mundo real.
        </p>
        <Link href="/fab" className="block mt-4">
          <Button variant="destructive">Leer Más</Button>
        </Link>
      </div>

      <div className=" mb-2 col-span-2 border-b-2 border-red-600"></div>
    </section>
  );
};

export default Fab;
