import { VehicleDetails } from "../dto/vehicles/get-vehicle-response.dto"
import { IVehicleCreateResponse } from "../dto/vehicles/vehicles-create-response.dto"
import { IVehiclesRequest } from "../dto/vehicles/vehicles-request.dto"
import { IVehicle, IVehiclesResponse } from "../dto/vehicles/vehicles-response.dto"
import { IVehicleUpdateResponse } from "../dto/vehicles/vehicles-update-response.dto"

export interface PVehicle {
    /**
     * 
     * @param req Es el objeto que contiene los datos necesarios para crear un vehicle
     *  
     */
    createVehicle(formData: FormData): Promise<IVehicleCreateResponse>

    /**
     * 
     * @param id Es el identificador del vehicle
     *  
     */
    deleteVehicle(id: string): Promise<IVehicle>

    /**
     * 
     * @param req Es el objeto que contiene los datos necesarios para actualizar un vehicle
     *  
     */
    updateVehicle(req: IVehicle, id: number): Promise<IVehicleUpdateResponse>

    /**
     * 
     * @param page Es el número de página
     * @param size Es la cantidad de elementos por página
     */
    getAll(page: number, size: number): Promise<IVehiclesResponse>

    /**
     * 
     * @param id Es el identificador del vehicle
     *  
     */
    getById(id: string): Promise<VehicleDetails>
    
}