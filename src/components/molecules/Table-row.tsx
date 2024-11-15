import Image from "next/image";
import { TableCell } from "../atoms/Table-cell";
import { VehicleActions } from "./Button-actions";

interface TableRowProps {
  vehicle: {
    photo?: string;
    brand: string;
    model: string;
    year: string;
    plate: string;
  };
}

export const TableRow = ({ vehicle }: TableRowProps) => (
  <tr className="border-b">
    <TableCell
      content={
        <Image
          src={vehicle.photo || "/default-image.jpg"}
          alt="Foto del vehículo"
          width={50}
          height={50}
        />
      }
    />
    <TableCell content={vehicle.brand} />
    <TableCell content={vehicle.model} />
    <TableCell content={vehicle.year} />
    <TableCell content={vehicle.plate} />
    <TableCell content={<VehicleActions />} />
  </tr>
);
