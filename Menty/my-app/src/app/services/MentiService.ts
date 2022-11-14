import axios from "axios";
import { environment } from "../../environments/environment";

export class MentiService{
    static baseUrl = environment.baseUrl

    //Send Post 
    public static post(path:string, obj:any):Promise<any>{
        return axios.post(this.baseUrl + path, obj);
    }
}