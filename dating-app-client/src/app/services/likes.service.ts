import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";
import { Config } from "../config";

@Injectable()
export class LikesService {

   

    constructor(private http: HttpClient, private Config: Config){

    }

    public likeUser(likerId: number, likeeId: number) {

        let like = { likerId, likeeId}

        return this.http.post(Config.getEnvVariable('likesUrl'),like)
    }

    public deleteLike(likerId: number, likeeId: number): Observable<any> {
        let params = new HttpParams()
        params = params.append('likerId', likerId.toString())
        params = params.append('likeeId', likeeId.toString())

      return this.http.delete(Config.getEnvVariable('likesUrl'),{params: params})
    }

}