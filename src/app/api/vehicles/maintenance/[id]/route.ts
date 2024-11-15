import { authOptions, CustomSession } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req: Request,{ params }: { params: { id: string } }) => {
  console.log("GET /vehicles/:id/maintenance");
  const id = params.id;
  console.log(id);
  const session = (await getServerSession(authOptions)) as CustomSession;
  if (!session) {
    return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }
  try {
    const response = await fetch(
      `https://maintenancesystembc-production.up.railway.app/api/v1/vehicles/${id}/maintenance`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${session.user.token}`,
        },
      }
    );
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error response from API:", errorText);
      throw new Error(`Error al cargar mantenimientos: ${response.statusText}`);
    }
    const result = await response.json();
    console.log(result);
    return new NextResponse(JSON.stringify(result), {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching vehicle maintenance data:", error);
    return new NextResponse(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
};
