import { Booking } from "./booking.interface";
import { Rating } from "./rating.interface";
import { Route } from "./route.interface";

export interface User {
    _id: string;
    name: string;
    password: string;
    email: string;
    birthday: Date,
	route: [Route],
	ratings: Rating,
	booking: [Booking]
}