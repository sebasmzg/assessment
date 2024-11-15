import { Metadata } from "../common/metadata";

export interface IVehiclesResponse {
    statusCode: number;
    message:    string;
    data:       IVehicle[];
    metadata:   Metadata;
}

export interface IVehicle {
    id:           number;
    make:         string;
    model:        string;
    year:         string;
    licensePlate: string;
    photo:        string;
}

