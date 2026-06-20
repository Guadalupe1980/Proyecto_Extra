import iconosPlataformas from "./iconosPlataformas";

function TarjetasDescripcion({ dashboard, alternarModo }) {
  return (
    <>
      <article
        className={`shadow p-6 rounded-md flex flex-col gap-5 hover:bg-gray-200 ${alternarModo ? "bg-[#252a41]" : "bg-[#f0f3fa]"} ${alternarModo ? "hover:bg-gray-700" : " hover:bg-gray-200"}`}
      >
        <div className="flex justify-between items-center">
          <p className="text-gray-500 font-bold text-md">{dashboard.metric}</p>
          <img
            src={iconosPlataformas[dashboard.platform]}
            alt="logos de plataformas"
            className="w-5 h-5"
          />
        </div>

        <div className="flex justify-between items-end">
          <p
            className={`text-3xl font-bold text-slate-800 ${alternarModo ? "text-white" : "text-slate-800"}`}
          >
            {dashboard.value}
          </p>
          <span
            className={`font-bold flex items-center gap-1 text-xs 
            ${dashboard.isUp ? "text-emerald-600" : "text-rose-600"}`}
          >
            <img
              src={
                dashboard.isUp ? iconosPlataformas.up : iconosPlataformas.down
              }
              alt="iconos de tendencias"
              className="w-2"
            />
            {dashboard.change} %
          </span>
        </div>
      </article>
    </>
  );
}

export default TarjetasDescripcion;
