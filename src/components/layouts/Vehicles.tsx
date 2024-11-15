"use client";

import React from "react";
import { FilterForm } from "../organisms/FilterForm";
import { Button } from "../atoms/Button";
import { VehicleTable } from "../organisms/auth/VehiclesTable";
import { useVehicles } from "@/app/infraestructure/hooks/useVehicles";
import { useModalContext } from "@/app/infraestructure/context/modal-context";
import { CreateVehicleTemplate } from "../templates/Create-vehicle";

export const Vehicles = () => {
  const { data, currentPage, totalPages, fetchVehicles } = useVehicles();
  const { openModal, setModalContent } = useModalContext()

  const handlePageChange = (page: number) => {
    fetchVehicles(page);
  };

  const handleAddVehicle = () => {
    setModalContent(<CreateVehicleTemplate />);
    openModal();
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Gestión de vehículos</h1>
      <FilterForm />
      <div className="flex gap-4 mb-6">
        <Button
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8s-8-3.589-8-8s3.589-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m5 9h-4V7h-2v4H7v2h4v4h2v-4h4z"
              />
            </svg>
          }
          title="Agregar Vehículo"
          color="primary"
          onClick={handleAddVehicle}
        />
        <Button
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 48 48"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="4"
              >
                <path
                  stroke-linejoin="round"
                  d="M8 15V6a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v36a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-9"
                />
                <path d="M31 15h3m-6 8h6m-6 8h6" />
                <path
                  stroke-linejoin="round"
                  d="M4 15h18v18H4zm6 6l6 6m0-6l-6 6"
                />
              </g>
            </svg>
          }
          title="Descargar reporte"
          color="success"
          onClick={() => {}}
        />
      </div>
      <VehicleTable
        data={data}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
