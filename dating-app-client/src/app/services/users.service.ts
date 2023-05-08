import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { User } from "../models/user";
import { Observable } from "rxjs";

@Injectable()
export class UsersService {

    constructor(private http: HttpClient){

    }

    public getAll() {
       return this.http.get<User[]>('https://localhost:5001/users')
    }

    public getUserById(userId: number): Observable<User> {
        return this.http.get<User>(`https://localhost:5001/users/${userId}`);
    }

}