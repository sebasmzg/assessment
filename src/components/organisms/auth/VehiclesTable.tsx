import { IVehiclesResponse } from "@/app/core/application/dto/vehicles/vehicles-response.dto";
import { useVehicles } from "@/app/infraestructure/hooks/useVehicles";
import { TableHeader } from "@/components/atoms/Table-header";
import Pagination from "@/components/molecules/Pagination";
import { TableRow } from "@/components/molecules/Table-row";
import React from "react";

interface IVehicleTableProps {
  data: IVehiclesResponse | null;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const VehicleTable = ({data,
  currentPage,
  totalPages,
  onPageChange}: IVehicleTableProps) => {

  return (
    <div className="w-full shadow-md rounded-md overflow-hidden bg-[#f9f9f9]">
      <table className="w-full text-left">
        <TableHeader
          headers={["Foto", "Marca", "Modelo", "Año", "Placa", "Acciones"]}
        />
        <tbody>
        {data?.data.map((vehicle) => (
          <TableRow key={vehicle.id} vehicle={vehicle} />
        ))}
        </tbody>
      </table>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};
