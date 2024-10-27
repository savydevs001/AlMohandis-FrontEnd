import { User } from "../types";

export interface LoginData {
    phone: string;
    password: string;
};

export interface UserResponse {
    message: string;
    token: string;
    user: User;
};