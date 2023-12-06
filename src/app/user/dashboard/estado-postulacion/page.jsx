import { connectDB } from '@/libs/mongodb'
import Postulacion from "@/models/postulacion";

async function loadPostulacion(){
  connectDB()
  const post = await Postulacion.find()
  return post
}



async function Postulaciones () {
  const post = await loadPostulacion()
  return (
    <section className="bg-gray-900/80 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Historial de Postulaciones
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Aqui se mostrará todas tus postulaciones
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {post.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col gap-8 lg:flex-row"
              >
                
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.timestamps} className="text-gray-100">
                      {post.date}
                    </time>
                    <span
                      
                      className={`relative z-10 rounded-full px-3 py-1.5 font-medium hover:bg-gray-100 ${
                        post.estado === "Aprobado"
                          ? "bg-green-500 text-white"
                          : post.estado === "Rechazado"
                          ? "bg-red-500 text-white"
                          : post.estado === "En Revisión"
                          ? "bg-yellow-500 text-black"
                          : "text-white"
                      }`}
                    >
                      {post.estado}
                    </span>
                    <a href="#" className="relative z-10 rounded-full px-3 py-1.5 font-extrabold text-black bg-gray-300 hover:bg-gray-100">Ver Proyecto</a>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                      <a>
                        <span className="absolute inset-0 " />
                        {post.nombre_proyecto}
                      </a>
                    </h3>
                    <p className="mt-5 text-lg leading-6 text-white">
                      {post.descripcion}
                    </p>
                  </div>
                  
  
                  <div className=" border-white border-b-2 "></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  
  );
};

export default Postulaciones;