import { EventEmitter, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Config } from '../config';
import { LoginModel } from '../models/login';
import { User } from '../models/user';
import { RegisterModel } from '../models/register';


@Injectable()
export class AuthService {
  private _signedInUser!: User;

  private loginUrl = Config.getEnvVariable('loginUrl');
  private registerUrl = Config.getEnvVariable('registerUrl');

  private ptTokenCookieName = Config.getVariable('CookiesNames_Token');
  private ptUserIdCookieName = Config.getVariable('CookiesNames_UserId');
  private ptNameCookieName = Config.getVariable('CookiesNames_Name');

  constructor(private cookieService: CookieService,
    private http: HttpClient,
    private router: Router){}

  public signIn(loginModel: LoginModel) {
    this.http.post(this.loginUrl, loginModel)
    .subscribe(
        (userData: any) => {
            this._signedInUser = new User(
                userData.id,
                userData.username,
                userData.token,
            );

            // Load the permissions on sucessful login
            // this.permissionsManager.initUserPermissions(userData.Permissions);

            this.setCookie(userData);
            // this.saveToken(userData.token);

        },
        (error) => {
        }
    );
  }

  public signOut() {
    localStorage.removeItem('token');
    this.cookieService.remove(this.ptUserIdCookieName);
    this.cookieService.remove(this.ptNameCookieName);
    this.cookieService.remove(this.ptTokenCookieName);

    
    this._signedInUser = {} as User;

    this.router.navigate(['login']);
  }

  get signedInUser(): User {
    if (!this._signedInUser) {
        const userId = this.cookieService.get(this.ptUserIdCookieName);
        const name = this.cookieService.get(this.ptNameCookieName);
        const token = this.cookieService.get(this.ptTokenCookieName);
       
        if (userId && token) {
            this._signedInUser = new User(parseInt(userId, 10),
                                          name,
                                          token
                                          );
        }
    }

    return this._signedInUser;
  }

  private setCookie(userData: any) {

    // console.log(userData);

    const cookieExpirationDate = new Date();
    cookieExpirationDate.setFullYear(cookieExpirationDate.getFullYear() + 1);
    const cookieOptions = {
        expires: cookieExpirationDate
    };
    
    this.cookieService.put(this.ptUserIdCookieName, userData.id, cookieOptions);
    this.cookieService.put(this.ptNameCookieName, userData.username, cookieOptions);
    this.cookieService.put(this.ptTokenCookieName, userData.token, cookieOptions);

  }

  getToken() {
    let token = this.cookieService.get(this.ptTokenCookieName)
    return token
  }

//   saveToken(token: any) {
//     localStorage.setItem('token', token)
//   }

  saveSettings(settings: any) {
    localStorage.setItem('settings', JSON.stringify(settings));
  }

  public get getSettings() {
    let settings = localStorage.getItem('settings') as string;

    return JSON.parse(settings);
  }

  public register(registerModel: RegisterModel) {
    this.http.post(this.registerUrl, registerModel)
    .subscribe(
        (userData: any) => {

            this._signedInUser = new User(
                userData.id,
                userData.username,
                userData.token,
            );

            // Load the permissions on sucessful login
            // this.permissionsManager.initUserPermissions(userData.Permissions);

            this.setCookie(userData);
            // this.saveToken(userData.token)

        },
        (error) => {
          // console.log(error);
          
        }
    );
  }
}