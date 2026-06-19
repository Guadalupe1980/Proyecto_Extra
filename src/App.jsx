import data from "../public/data.json";
import Encabezado from "./components/Encabezado";
import DarkMode from "./components/DarkMode";
import TarjetasCard from "./components/TarjetasCard";
import TarjetasDescripcion from "./components/TarjetasDescripcion";

function App() {
  return (
    <>
      <main>
        <section>
          <Encabezado titulo="Social Media Dashboard" total="23,004" />
        </section>

        <section>
          <DarkMode />
        </section>

        <section className="flex flex-col justify-center items-center gap-5">
          {data.socialCards.map((dashCard, indiceCards) => (
            <TarjetasCard key={indiceCards} dashboard={dashCard} />
          ))}
        </section>

        <section>
          {data.overview.map((dashDescrip, indiceDescripcion) => (
            <TarjetasDescripcion
              key={indiceDescripcion}
              dashboard={dashDescrip}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
