"use client";

import { signOut, useSession } from "next-auth/react";

export default function Sidebar() {

  const { data: session } = useSession();

  const handleLogout = async () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <div className="h-screen w-64 bg-[#f5f5f5] flex flex-col items-center py-8">
      <div className="flex items-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
        >
          <path
            fill="#2f2b3d"
            d="M17.25 2a1 1 0 0 1 1-1H22a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-1v14.25a.75.75 0 0 1-1.5 0V8h-1.25a1 1 0 0 1-1-1zM15.8 3q.228 0 .45.031V4.56a1.8 1.8 0 0 0-.45-.059H8.201a1.75 1.75 0 0 0-1.698 1.326L5.711 9H18.5v9.5h-1.001l.001 1.247c0 .138.112.25.25.25h.75v1.5h-.75a1.75 1.75 0 0 1-1.75-1.75l-.001-1.247H8.004v1.247a1.75 1.75 0 0 1-1.75 1.75H4.75A1.75 1.75 0 0 1 3 19.747V11.25c0-.815.433-1.529 1.082-1.923l.207-.827H3.75a.75.75 0 0 1-.743-.648L3 7.75a.75.75 0 0 1 .648-.743L3.75 7h.913l.386-1.538A3.25 3.25 0 0 1 8.202 3zM6.503 18.5H4.499l.001 1.247c0 .138.112.25.25.25h1.504a.25.25 0 0 0 .25-.25zM13.75 14h-3.502l-.102.007a.75.75 0 0 0 0 1.486l.102.007h3.502l.101-.007a.75.75 0 0 0-.1-1.493M17 12a1 1 0 1 0 0 2a1 1 0 0 0 0-2M7 12a1 1 0 1 0 0 2a1 1 0 0 0 0-2"
          />
        </svg>
        <h1 className="text-xl font-bold text-gray-800">Transport Solutions</h1>
      </div>

      <hr className="border-gray-300 w-48 mb-8" />

      <div className="flex flex-col items-center mb-10">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3em"
            height="3em"
            viewBox="0 0 512 512"
          >
            <path
              fill="#7692ff"
              fill-rule="evenodd"
              d="M256 42.667A213.333 213.333 0 0 1 469.334 256c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667m21.334 234.667h-42.667c-52.815 0-98.158 31.987-117.715 77.648c30.944 43.391 81.692 71.685 139.048 71.685s108.104-28.294 139.049-71.688c-19.557-45.658-64.9-77.645-117.715-77.645M256 106.667c-35.346 0-64 28.654-64 64s28.654 64 64 64s64-28.654 64-64s-28.653-64-64-64"
            />
          </svg>
        </div>
        <span className="mt-2 text-lg font-semibold text-gray-700">
          {session?.user?.email}
        </span>
      </div>
      <div className="flex flex-col items-start w-full px-6">
        <button className="w-full flex items-center p-2 mb-2 shadow-lg text-blue-500 bg-[#f9f9f9] rounded-md hover:scale-110">
          <div className="mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M15.8 3a3.25 3.25 0 0 1 3.152 2.46L19.337 7h.913a.75.75 0 0 1 .743.648L21 7.75a.75.75 0 0 1-.648.743l-.102.007h-.536l.208.826a2.25 2.25 0 0 1 1.082 1.924v8.497a1.75 1.75 0 0 1-1.75 1.75H17.75a1.75 1.75 0 0 1-1.75-1.75l-.001-1.247H8.004v1.247a1.75 1.75 0 0 1-1.75 1.75H4.75A1.75 1.75 0 0 1 3 19.747V11.25c0-.815.433-1.529 1.082-1.923l.207-.827H3.75a.75.75 0 0 1-.743-.648L3 7.75a.75.75 0 0 1 .648-.743L3.75 7h.913l.386-1.538A3.25 3.25 0 0 1 8.202 3zM6.503 18.5H4.499l.001 1.247c0 .138.112.25.25.25h1.504a.25.25 0 0 0 .25-.25zm13 0h-2.005l.001 1.247c0 .138.112.25.25.25h1.504a.25.25 0 0 0 .25-.25zM13.751 14h-3.502l-.102.007a.75.75 0 0 0 0 1.486l.102.007h3.502l.101-.007A.75.75 0 0 0 13.751 14M17 12a1 1 0 1 0 0 2a1 1 0 0 0 0-2M7 12a1 1 0 1 0 0 2a1 1 0 0 0 0-2m8.8-7.5H8.201a1.75 1.75 0 0 0-1.698 1.326L5.711 9h12.582l-.796-3.176A1.75 1.75 0 0 0 15.799 4.5"
              />
            </svg>
          </div>
          <span className="font-medium">Vehículos</span>
        </button>
        <button
          onClick={handleLogout}
          className="w-full flex items-center p-2 text-gray-600 rounded-md hover:bg-gray-200"
        >
          <div className="mr-4 bg-[#f9f9f9] shadow-lg rounded-md p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4 12a1 1 0 0 0 1 1h7.59l-2.3 2.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4-4a1 1 0 0 0 .21-.33a1 1 0 0 0 0-.76a1 1 0 0 0-.21-.33l-4-4a1 1 0 1 0-1.42 1.42l2.3 2.29H5a1 1 0 0 0-1 1M17 2H7a3 3 0 0 0-3 3v3a1 1 0 0 0 2 0V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3a1 1 0 0 0-2 0v3a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3"
              />
            </svg>
          </div>
          <span className="font-medium">Cerrar sesión</span>
        </button>
      </div>
    </div>
  );
}
