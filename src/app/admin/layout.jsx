"use client";
import { Fragment, useState } from "react";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import DarkModeToggle from "@components-home/DarkMode";
import { AiOutlineHome, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaUserAltSlash, FaCheck } from "react-icons/fa";
import { CiBoxList } from "react-icons/ci";
import { GiSandsOfTime } from "react-icons/gi";
import { RiUserSearchLine } from "react-icons/ri";
import { MdDateRange, MdOutlineQueryStats } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { signOut } from "next-auth/react";
import RutasProtegidas from "@/components/dashboards/RutasProtegidas";

const navigation = [
  {
    name: "Inicio",
    href: "/admin/dashboard",
    icon: AiOutlineHome,
    current: false,
  },
  {
    name: "Ver Postulantes",
    href: "/admin/dashboard/ver-postulantes",
    icon: CiBoxList,
    current: false,
  },
  {
    name: "Postulaciones en Proceso",
    href: "/admin/dashboard/postulaciones-proceso",
    icon: GiSandsOfTime,
    current: false,
  },
  {
    name: "Buscar Postulante",
    href: "/admin/dashboard/buscar-postulantes",
    icon: RiUserSearchLine,
    current: false,
  },
  {
    name: "Postulaciónes Aprobadas",
    href: "/admin/dashboard/postulaciones-aprobadas",
    icon: FaCheck,
    current: false,
  },
  {
    name: "Postulaciones Rechazadas",
    href: "/admin/dashboard/postulaciones-rechazadas",
    icon: FaUserAltSlash,
    current: false,
  },
  {
    name: "Abrir Postulaciones",
    href: "/admin/dashboard/abrir-postulaciones",
    icon: MdDateRange,
    current: false,
  },
  {
    name: "Ver Estadísticas",
    href: "/admin/dashboard/estadisticas",
    icon: MdOutlineQueryStats,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <RutasProtegidas allowedRoles={["admin"]}>
      <section>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <AiOutlineClose
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                    <div className="flex h-16 shrink-0 items-center justify-between">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                      />
                      <DarkModeToggle />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? "bg-gray-800 text-white"
                                      : "text-gray-400 hover:text-white hover:bg-gray-800",
                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                  )}
                                >
                                  <item.icon
                                    className="h-6 w-6 shrink-0"
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
            <div className="flex h-16 shrink-0 items-center justify-between">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
              <DarkModeToggle />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-800 text-white"
                              : "text-gray-400 hover:text-white hover:bg-gray-800",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                          )}
                        >
                          <item.icon
                            className="h-6 w-6 shrink-0"
                            aria-hidden="true"
                          />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="-mx-6 mt-auto text-white hover:bg-gray-800">
                  <button
                    onClick={() => {
                      signOut();
                    }}
                    className="flex items-center gap-x-4 px-6 py-3  font-semibold leading-6 "
                  >
                    <BiLogOut className="h-6 w-6" />
                    <p> Cerrar sessión</p>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-400 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <AiOutlineMenu className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-white">
            Dashboard
          </div>
          <button
            onClick={() => {
              signOut();
            }}
          >
            <BiLogOut className="h-6 w-6" />
            {/* <p> Cerrar sessión</p> */}
          </button>
        </div>

        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">
            <main>{children}</main>
          </div>
        </main>
      </section>
    </RutasProtegidas>
  );
}
