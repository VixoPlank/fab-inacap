import Image from "next/image";
import Link from "next/link";
import { IoIosCall } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";

export default function Footer() {
  return (
    
      <footer class="w-full text-white bg-red-600 body-font">
        <div class="container flex flex-col flex-wrap px-5 py-5 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          <div className="flex-col">
            <div className="flex">
              <IoIosCall color="black" className="mt-2.5" />{" "}
              <h1 class="mt-2   text-sm text-white">+56 42 283 1800 </h1>
            </div>

            <div className="flex">
              <BiLogoGmail color="black" className="mt-2.5" />{" "}
              <h1 class="mt-2 ml-1 text-sm text-white">
                fabchillan@inacap.cl{" "}
              </h1>
            </div>

            <div className="flex">
              <IoLocationSharp color="black" className="mt-2.5" />{" "}
              <h1 class="mt-2 ml-1 text-sm text-white">
                Inacap, Longitudinal Sur 441, Chillan - Chile
              </h1>
            </div>
          </div>

          <div class="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
            <div class="w-full px-4 lg:w-1/4 md:w-1/2"></div>

            <div class="w-full px-4 lg:w-1/4 md:w-1/2"></div>

            <div class="w-full px-4 lg:w-1/4 md:w-1/2"></div>

            <div class="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 class="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font"></h2>
              <nav class="mb-10 list-none">
                <li class="mt-3">
                  <Link
                    class="underline hover:text-black hover:cursor-pointer"
                    href="#"
                  >
                    Politica y privacidad
                  </Link>
                </li>
                <li class="mt-3">
                  <Link
                    class="underline hover:text-black hover:cursor-pointer"
                    href="#"
                  >
                    Terminos y condiciones
                  </Link>
                </li>
                <li class="mt-3">
                  <a></a>
                </li>
              </nav>
            </div>
          </div>
        </div>

        {/* imagenes de la pata */}
        <div class="sm:flex sm:items-center px-10 py-5 sm:justify-between">
          <div class="flex flex-1 ml-4 gap-4 hover:cursor-pointer">
            <a href="https://maps.app.goo.gl/BdtZZmJumaqE4VkK8">
              {" "}
              <Image src="/inacapblanco.png" width={200} height={80} />
            </a>
          </div>

          <div class="flex gap-4 hover:cursor-pointer mr-7">
            <Image src="/acreditacion5.png" alt="vertebral" width={150} height={80} />
            <Image src="/acreditacion4.png" alt="bureau-veritas" width={150} height={80} />
            <Image src="/acreditacion3.png" alt="Comision-nacional-de-acreditacion" width={66.3} height={80} />
            <Image src="/acreditacion2.png" alt="7años-acreditacion" width={150} height={80} />
            <Image src="/acreditacion1.png" alt="acreditacion-inacap" width={150} height={80} />
          </div>
        </div>
      </footer>
  );
}
