import { environment } from "src/environments/environment";


export class Config {
    public static get baseApiUrl(): string {
        if (!environment.production) {
            // return `${window.location.protocol}//${window.location.hostname}/beautycrm`;
            return 'https://localhost:5001';
        }

        return `${window.location.protocol}//${window.location.hostname}/api`;
    }

    public static getEnvVariable(value: string) {
        const data: any = this.getUrls();

        const apiUrl = this.baseApiUrl + '/';

        return apiUrl + (data[value] ? data[value] : '');
    }

    public static getVariable(value: string) {
        const data: any = {
            CookiesNames_CompanyId: 'PT_CompanyId',
            CookiesNames_CompanyName: 'PT_CompanyName',
            CookiesNames_Token: 'PT_Token',
            CookiesNames_UserId: 'PT_UserId',
            CookiesNames_Name: 'PT_Name',
            CookiesNames_RoleId: 'PT_RoleId'
        };

        return data[value];
    }

    private static getUrls() { 
        return  {
            loginUrl: 'login',
            registerUrl: 'login/register',
            likesUrl: 'likes'
        }
    }
}