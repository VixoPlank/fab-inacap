"use client";

import axios from "axios";

import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import useForm from "@/hooks/useForm";
import { emailRegex } from "@/utils/regex";

const Page = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    await axios.post("/api/postulacion", {
      dni: formData.get("dni"),
      personalidad: formData.get("personalidad"),
      razon_socia: formData.get("razon_socia"),
      nombre: formData.get("nombre"),
      apellido: formData.get("apellido"),
      date: formData.get("date"),
      ocupacion: formData.get("ocupacion"),
      nivel_ocupacional: formData.get("nivel_ocupacional"),
      institucion: formData.get("institucion"),
      nombre_proyecto: formData.get("nombre_proyecto"),
      objetivo_proyecto: formData.get("objetivo_proyecto"),
      problematica: formData.get("problematica"),
      descripcion: formData.get("descripcion"),
      resultados: formData.get("resultados"),
      fab: formData.get("fab"),
      comentario: formData.get("comentario"),
    });
  };

  // const { reset} = useForm(
  //   {
  //     //Aqui los campos del formulario
  //     dni: "",
  //     personalidad: "",
  //     razon_social: "",
  //     nombre: "",
  //     apellido: "",
  //     date: "",
  //     ocupacion: "",
  //     nivel_ocupacional: "",
  //     institucion: "",
  //     // Información del proyecto
  //     nombre_proyecto: "",
  //     objetivo_proyecto: "",
  //     problematica: "",
  //     descripcion: "",
  //     resultados: "",
  //     fab: "",
  //     comentarios: "",
  //   },
  //   "postulacion"
  // );

  // const { toast } = useToast();

  //   // Validación del Formulario
  //   const emptyFields = validateEmptyFields();
  //   if (emptyFields.length > 0) {
  //     toast({
  //       variant: "destructive",
  //       title: "Error de Campos.",
  //       description: `Los siguientes campos están vacíos: ${emptyFields.join(
  //         ", "
  //       )}.`,
  //     });
  //     return;
  //   }

  //   //TOAST: si el Correo le falta "@" tira error
  //   if (!emailRegex.test(formData.email)) {
  //     toast({
  //       variant: "destructive",
  //       title: "Error de Campos.",
  //       description: "Debe ingresar un correo válido!",
  //     });
  //     return;
  //   }

  // Crear funcion de si existe cuenta

  // Reiniciar formulario
  // reset();

  return (
    <div>
      <header className="w-full flex justify-center items-center container text-4xl">
        Formulario de Postulación de Proyecto
      </header>
      <form
        className="w-full p-8 my-4 justify-between rounded-2xl border-solid border-2 border-red-500"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl text-center ">Información del Postulante</h1>
        <section className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-3 mt-2">
          <div>
            <label htmlFor="dni">ID Usuario</label>
            <input
              id="dni"
              name="dni"
              type="text"
              // value={formData.dni}
              placeholder="Rut de personalidad jurídica o natural"
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              // onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="personalidad">Personalidad</label>
            <input
              id="personalidad"
              name="personalidad"
              type="text"
              // value={formData.personaliadad}
              placeholder="Tipo de empresa"
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              // onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="razon_social">Razón Social</label>
            <input
              id="razon_social"
              name="razon_social"
              type="text"
              // value={formData.razon_social}
              placeholder="Nombre de la empresa"
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              // onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="nombre">Nombre</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              // value={formData.nombre}
              placeholder="Ingrese su nombre"
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              // onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="nombre">Apellidos</label>
            <input
              id="apellido"
              name="apellido"
              type="text"
              // value={formData.apellido}
              placeholder="Ingrese su apellido"
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              // onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="date">Fecha de nacimiento</label>
            <input
              id="date"
              name="date"
              type="text"
              // value={formData.date}
              placeholder="Ingrese su apellido"
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              // onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="ocupacion">Ocupación</label>
            <input
              id="ocupacion"
              name="ocupacion"
              type="text"
              // value={formData.ocupacion}
              placeholder="Ingrese su Ocupación"
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              // onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="nivel_educacional">Nivel educacional</label>
            <input
              id="nivel_educacional"
              name="nivel_educacional"
              type="text"
              // value={formData.ocupacion}
              placeholder="Ingrese su Ocupación"
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              // onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="institucion">
              Institución de educación superior
            </label>
            <input
              id="institucion"
              name="institucion"
              type="text"
              // value={formData.ocupacion}
              placeholder="Ingrese su Institución de nivel superior"
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              // onChange={handleChange}
            />
          </div>
        </section>
        {/* INFORMACION DEL PROYECTO */}
        <h2 className="text-2xl text-center mt-7">Información del Proyecto</h2>
        <section className="grid grid-cols-1 gap-y-3">
          <div>
            <label htmlFor="nombre_proyecto" className="block">
              Nombre del Proyecto
            </label>
            <input
              id="nombre_proyecto"
              name="nombre_proyecto"
              type="text"
              // value={formData.nombre_proyecto}
              placeholder="Ingrese el nombre del proyecto"
              className="w-96 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              // onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="objetivo_proyecto">
              Objetivo general del proyecto
            </label>
            <textarea
              id="objetivo_proyecto"
              name="objetivo_proyecto"
              // value={formData.objetivo_proyecto}
              placeholder="Ingrese el nombre del proyecto"
              className="w-full h-auto bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              // onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="problematica" className="block">
              Problemática a tratar
            </label>
            <textarea
              id="problematica"
              name="problematica"
              // value={formData.problematica}
              placeholder="Ingrese la problematica a tratar"
              className="w-full h-auto bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              // onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="descripcion" className="block">
              Descripción del proyecto
            </label>
            <textarea
              id="descripcion"
              name="descripcion"
              // value={formData.descripcion}
              placeholder="Ingrese la descripción de su proyecto"
              className="w-full h-auto bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              // onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="resultados" className="block">
              Resultados esperados
            </label>
            <textarea
              id="resultados"
              name="resultados"
              // value={formData.resultados}
              placeholder="Ingrese los resultados esperados"
              className="w-full h-auto bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              // onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="fab" className="block">
              ¿Cómo llegaron a FAB INACAP?
            </label>
            <textarea
              id="fab"
              name="fab"
              // value={formData.fab}
              placeholder="Escriba su respuesta"
              className="w-full h-auto bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              // onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="comentarios" className="block">
              Comentarios/Información adicional
            </label>
            <textarea
              id="comentarios"
              name="comentarios"
              // value={formData.comentarios}
              placeholder="Escriba su respuesta"
              className="w-full h-auto bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              // onChange={handleChange}
            />
          </div>
        </section>
        <button
          // onClick={handleSubmit}
          className="uppercase text-sm font-bold tracking-wide bg-red-600 hover:bg-red-700  text-gray-100 p-3 rounded-lg w-auto mt-5 focus:outline-none focus:shadow-outline"
        >
          Enviar Postulación
        </button>
      </form>
    </div>
  );
};

export default Page;
