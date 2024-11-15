import { TableHeader } from "@/components/atoms/Table-header";
import Pagination from "@/components/molecules/Pagination";
import { TableRow } from "@/components/molecules/Table-row";
import React from "react";

export const VehicleTable: React.FC = () => (
  <div className="w-full shadow-md rounded-md overflow-hidden bg-[#f9f9f9]">
    <table className="w-full text-left">
      <TableHeader
        headers={["Foto", "Marca", "Modelo", "Año", "Placa", "Acciones"]}
      />
      <tbody>
        {/* Aquí mapearías tus datos */}
        <TableRow
          vehicle={{
            brand: "Toyota",
            model: "Corolla",
            year: "2020",
            plate: "ABC1234",
          }}
        />
        <TableRow
          vehicle={{
            brand: "Toyota",
            model: "TXL",
            year: "2025",
            plate: "NKA1234",
          }}
        />
      </tbody>
    </table>
    <Pagination
      totalPages={4}
      currentPage={0}
      onPageChange={function (page: number): void {
        throw new Error("Function not implemented.");
      }}
    />
  </div>
);
