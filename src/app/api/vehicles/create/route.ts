import { VehicleServices } from "@/app/infraestructure/services/vehicles.services";
import { NextResponse } from "next/server";


export const POST = async (req: Request) => {
  
  try {
    const data = await req.formData();
    console.log("Request data: ", data);
    const vehicles = new VehicleServices();
    const result = await vehicles.createVehicle(data);
    console.log("Result: ", result);
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error("Error creating user: ", error);
    return new NextResponse(
      JSON.stringify({ message: "Error creating user" }),
      { status: 500 }
    );
  }
};
