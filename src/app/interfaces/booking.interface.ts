import { Point } from "./point.interface"
import { Route } from "./route.interface"
import { User } from "./user.interface"

export interface Booking{
    route: {
         type: Route
        },
	user: {
		type: User
	},
	dayOfCreation: Date,
	price: Number,
	cancelPolicy:{
		completRefund:{
			cancelDate: Date,
			cancelPrice: Number
		},
		halfRefund: {
			cancelDate: Date,
			cancelPrice: Number
		},
		noRefund:{
			cancelDate: Date,
			cancelPrice: Number
		}
	},
	selectedStopPoint:{type: Point}
}
