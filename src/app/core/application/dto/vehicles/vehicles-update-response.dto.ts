export interface IVehicleUpdateResponse {
    statusCode: number;
    message:    string;
    data:       IUpdatedVehicle;
}

export interface IUpdatedVehicle {
    id:           number;
    make:         string;
    model:        string;
    year:         number;
    licensePlate: string;
    photo:        string;
}