import { useState } from "react";
import data from "../public/data.json";
import Encabezado from "./components/Encabezado";
import DarkMode from "./components/DarkMode";
import TarjetasCard from "./components/TarjetasCard";
import TarjetasDescripcion from "./components/TarjetasDescripcion";

function App() {
  // Transladamos la funcion del componente del boton para que funcione en todo el HTML
  const [alternarModo, setAlternarModo] = useState(false);

  function CambioModo() {
    setAlternarModo(!alternarModo);
  }

  return (
    <>
      {/*Se asigna un operador ternario para validar si es true o false y que cambie de fondo*/}
      <main
        className={`w-full mx-auto py-8 flex flex-col min-h-screen transition-colors duration-300
        ${alternarModo ? "bg-[#1e202a]" : "bg-white"}
      `}
      >
        <section className="max-w-6xl mx-auto w-full px-6">
          <Encabezado
            titulo="Social Media Dashboard"
            total="23,004"
            alternarModo={alternarModo}
          />
        </section>

        {/*Le pasamos los props al componenete Hijo (para el Dark Mode)*/}
        <section className="max-w-6xl mx-auto w-full px-6">
          <DarkMode alternarModo={alternarModo} CambioModo={CambioModo} />
        </section>

        <section className="grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 gap-6 max-w-6xl mx-auto w-full px-6">
          {data.socialCards.map((dashCard, indiceCards) => (
            <TarjetasCard
              key={indiceCards}
              dashboard={dashCard}
              alternarModo={alternarModo}
            />
          ))}
        </section>

        <h2
          className={`text-2xl font-bold mb-6 mt-12 text-left max-w-6xl mx-auto w-full px-6 ${alternarModo ? "text-white" : "text-slate-600"}`}
        >
          Overview - Today
        </h2>
        <section className="grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 gap-6 max-w-6xl mx-auto w-full px-6">
          {data.overview.map((dashDescrip, indiceDescripcion) => (
            <TarjetasDescripcion
              key={indiceDescripcion}
              dashboard={dashDescrip}
              alternarModo={alternarModo}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
