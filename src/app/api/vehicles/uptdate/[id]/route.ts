import { VehicleServices } from "@/app/infraestructure/services/vehicles.services";
import { NextResponse } from "next/server";

export const PUT = async (req: Request, {params}:{params:{id:string}}) => {
    try {
        console.log("editing project");
        const { id } = params;
        console.log("id", id);
        const data = await req.json();
        console.log("edit data", data);
        const vehicles = new VehicleServices();
        const result = await vehicles.updateVehicle(data, Number(id));
        return NextResponse.json(result, { status: 200 });
    } catch(error) {
        console.error('Error in api route updating service:', error);
        return new NextResponse(JSON.stringify({ message: "Error in api route updating project" }), { status: 500 });
    }
}