import iconosPlataformas from "./iconosPlataformas";

function TarjetasCard({ dashboard, alternarModo }) {
  return (
    <article
      className={`flex flex-col lg:grid shadow rounded-md text-center p-10 hover:bg-gray-200
      ${
        dashboard.platform === "youtube"
          ? "border-t-4 border-t-red-800"
          : dashboard.platform === "instagram"
            ? "relative before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-linear-to-r before:from-[#fdc468] before:to-[#df4896]"
            : "border-t-4 border-t-blue-500"
      }
        
       ${alternarModo ? "bg-[#252a41]" : "bg-[#f0f3fa]"}
       ${alternarModo ? "hover:bg-gray-700" : " hover:bg-gray-200"}
      `}
    >
      <p className="text-gray-500 flex items-center justify-center gap-2 mb-4 font-bold text-md">
        <img
          src={iconosPlataformas[dashboard.platform]}
          alt="icono plataformas"
          className="w-5 h-5"
        />
        {dashboard.handle}
      </p>
      <span
        className={`text-6xl font-bold text-slate-800 tracking-tight ${alternarModo ? "text-white" : "text-slate-80"}`}
      >
        {dashboard.count}
      </span>
      <span className="text-gray-400 uppercase tracking-[4px] text-[15px] mt-1 font-semibold">
        {dashboard.countLabel}
      </span>
      <span
        className={`font-bold flex items-center justify-center gap-2 mt-4 ${dashboard.isUp ? "text-emerald-600" : "text-rose-700"}`}
      >
        <img
          src={dashboard.isUp ? iconosPlataformas.up : iconosPlataformas.down}
          alt="icono tendencia"
          className="w-3 h-3 object-contain"
        />
        {dashboard.todayChange} Today
      </span>
    </article>
  );
}

export default TarjetasCard;
