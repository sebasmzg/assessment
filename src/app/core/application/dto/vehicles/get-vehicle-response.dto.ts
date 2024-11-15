export interface IGetVehicle {
    statusCode: number;
    message:    string;
    data:       VehicleDetails;
}

export interface VehicleDetails {
    id:           number;
    make:         string;
    model:        string;
    year:         number;
    licensePlate: string;
    photo:        string;
}
