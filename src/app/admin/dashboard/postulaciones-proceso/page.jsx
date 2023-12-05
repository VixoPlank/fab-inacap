"use client";

import Link from "next/link";

const statuses = {
  Pendiente: "text-yellow-400 bg-yellow-400/10",
};
const activityItems = [
  {
    user: {
      name: "Mario Acuña",
    },
    commit: "mario.acuna01@inacapmail.cl",

    status: "Pendiente",
    date: "hace 1 dia",
    dateTime: "2023-01-23T11:00",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const page = () => {
  return (
    <section className="bg-gray-900 py-10">
      <header className="text-4xl text-center">
        Bandeja de Postulaciones en Revisión
      </header>
      <table className="mt-6 w-full whitespace-nowrap text-left">
        <colgroup>
          <col className="w-full sm:w-4/12" />
          <col className="lg:w-4/12" />
          <col className="lg:w-2/12" />
          <col className="lg:w-1/12" />
          <col className="lg:w-1/12" />
        </colgroup>
        <thead className="border-b border-white/10 text-sm leading-6 text-white">
          <tr>
            <th
              scope="col"
              className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8"
            >
              Nombre del Postulante
            </th>
            <th
              scope="col"
              className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell"
            >
              Correo
            </th>
            <th
              scope="col"
              className="py-2 pl-0 pr-4 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20"
            >
              Estado
            </th>
            {/* no tocar */}
            <th
              scope="col"
              className="hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20"
            >
              Detalle
            </th>
            <th
              scope="col"
              className="hidden py-2 pl-0 pr-4 text-right font-semibold sm:table-cell sm:pr-6 lg:pr-8"
            >
              Fecha de ingreso
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {activityItems.map((item) => (
            <tr key={item.commit}>
              <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                <div className="flex items-center gap-x-4">
                  <div className="truncate text-sm font-medium leading-6 text-white">
                    {item.user.name}
                  </div>
                </div>
              </td>
              <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                <div className="flex gap-x-3">
                  <div className="font-mono text-sm leading-6 text-gray-400">
                    {item.commit}
                  </div>
                </div>
              </td>
              <td className="py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20">
                <div className="flex items-center justify-end gap-x-2 sm:justify-start">
                  <time
                    className="text-gray-400 sm:hidden"
                    dateTime={item.dateTime}
                  >
                    {item.date}
                  </time>
                  <div
                    className={classNames(
                      statuses[item.status],
                      "flex-none rounded-full p-1"
                    )}
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-current" />
                  </div>
                  <div className="hidden text-white sm:block">
                    {item.status}
                  </div>
                </div>
              </td>
              {/* Crear funcion para mostrar el detalle */}

              <Link href="detalle-proyecto">
                <td className="text-sm hover:underline hover:text-red-600 py-4">
                  Ver detalle
                </td>
              </Link>
              {/* <td className="hidden py-4 pl-0 pr-8 text-sm leading-6 text-gray-400 md:table-cell lg:pr-20">
                {item.duration}
              </td> */}
              <td className="hidden py-4 pl-0 pr-4 text-right text-sm leading-6 text-gray-400 sm:table-cell sm:pr-6 lg:pr-8">
                <time dateTime={item.dateTime}>{item.date}</time>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default page;
