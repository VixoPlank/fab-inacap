import React from "react";

const Contact = () => {
  return (
    <section
      // id="contact"
      className="w-full flex justify-center items-center container"
    >
      <form className="w-full p-8 my-4 md:px-12 lg:w-5/6 lg:pl-20 lg:pr-40 rounded-2xl border-solid border-2 border-red-500 ">
        <div className="flex">
          <h1 className="font-bold uppercase text-5xl">
            Envianos un <br /> mensaje
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Nombre y Apellido*"
          />
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email*"
          />
        </div>
        <div className="my-4">
          <textarea
            placeholder="Escribe aqui tu mensaje*"
            className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="my-2 w-1/2 lg:w-1/4">
          <button
            type="submit"
            className="uppercase text-sm font-bold tracking-wide bg-red-600 hover:bg-red-700  text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
          >
            Enviar Mensaje
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
