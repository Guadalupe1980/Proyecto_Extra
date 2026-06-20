function Encabezado({ titulo, total, alternarModo }) {
  return (
    <>
      <article className="w-full">
        <h1
          className={`text-2xl lg:text-3xl font-extrabold text-slate-800 tracking-tight mb-1 ${alternarModo ? "text-white" : "text-slate-800"}`}
        >
          {titulo}
        </h1>
        <p className="text-gray-500 font-bold text-md">
          Total Followers: {total}
        </p>
        <hr className="border-gray-600 my-6 w-full" />
      </article>
    </>
  );
}

export default Encabezado;
