import { User } from "./user.interface"

export interface Rating{
    author: {
        type: User
    },
    comment: String,
    dest: {
        type: User
    },
    rate: Number,
    dateOfEntry: Date
}
