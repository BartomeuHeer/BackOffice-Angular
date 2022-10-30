import { User } from "./user.interface"

export interface Vehicle{
    model: String,
	brand: String,
	year: Date,
	owner: User,
	seats: Number,
	licencePlate: String,
	insurance: {
		isValid: Boolean,
		docPicture:String
	}
}
