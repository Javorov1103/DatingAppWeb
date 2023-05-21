import { Photo } from "./photo"

export class User {
    id: number
    username: string
    gender: string
    dateOfBirth?: Date
    introduction?: string
    lookingFor?: string
    country?: string
    city?: string
    interests?: string
    isUserLiked?:boolean
    photos: Photo[]
    token?: string
    password?: string

    /**
     *
     */
    constructor(id: number ,username: string,  token: string) {
        this.id = id
        this.username = username;
        this.token = token
    }
}