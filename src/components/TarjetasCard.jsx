import iconosPlataformas from "./iconosPlataformas"; 

function TarjetasCard({ dashboard }) {

  return (
    <article className="shadow">
      <p><img src={iconosPlataformas[dashboard.platform]} alt="icono plataformas" /> {dashboard.handle}</p>
      <span>{dashboard.count}</span>
      <span>{dashboard.countLabel}</span>
      <span><img src={dashboard.isUp ?  iconosPlataformas.Up : iconosPlataformas.Down} alt="icono Up" />{dashboard.todayChange}</span>
    </article>
  );
}

export default TarjetasCard;
