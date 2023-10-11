import HeaderVideo from "@components-home/HeaderVideo";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const page = () => {
  const faq = [
    {
      title: "¿Qué es un Fab-Lab?",
      description:
        "Fab Lab es una red global de laboratorios locales que facilitan el acceso a tecnologías de fabricación digital para estimular el desarrollo creativo e inventivo",
    },
    {
      title: "¿Qué hay en un Fab Lab?",
      description:
        "Los fablab comparten un inventario en constante evolución de máquinas y herramientas que permiten fábricar (casi) cualquier cosa para que las personas pueden compartir sus proyectos en la red global.",
    },
    {
      title: "¿Qué ofrece la red global de Fab Lab?",
      description:
        "Ofrece apoyo operacional, educacional, técnico, financiero y logístico más allá de la capacidad disponible por un laboratorio local.",
    },
    {
      title: "¿Quién puede usar un Fab Lab?",
      description:
        "Los fablab son recursos comunitarios, que ofrecen acceso abierto tanto a individuos, programas y proyectos.",
    },
    {
      title: "¿A quién pertenecen las invenciones de Fab Lab?",
      description:
        "Los diseños y procesos desarrollados en fablab pueden ser protegidos y vendidos como desee su inventor, pero, deben estar disponibles para que las personas puedan usarlos y aprender de ellos.",
    },
    {
      title: "¿Cómo usan los Fab Lab las iniciativas de negocio?",
      description:
        "Actividades comerciales pueden ser prototipadas e incubadas al interior de un fablab, pero no deben entrar en conflicto con otros usuarios o proyectos. Deben posteriormente crecer fuera de los Fab Lab y deben beneficiar a los inventores, los laboratorios y las redes que contribuyeron en su éxito.",
    },
  ];
  return (
    <section>
      <HeaderVideo />
      <div className="flex flex-col sm:w-2/5 mx-auto mt-4 px-5">
        <p className="font-normal text-xl leading-8 mt-4">
          En Vinculación con el Medio (Fab Lab) se destaca por su enfoque en la
          formación de creatividad aplicada, siendo líder en Chile y una
          referencia innovadora en toda la región. En INACAP, nuestro enfoque se
          basa en el aprendizaje práctico, ya que consideramos que en el mundo
          actual es esencial abordar los desafíos con responsabilidad y
          creatividad en todas nuestras interacciones, tanto con nuestros pares
          como con el medio ambiente.
        </p>
        <p className="font-normal text-xl leading-8 mt-4">
          Nuestro compromiso abarca desde la reflexión sobre la extracción,
          creación y uso de recursos y materiales hasta la promoción de la
          coexistencia armoniosa entre nuestra comunidad y otras especies. Esto
          es particularmente relevante en un contexto donde las ciudades y los
          entornos naturales enfrentan desafíos cada vez más complejos y
          delicados.
        </p>
      </div>
      <div className="flex flex-col items-center mt-10 sm:w-2/5 mx-auto px-5">
        <h1 className="text-4xl sm:text-6xl text-red-600 mb-5">
          {" "}
          Bienvenido a FAB-LAB
        </h1>
        <Image src="/Fab.png" width={500} height={500} />
      </div>
      {/* info */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-y-16 row-span-1 sm:row-span-2 gap-x-14 sm:pt-10 pt-16 px-5 sm:px-20 overflow-hidden pb-8 ">
        <div className="w-full">
          <h1 className="font-normal text-4xl leading-10 text-red-600 italic">
            Fábrica de Aprendizaje Inacap: Transformando Teoría en Experiencia
            Práctica
          </h1>
          <p className="font-normal text-xl leading-8 mt-4">
            El FAB de Inacap es una Fábrica de Aprendizaje, un espacio simulado
            que imita un entorno laboral real. Sirve para que los estudiantes
            puedan aplicar sus conocimientos teóricos y desarrollar habilidades
            prácticas en un ambiente controlado antes de ingresar al mundo
            laboral. Es un lugar donde los estudiantes practican con equipos y
            tecnología de última generación, promoviendo la creatividad, la
            innovación y el trabajo en equipo
          </p>
        </div>

        <div className="w-full sm:max-w-md mx-auto">
          <Image src="/macetero.jpeg" alt="MACETERO" width={500} height={500} />
        </div>

        <div className="w-full sm:max-w-md mx-auto">
          <Image src="/brazo.jpeg" alt="BRAZO" width={500} height={300} />
        </div>

        <div className="w-full">
          <p className="font-normal text-xl leading-8 mt-4">
            La Escuela de Diseño del INACAP es un punto de encuentro donde
            convergen la ingeniería, las ciencias, el emprendimiento, la
            tecnología y el diseño. Aquí, fomentamos la interdisciplinariedad y
            la colaboración, permitiendo a nuestros estudiantes desarrollar
            soluciones creativas e innovadoras para los problemas actuales de la
            sociedad y el medio ambiente. En INACAP, formamos profesionales que
            están preparados para abordar los retos del mundo actual desde una
            perspectiva integral.
          </p>
        </div>

        <div className="w-full font-normal text-xl leading-8 mt-4">
          <p>
            <span className="text-2xl text-red-600">Visión: </span>
            “Ser el mejor entorno en sede para la creación, ideación y
            desarrollo de proyectos multidisciplinares de la región del Ñuble,
            facilitando el aprendizaje autónomo y colaborativo, mediante el
            desarrollo de prototipos con base en fabricación digital”.
          </p>

          <p className="font-normal text-xl leading-6 mt-4">
            <span className="text-2xl text-red-600">Misión: </span>
            “Facilitar un entorno físico para que estudiantes y docentes,
            mediante la ideación, creación, desarrollo y transferencia de
            tecnologías innovadores contribuyan al territorio”.
          </p>
        </div>
        <div className="w-full font-normal text-xl leading-8 mt-4 ">
          {faq.map((items, index) => (
            <Accordion type="single" collapsible key={index}>
              <AccordionItem value="item-1">
                <AccordionTrigger>{items.title}</AccordionTrigger>
                <AccordionContent>{items.description}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
