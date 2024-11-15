import { PVehicle } from "@/app/core/application/port/vehicles.port";
import { HttpClient } from "../utils";
import { IVehicle, IVehiclesResponse } from "@/app/core/application/dto/vehicles/vehicles-response.dto";
import { IVehiclesRequest } from "@/app/core/application/dto/vehicles/vehicles-request.dto";
import { IVehicleUpdateResponse } from "@/app/core/application/dto/vehicles/vehicles-update-response.dto";
import { IVehicleCreateResponse } from "@/app/core/application/dto/vehicles/vehicles-create-response.dto";
import { VehicleDetails } from "@/app/core/application/dto/vehicles/get-vehicle-response.dto";

export class VehicleServices implements PVehicle {
    private clientHttp: HttpClient;
    private basePath: string = "vehicles";
    
    constructor(){
        this.clientHttp = new HttpClient();
    }

    async getAll(page: number, size: number): Promise<IVehiclesResponse> {
        return await this.clientHttp.get(`${this.basePath}?page=${page}&size=${size}`);
    }

    async createVehicle(formData: FormData): Promise<IVehicleCreateResponse> {
        return await this.clientHttp.post(this.basePath, formData);
    }

    async updateVehicle(req: IVehicle, id: number): Promise<IVehicleUpdateResponse> {
        return await this.clientHttp.put(this.basePath,id, req);
    }

    async deleteVehicle(id: string) {
        return await this.clientHttp.delete(this.basePath,id);
    }

    async getById(id: string): Promise<VehicleDetails> {
        return await this.clientHttp.getById(this.basePath,id);
    }
}