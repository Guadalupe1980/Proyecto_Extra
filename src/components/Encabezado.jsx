function Encabezado({ titulo, total }) {
  return (
    <>
      <article className="border">
        <h1>{titulo}</h1>
        <p>{total}</p>
      </article>
    </>
  );
}

export default Encabezado;
