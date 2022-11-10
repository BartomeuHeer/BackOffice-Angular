import { Point } from "./point.interface"
import { User } from "./user.interface"


export interface Route{
    _id: string,
    name: string,
    creator:User,
    participants: [User],
    startPoint: string,
    endPoint: string,
    stopPoint: [string],
	dateOfBeggining: Date
	date: Date
}
