import { authOptions, CustomSession } from "@/app/api/auth/[...nextauth]/route";
import { IMaintenanceResponse } from "@/app/core/application/dto/vehicles/maintenance/maintenance-response.dto";
import { getServerSession } from "next-auth";

export default async function Maintenance  ({id}: {id: string}) {
  const session = (await getServerSession(authOptions)) as CustomSession;
  const resp = await fetch(`https://maintenancesystembc-production.up.railway.app/api/v1/vehicles/${id}/maintenance`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session.user.token}`,
    },
  })

  const result: IMaintenanceResponse = await resp.json();


  return (
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Mileage</th>
                <th>Notes</th>
                <th>Type</th>
            </tr>
        </thead>
        <tbody>
            {result.data.map((maintenance) => (
                <tr key={maintenance.id}>
                    <td>{maintenance.date.toISOString()}</td>
                    <td>{maintenance.mileage}</td>
                    <td>{maintenance.notes}</td>
                    <td>{maintenance.type}</td>
                </tr>
            ))}
        </tbody>
    </table>
  );
};

