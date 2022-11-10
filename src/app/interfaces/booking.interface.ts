import { Point } from "./point.interface"
import { Route } from "./route.interface"
import { User } from "./user.interface"

export interface Booking{
	_id: string,
    route: Route,
	user: User,
	price: number,
	dayOfCreation: Date,
	cancelPolicy:{
		completRefund:{
			cancelDate: Date,
			cancelPrice: number
		},
		halfRefund: {
			cancelDate: Date,
			cancelPrice: number
		},
		noRefund:{
			cancelDate: Date,
			cancelPrice: number
		}
	},
	selectedStopPoint: string
}
