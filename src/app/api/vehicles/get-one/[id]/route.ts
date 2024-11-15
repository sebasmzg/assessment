import { VehicleServices } from "@/app/infraestructure/services/vehicles.services";
import { NextResponse } from "next/server";

export const GET = async (req: Request, {params}:{params: {id:string}}) => {
    const id = params.id;
    try {
        const vehicles = new VehicleServices();
        const result = await vehicles.getById(id);
        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        console.error("Error getting vehicle: ", error);
        return new NextResponse(
            JSON.stringify({ message: "Error getting vehicle" }),
            { status: 500 }
        );
    }
}