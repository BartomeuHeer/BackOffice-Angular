import { User } from "./user.interface"

export interface Rating{
    author: User,
    comment: String,
    dest: User,
    rate: Number,
    dateOfEntry: Date
}
