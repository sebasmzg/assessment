export interface ILoginResponse {
    statusCode: number;
    message:    string;
    data:       Data;
}

export interface Data {
    access_token: string;
    user:         IUser;
}

export interface IUser {
    email: string;
    id:    number;
}