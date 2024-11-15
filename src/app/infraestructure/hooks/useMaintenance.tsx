"use client";

import { useEffect, useState } from "react";
import { IMaintenanceResponse } from "@/app/core/application/dto/vehicles/maintenance/maintenance-response.dto";
import { useSession } from "next-auth/react";
import { CustomSession } from "@/app/api/auth/[...nextauth]/route";

export const useMaintenance = (id: string) => {
  const [maintenanceData, setMaintenanceData] = useState<IMaintenanceResponse[] | null>(null);
  const { data: session } = useSession() as { data: CustomSession };
const token = session.user.token

  const fetchMaintenanceData = async () => {
    const response = await fetch(`/api/vehicle/maintenance/${id}`,{
        method: "GET",
    });
    if (!response.ok) {
      console.error("Error getting maintenance data", response.statusText);
      return;
    }
    const data = await response.json();
    setMaintenanceData(data.datum);
  };

  useEffect(() => {
    fetchMaintenanceData();
  }, [id]);

  return {
    maintenanceData,
  };
};
