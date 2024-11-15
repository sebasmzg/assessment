import { IVehicle } from "@/app/core/application/dto/vehicles/vehicles-response.dto";
import { VehiclesForm } from "../organisms/vehicles/Form-vehicles";

interface CreateVehicleFormProps {
    itemData?: IVehicle;
}

export const CreateVehicleTemplate = ({itemData}: CreateVehicleFormProps) => {
    return (
        <div className="h-full rounded-lg flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <VehiclesForm title="Create Vehicle" submit="Create" itemData={itemData} method="POST"/>
            </div>
        </div>
    );
}