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
    photos: Photo[]
}