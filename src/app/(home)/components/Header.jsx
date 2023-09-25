import Link from "next/link";
import { BiUserCircle } from "react-icons/bi";
import DarkMode from "./DarkMode";
import MenuMobile from "./MenuMobile";
const Header = () => {
  return (
    <header className="py-3 flex bg-slate-200 sticky top-0 items-center lg:px-44 justify-between px-4 dark:bg-black z-10">
      <div className="flex justify-between lg:w-full ">
        {/* Logo del FAB */}
        <Link href="/">
          <img
            src="/logo-fab.jpg"
            alt="LogoFab"
            className="w-24 relative z-20 mt-7 "
          />
        </Link>
        {/* Logo del Inacap */}
        <Link href="/">
          <img
            src="/logo-inacap.png"
            alt="LogoInacap"
            className="w-40 mt-7 hidden md:block"
          />
        </Link>
      </div>

      {/* Navbar en Desktop  */}
      <nav className="hidden xl:flex w-full absolute z-10 bg-red-600 p-[10px] top-20 inset-x-0 max-w-[75rem] justify-center items-center mx-auto">
        <ul className="flex text-base justify-between w-full mx-20 hover:[&>li>a]:bg-red-700 [&>li>a]:text-white hover:[&>li>a]:text-gray-300 [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:inline-block [&>li>a]:py-2 [&>li>a]:px-4 [&>li>a]:rounded-md">
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/#fab">FAB</Link>
          </li>
          <li>
            <Link href="/#fabrica_4_0">Fábrica 4.0</Link>
          </li>
          <li>
            <Link href="/#postulacion">Postulación</Link>
          </li>
          <li>
            <Link href="/portafolio">Proyectos</Link>
          </li>
          <li>
            <Link href="/#contact">Contacto</Link>
          </li>
          <li>
            <Link
              className="py-2 px-4 inline-block hover:bg-red-700 transition-colors duration-500 rounded-md"
              href="/login"
            >
              <BiUserCircle className="text-white text-2xl " />
            </Link>
          </li>
          <li>
            <DarkMode />
          </li>
        </ul>
      </nav>
      <MenuMobile />
    </header>
  );
};

export default Header;
