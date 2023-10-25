"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import DarkMode from "./DarkMode";

const MenuMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((preState) => !preState);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <aside>
      {/* Open menu */}
      <button
        className="relative lg:hidden z-20 bg-red-600 rounded-full w-14 h-14 flex items-center justify-center hover:bg-red-700 hover:rounded-full transition duration-300"
        onClick={toggleMenu}
      >
        <AiOutlineMenu
          className={`text-3xl text-white ${menuOpen && "hidden"}`}
        />
        {/* Close menu */}
        <AiOutlineClose
          className={`text-3xl text-white ${!menuOpen && "hidden"}`}
        />
      </button>
      {/* Navegación  */}
      <nav className={`relative z-10 ${menuOpen ? "block" : "hidden"}`}>
        <div
          className="fixed inset-0 bg-gray-800 opacity-25"
          onClick={() => setMenuOpen(false)}
        ></div>
        <nav className="fixed top-0 right-0 bottom-0 flex flex-col w-5/6 max-w-sm py-14 px-6 bg-white dark:bg-black border-r overflow-y-auto">
          <div>
            <ul
              className="[&>li]:m-1 [&>li>a]:block [&>li>a]:p-4 [&>li>a]:text-sm [&>li>a]:font-semibold [&>li>a]:text-gray-400 [&>li>a]:rounded"
              // onClick={closeMenu}
            >
              <li>
                <DarkMode />
              </li>
              <li>
                <Link
                  className="hover:bg-red-50 hover:text-red-600"
                  href="./"
                  onClick={closeMenu}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  className="hover:bg-red-50 hover:text-red-600"
                  href="/fab"
                  onClick={closeMenu}
                >
                  FAB
                </Link>
              </li>
              <li>
                <Link
                  className="hover:bg-red-50 hover:text-red-600"
                  href="/fabricas-4-0"
                  onClick={closeMenu}
                >
                  Fábrica 4.0
                </Link>
              </li>
              <li>
                <Link
                  className="hover:bg-red-50 hover:text-red-600"
                  href="/proyectos"
                  onClick={closeMenu}
                >
                  Proyectos
                </Link>
              </li>
              {/* <li>
                <Link
                  className="hover:bg-red-50 hover:text-red-600"
                  href="/redes"
                  onClick={closeMenu}
                >
                  Redes Sociales
                </Link>
              </li> */}
              <li>
                <Link
                  className="hover:bg-red-50 hover:text-red-600"
                  href="/postulacion"
                  onClick={closeMenu}
                >
                  Postulación
                </Link>
              </li>
              <li>
                <Link
                  className="hover:bg-red-50 hover:text-red-600"
                  href="/#contact"
                >
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-auto text-xs text-center text-gray-400">
            {/* <SocialMedia /> */}
            <p className="my-4">Copyright {new Date().getFullYear()}</p>
            <Link
              href="https://www.linkedin.com/in/vicente-vásquez-gatica"
              target="_blank"
            >
              Desarrollado por:{" "}
              <span className="text-blue-700">Vicente Vásquez</span>
            </Link>
          </div>
        </nav>
      </nav>
    </aside>
  );
};

export default MenuMobile;
