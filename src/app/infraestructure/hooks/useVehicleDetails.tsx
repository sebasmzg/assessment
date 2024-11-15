"use client";

import { useEffect, useState } from "react";
import { EndPointVehicles } from "@/app/core/application/models/vehicles.enum";
import { VehicleDetails } from "@/app/core/application/dto/vehicles/get-vehicle-response.dto";

export const useVehicleDetails = (id: string) => {
  const [vehicleDetails, setVehicleDetails] = useState<VehicleDetails | null>(
    null
  );


  const fetchVehicleDetails = async () => {
    const response = await fetch(`${EndPointVehicles.get_one}/${id}`);
    if (!response.ok) {
      console.error("Error getting vehicle details", response.statusText);
      return;
    }
    const data = await response.json();
    setVehicleDetails(data.data);
  };

  useEffect(() => {
    fetchVehicleDetails();
  }, [id]);

  return {
    vehicleDetails,
  };
};
