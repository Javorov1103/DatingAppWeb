import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class LikesService {

   

    constructor(private http: HttpClient){

    }

    public likeUser(likerId: number, likeeId: number) {

        let like = { likerId, likeeId}

        return this.http.post(`https://localhost:5001/likes`,like)
    }

    public deleteLike(likerId: number, likeeId: number): Observable<any> {
        let params = new HttpParams()
        params = params.append('likerId', likerId.toString())
        params = params.append('likeeId', likeeId.toString())

      return this.http.delete(`https://localhost:5001/likes`,{params: params})
    }

}