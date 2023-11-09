"use client";

import { useState } from "react";
import { BsGoogle, BsFillEyeSlashFill, BsMicrosoft } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import { useToast } from "@/components/ui/use-toast";
import { emailRegex } from "@/utils/regex";
import useForm from "@/hooks/useForm";
import DarkModeToggle from "@components-home/DarkMode";
import Link from "next/link";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const { formData, handleChange, validateEmptyFields } = useForm({
    email: "",
    password: "",
  });

  const { toast } = useToast();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Válidación del Login
    const emptyFields = validateEmptyFields();
    if (emptyFields.length > 0) {
      toast({
        variant: "destructive",
        title: "Error de Campos.",
        description: `Los siguientes campos están vacíos: ${emptyFields.join(
          ", "
        )}.`,
      });
      return;
    }
    // Toast si el correo le falta "@" tirar error
    if (!emailRegex.test(formData.email)) {
      toast({
        variant: "destructive",
        title: "Error de Campos.",
        description: "Debe ingresar un correo válido!",
      });
      return;
    }
    // creacion funcion si la contraseña es incorrecta
    // creacion funcion si el correo no existe o es incorrecto 
  };

  return (
    <section className="flex min-h-full flex-1 flex-col justify-center py-10 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* <img
          className="mx-auto h-20 w-auto"
          src="/logo-fab.png"
          alt="Your Company"
        /> */}
        <header className="mt-6 uppercase text-center text-4xl font-bold leading-9 tracking-tight text-gray-900 dark:text-slate-200">
          Inicio de Sesión
        </header>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-slate-100 px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <aside className="flex items-end justify-between">
            <Link href="/">
              <button className="bg-red-600 hover:bg-red-700 h-10 w-10 rounded-lg items-center flex justify-center text-white">
                <FaArrowLeft />
              </button>
            </Link>

            <DarkModeToggle />
          </aside>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Correo electrónico */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Dirección de correo electrónico
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 pl-2 py-1.5 dark:bg-slate-50 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* Contraseña */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Contraseña
              </label>
              <div className="relative mt-2">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 pl-2 py-1.5 dark:bg-slate-50 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 pr-10 sm:text-sm sm:leading-6"
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-black"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <IoEyeSharp className="text-gray-600" />
                  ) : (
                    <BsFillEyeSlashFill className="text-gray-600" />
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 dark:bg-slate-50"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-3 block text-sm leading-6 text-gray-900 "
                >
                  Recordarme
                </label>
              </div>

              <div className="text-sm leading-6">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Se te ha olvidado la contraseña?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-red-600 hover:bg-red-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Iniciar sesión
              </button>
            </div>
          </form>

          <div>
            <div className="relative mt-10">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm font-medium leading-6">
                <span className="bg-slate-100 px-6 text-gray-900">
                  O continuar con
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <a
                href="#"
                className="flex w-full items-center justify-center gap-3 rounded-md bg-red-600 hover:bg-red-700 px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
              >
                <BsGoogle />
                <span className="text-sm font-semibold leading-6">Google</span>
              </a>

              <a
                href="#"
                className="flex w-full items-center justify-center gap-3 rounded-md bg-blue-600 hover:bg-blue-700 px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
              >
                <BsMicrosoft />
                <span className="text-sm font-semibold leading-6">
                  Microsoft
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
