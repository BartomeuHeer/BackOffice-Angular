
import { User } from "./user.interface";

export interface LoginResponse {
    tocken: string,
    user: User
}