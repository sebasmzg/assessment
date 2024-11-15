import { IVehiclesResponse } from "@/app/core/application/dto/vehicles/vehicles-response.dto";
import { VehicleServices } from "@/app/infraestructure/services/vehicles.services";
import { NextResponse } from "next/server";

export const GET = async (req: Request)=>{
    console.log('GET /api/vehicles/get-all');
    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get('page') || '1');
    const size = Number(searchParams.get('size') || '10');
    const vehicles = new VehicleServices();
    try {
        const result: IVehiclesResponse = await vehicles.getAll(page, size);
        return NextResponse.json(result,{status: 200});
    } catch (error) {
        console.error('Error getting projects:', error);
        return new NextResponse(JSON.stringify({ message: "Error getting projects" }), { status: 500 });
    }
}