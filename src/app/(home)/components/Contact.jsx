"use client";

import { useToast } from "@/components/ui/use-toast";
import useForm from "@/hooks/useForm";
import { emailRegex } from "@/utils/regex";

const Contact = () => {
  const { formData, handleChange, reset, validateEmptyFields } = useForm({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación del Formulario
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

    //TOAST: si el Correo le falta "@" tira error
    if (!emailRegex.test(formData.email)) {
      toast({
        variant: "destructive",
        title: "Error de Campos.",
        description: "Debe ingresar un correo válido!",
      });
      return;
    }

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        // Procesar la respuesta si es necesario
        toast({
          variant: "success",
          title: "Se ha enviado correctamente.",
          description: "Nos podremos en contacto con usted lo antes posible.",
        });
        const data = await res.json();
        console.log(data);
      } else {
        // Manejar errores
        console.error("Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }

    // Reiniciar formulario
    reset();
  };

  return (
    <section
      className="w-full flex justify-center items-center container"
      id="contact"
    >
      <form
        id="nombre"
        className="w-full p-8 my-4 md:px-12 lg:w-5/6 lg:pl-20 lg:pr-40 rounded-2xl border-solid border-2 border-red-500"
        onSubmit={handleSubmit}
      >
        <div className="flex mb-3">
          <legend className="font-bold uppercase text-5xl">
            Envianos un <br /> mensaje
          </legend>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
          <input
            id="nombre"
            name="nombre"
            type="text"
            value={formData.nombre}
            placeholder="Nombre y Apellido*"
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            onChange={handleChange}
          />
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            placeholder="Email*"
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            onChange={handleChange}
          />
        </div>
        <div className="my-4">
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="Escribe aqui tu mensaje*"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="my-2 w-1/2 lg:w-1/4">
          <button
            onClick={handleSubmit}
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
