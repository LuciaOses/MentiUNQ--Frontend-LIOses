import { ApiResponse } from "../../interfaces/response/ApiResponce";
import { User } from "../../interfaces/user/User";
import { MentiService } from "../MentiService";

export class AuthService{
    public static async login(obj:User):Promise<ApiResponse>{
        return (await MentiService.post('/login',obj)).data
    }
}