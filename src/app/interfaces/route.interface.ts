import { Point } from "./point.interface"
import { User } from "./user.interface"


export interface Route{
    name: String,
    creator:{
        type: User
    },
    participants: [{
        type: User
    }],
    startPoint: {
        type: Point,
    },
    endPoint: {
        type: Point,
    },
    stopPoint: [{
        type: Point,
    }],
	dateOfEntry: Date
}
