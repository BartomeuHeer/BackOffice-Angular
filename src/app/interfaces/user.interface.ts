import { Booking } from "./booking.interface";
import { Rating } from "./rating.interface";
import { Route } from "./route.interface";

export interface User {
    _id: string;
    name: string;
    password: string;
    email: string;
    birthday: Date,
	route: [{
		type: Route
	}],
	ratings: {
		type: Rating
	},
	booking: [{
		type: Booking
	}]
}