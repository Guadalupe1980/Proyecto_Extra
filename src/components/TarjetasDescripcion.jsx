import iconosPlataformas from "./iconosPlataformas";

function TarjetasDescripcion({ dashboard }) {


  return (
    <>
    <article className="border">
      <p> {dashboard.metric}</p>
    <p>{dashboard.value} <span>{dashboard.change}</span> </p>
    </article>
    </>
  )
}

export default TarjetasDescripcion;