import { useState } from "react";

function DarkMode({ alternarModo, CambioModo }) {
  return (
    <>
      <div
        className={`flex justify-between items-center md:justify-end md:gap-2 md:text-center p-4 transition-colors duration-300`}
      >
        <span className="text-gray-500 font-bold">Dark Mode</span>

        <button className="flex items-center cursor-pointer" onClick={CambioModo}>
          <svg
            className={` hover:opacity-60 transition-all duration-200 ${alternarModo ? "rotate-180" : ""}`}
            width="55"
            height="55"
            viewBox="0 0 64.00 64.00"
            xmlns="http://www.w3.org/2000/svg"
            fill="#aeb2cb"
            stroke="#aeb2cb"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth=""></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CCCCCC"
              strokeWidth="0.8960000000000001"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <rect
                x="8"
                y="20"
                width="48"
                height="24"
                rx="12"
                className={`transition-colors duration-300 ${
                  alternarModo
                    ? "fill-[url(#gradientToggle)]"
                    : "fill-[#aeb3cb]"
                }`}
              />
              <circle
                cx="20"
                cy="32"
                r="11"
                className={`transition-all duration-300 transform ${
                  /* Si el Dark Mode se mueve 24px a la derecha y se adapta al fondo oscuro. Si no, se queda en la izquierda blanco */
                  alternarModo
                    ? "translate-x-6 fill-[#252a41]"
                    : "translate-x-0 fill-white"
                }`}
              />
            </g>

            {/*Se añadio un degradado para el boton en el modo dark */}
            <defs>
              <linearGradient
                id="gradientToggle"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#378fe6" />
                <stop offset="100%" stopColor="#3eda82" />
              </linearGradient>
            </defs>
          </svg>
        </button>
      </div>
    </>
  );
}

export default DarkMode;
