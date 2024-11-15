"use client";

import { IVehiclesResponse } from "@/app/core/application/dto/vehicles/vehicles-response.dto";
import { EndPointVehicles } from "@/app/core/application/models/vehicles.enum";
import { useEffect, useState } from "react"

export const useVehicles = () => {
    const [data, setData] = useState<IVehiclesResponse | null>(null)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(1)

    const fetchVehicles = async (page: number = 1, size: number = 9) => {
        const response = await fetch(`${EndPointVehicles.get_all}?page=${page}&size=${size}`);
        if(!response.ok){
            console.error("Error getting projects", response.statusText);
            return;
        }
        const data = await response.json();
        setData(data);
        setCurrentPage(data.metadata.currentPage);
        setTotalPages(data.metadata.totalPages);
    }          


    useEffect(()=>{
        fetchVehicles(currentPage);
    },[currentPage])


    return {
        data,
        currentPage,
        totalPages,
        fetchVehicles,
    }
}