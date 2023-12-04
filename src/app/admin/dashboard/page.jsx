"use client";

import React from "react";

const page = () => {
  return (
    <section>
      <header className="text-center ">
        <h1 className="text-3xl uppercase">Hola Bienvenido</h1>
        <p>Accesos rápido</p>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-3">
        <article className="">
          <h1>Hola</h1>
        </article>
        <article className="">
          <h1>Hola</h1>
        </article>
        <article className="">
          <h1>Hola</h1>
        </article>
      </section>
    </section>
  );
};

export default page;
