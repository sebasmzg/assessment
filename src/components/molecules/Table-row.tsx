import Image from "next/image";
import { TableCell } from "../atoms/Table-cell";
import { VehicleActions } from "./Button-actions";
import { IVehicle } from "@/app/core/application/dto/vehicles/vehicles-response.dto";

interface TableRowProps {
  vehicle: IVehicle
}

export const TableRow = ({ vehicle }: TableRowProps) => (
  <tr className="border-b">
    <TableCell
      content={
        <Image
          src={vehicle.photo || "https://images.pexels.com/photos/303349/pexels-photo-303349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
          alt="Foto del vehículo"
          width={50}
          height={50}
        />
      }
    />
    <TableCell content={vehicle.make} />
    <TableCell content={vehicle.model} />
    <TableCell content={vehicle.year} />
    <TableCell content={vehicle.licensePlate} />
    <TableCell content={<VehicleActions itemData={vehicle}/>} />
  </tr>
);
