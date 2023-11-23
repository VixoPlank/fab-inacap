"use client";

import axios, { AxiosError } from "axios";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { IoEyeSharp } from "react-icons/io5";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa";
import { emailRegex } from "@/utils/regex";
import DarkModeToggle from "@components-home/DarkMode";

function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState();
  const router = useRouter();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const signupResponse = await axios.post("/api/auth/signup", {
        name: formData.get("name"),
        lastname: formData.get("lastname"),
        email: formData.get("email"),
        password: formData.get("password"),
      });
      console.log(signupResponse);
      const res = await signIn("credentials", {
        email: signupResponse.data.email,
        password: formData.get("password"),
        redirect: false,
      });

      if (res.ok) return router.push("/user/dashboard");

      console.log(res);
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data.message);
      }
    }
  };

  return (
    <section className="flex min-h-full flex-1 flex-col justify-center py-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <header className="mt-6 uppercase text-center text-4xl font-bold leading-9 tracking-tight text-gray-900 dark:text-slate-200">
          Creación de cuenta
        </header>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-slate-100 px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <aside className="flex items-end justify-between">
            <Link href="/login">
              <button className="bg-red-600 hover:bg-red-700 h-10 w-10 rounded-lg items-center flex justify-center text-white">
                <FaArrowLeft />
              </button>
            </Link>

            <DarkModeToggle />
          </aside>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-500 text-white p-2 mb-2">{error}</div>
            )}

            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nombre
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="email"
                  // onChange={handleChange}
                  className="block w-full rounded-md border-0 pl-2 py-1.5 dark:bg-slate-50 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="lastname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Apellido
              </label>
              <div className="mt-2">
                <input
                  id="lastname"
                  name="lastname"
                  // onChange={handleChange}
                  className="block w-full rounded-md border-0 pl-2 py-1.5 dark:bg-slate-50 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Correo electrónico
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  // onChange={handleChange}
                  className="block w-full rounded-md border-0 pl-2 py-1.5 dark:bg-slate-50 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

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
                  // onChange={handleChange}
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

            <div>
              <button className="flex w-full justify-center rounded-md bg-red-600 hover:bg-red-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                Crear Cuenta
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
