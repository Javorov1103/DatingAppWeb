import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {

    constructor(private http: HttpClient){

    }

    public getAll() {
       return this.http.get<any[]>('https://localhost:5001/users')
    }

    public getUserById() {

    }

}