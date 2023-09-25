import HeaderVideo from "@components-home/HeaderVideo";
import Contact from "@components-home/Contact";
import Fab from "@components-home/Fab";
import Fabrica_4_0 from "@components-home/Fabrica_4_0";
import InfoProyect from "@components-home/InfoProject";
// import Image from "next/image";

export default function Home() {
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
