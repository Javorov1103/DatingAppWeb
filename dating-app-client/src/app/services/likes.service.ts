import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class LikesService {

    constructor(private http: HttpClient){

    }

    public likeUser(likerId: number, likeeId: number) {

        let like = { likerId, likeeId}

        return this.http.post(`https://localhost:5001/likes`,like)
    }

}