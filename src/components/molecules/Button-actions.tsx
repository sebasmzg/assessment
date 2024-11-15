"use client";

import { useModalContext } from "@/app/infraestructure/context/modal-context";
import { UpdateVehicleTemplate } from "../templates/Update-vehicle";
import { IVehicle } from "@/app/core/application/dto/vehicles/vehicles-response.dto";
import { useRouter } from "next/navigation";

interface VehicleActionsProps {
  itemData: IVehicle;
}

export const VehicleActions = ({itemData}:VehicleActionsProps) => {

  const { openModal, setModalContent } = useModalContext();
  const router = useRouter();

  const handleEditVehicle = () => {
    console.log("Edit vehicle",itemData);
    setModalContent(<UpdateVehicleTemplate itemData={itemData} />);
    openModal();
  }

  const handleDeleteVehicle = () => {
    console.log("Delete vehicle");
  }

  const handleViewVehicle = () => {
    router.push(`/home/maintenance/${itemData.id}`);
  }

  return (
    <div className="flex space-x-2">
      <button onClick={handleEditVehicle} className="text-blue-600 hover:text-blue-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="#9E9E9E"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          >
            <path d="M19.09 14.441v4.44a2.37 2.37 0 0 1-2.369 2.369H5.12a2.37 2.37 0 0 1-2.369-2.383V7.279a2.356 2.356 0 0 1 2.37-2.37H9.56" />
            <path d="M6.835 15.803v-2.165c.002-.357.144-.7.395-.953l9.532-9.532a1.36 1.36 0 0 1 1.934 0l2.151 2.151a1.36 1.36 0 0 1 0 1.934l-9.532 9.532a1.36 1.36 0 0 1-.953.395H8.197a1.36 1.36 0 0 1-1.362-1.362M19.09 8.995l-4.085-4.086" />
          </g>
        </svg>
      </button>
      <button onClick={handleViewVehicle} className="text-red-600 hover:text-red-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <path
            fill="#9E9E9E"
            d="M13.5 8H12v5l4.28 2.54l.72-1.21l-3.5-2.08zM13 3a9 9 0 0 0-9 9H1l3.96 4.03L9 12H6a7 7 0 0 1 7-7a7 7 0 0 1 7 7a7 7 0 0 1-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.9 8.9 0 0 0 13 21a9 9 0 0 0 9-9a9 9 0 0 0-9-9"
          />
        </svg>
      </button>
      <button onClick={handleDeleteVehicle} className="text-red-600 hover:text-red-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="#9E9E9E"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M14 11v6m-4-6v6M6 7v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7M4 7h16M7 7l2-4h6l2 4"
          />
        </svg>
      </button>
    </div>
  );
};
