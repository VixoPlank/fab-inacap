import Image from "next/image";
import Link from "next/link";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoYoutube,
  BiLogoLinkedin,
} from "react-icons/bi";
import { IoIosCall } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-red-600 h-1/2 w-full flex md:flex-row flex-col justify-around py-6 ">
      <div className="p-5 ">
        <ul>
          <Image
            src="/inacapblanco.png"
            width={250}
            height={300}
            alt="Inacap-logo"
          />
          <li>
            <Link className="flex" href="tel:+56422831800">
              <IoIosCall color="white" className="mt-2.5 " />{" "}
              <h1 className="mt-2 text-sm text-white">+56 42 283 1800 </h1>
            </Link>
          </li>
          <li>
            <Link href="mailto:fabchillan@inacap.cl" className="flex">
              <BiLogoGmail color="white" className="mt-2.5" />{" "}
              <h1 className="mt-2 ml-1 text-sm text-white">
                fabchillan@inacap.cl{" "}
              </h1>
            </Link>
          </li>
          <li>
            <Link
              href="https://maps.app.goo.gl/BdtZZmJumaqE4VkK8"
              className="flex"
            >
              <IoLocationSharp color="white" className="mt-2.5" />{" "}
              <h1 className="mt-2 ml-1 text-sm text-white">
                Inacap, Longitudinal Sur 441, Chillan - Chile
              </h1>
            </Link>
          </li>

          <li className="flex gap-6 mt-4">
            {/* Facebook Button */}
            <button className=" duration-500 border-2 border-blue-600 transform hover:-translate-y-3 rounded-full bg-blue-600 text-white">
              <Link href="https://www.facebook.com/INACAP" target="_blank">
                <BiLogoFacebook className="w-8 h-8" />
              </Link>
            </button>

            {/* İnstagram Button */}

            <button className="border-2 border-pink-500 bg-gradient-to-b from-indigo-600 via-pink-600 to-yellow-500 min-w-wull text-white transform hover:-translate-y-3 rounded-full duration-500">
              <Link
                href="https://www.instagram.com/inacapchillan/"
                target="_blank"
              >
                <BiLogoInstagram className="w-8 h-8" />
              </Link>
            </button>

            {/* YouTube Button */}
            <button className=" transform hover:-translate-y-3 border-2 rounded-full duration-500  border-red-500 bg-red-500 text-white">
              <a
                href="https://www.youtube.com/@inacapchillan7083"
                target="_blank"
              >
                <BiLogoYoutube className="w-8 h-8" />
              </a>
            </button>

            {/* Linkedin Button--> */}
            <button className="bg-blue-500 transform hover:-translate-y-3 border-2 rounded-full duration-500 border-blue-500 hover:bg-blue-500 text-white">
              <Link
                href="https://www.linkedin.com/school/inacap/"
                target="_blank"
              >
                <BiLogoLinkedin className="w-8 h-8" />
              </Link>
            </button>
          </li>
        </ul>
      </div>

      <div className="p-5 ">
        <ul className="[&>li]:text-slate-300  [&>li]:text-mb [&>li]:pb-2 [&>li]:font-semibold hover:[&>li]:text-slate-500 [&>li]:cursor-pointer">
          <h3 className="text-white font-bold text-2xl pb-4 ">Compañia</h3>
          <li>Inicio</li>
          <li>Sobre notros</li>
          <li>FAB</li>
          <li>Fábrica 4.0</li>
          <li>Postulación</li>
          <li>Proyectos</li>
        </ul>
      </div>
      <div className="p-5">
        <ul className="[&>li]:text-slate-300  [&>li]:text-mb [&>li]:pb-2 [&>li]:font-semibold hover:[&>li]:text-slate-500 [&>li]:cursor-pointer">
          <h3 className="text-white font-bold text-2xl pb-4">Soporte</h3>
          <li>Contacto</li>
          <li>Donde estamos?</li>
          <li>Preguntas Precuentes</li>
          <li>Todas nuestas redes</li>
          <li>Politicas</li>
          <li>Terminos y Condiciones</li>
        </ul>
      </div>
      <picture className="p-5 sm:flex gap-3 my-auto">
        <Image
          src="/acreditacion3.png"
          alt="Comision-nacional-de-acreditacion"
          className="w-24 h-20"
          width={100}
          height={80}
        />
        <Image
          src="/acreditacion2.png"
          alt="7años-acreditacion"
          width={200}
          height={80}
        />
        <Image
          src="/acreditacion1.png"
          alt="acreditacion-inacap"
          width={200}
          height={80}
        />
      </picture>
    </footer>
  );
}
