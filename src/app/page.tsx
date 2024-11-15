import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <div className="w-full p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.5em"
              height="2.5em"
              viewBox="0 0 32 32"
            >
              <path
                fill="#7692ff"
                d="M6.502 6.132A4 4 0 0 1 10.406 3h11.187a4 4 0 0 1 3.905 3.132L26.135 9H27a1 1 0 1 1 0 2h-.42l.33 1.485A4 4 0 0 1 29 16v10a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3v-1H10v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V16a4 4 0 0 1 2.09-3.515L5.42 11H5a1 1 0 1 1 0-2h.864zm17.044.434A2 2 0 0 0 21.593 5H10.407a2 2 0 0 0-1.953 1.566L7.247 12h17.506zM24 25v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1zM5 25v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1zm2-11a2 2 0 0 0-2 2v7h22v-7a2 2 0 0 0-2-2zm6.5 5a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2zM11 17.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M22.5 19a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"
              />
            </svg>
          </span>
          <h2 className="text-4xl font-bold text-[#7692ff]">
            Transport Solutions S.A
          </h2>
        </div>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-[#7692ff] text-white rounded hover:bg-[#3660f7]">
            <Link href={"/login"}>Iniciar sesión</Link>
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-2 mt-40">
        <div className="max-w-2xl p-4 text-center">
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-[#7692ff]">
              Control y gestión de vehículos
            </h1>
          </div>
          <div className="mb-8">
            <p className="text-lg">
              Realiza un seguimiento detallado del historial de mantenimiento de cada
              vehículo, optimizando la planificación de servicios preventivos y
              reduciendo tiempos de inactividad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
