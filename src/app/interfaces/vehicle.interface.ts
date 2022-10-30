import { User } from "./user.interface"

export interface Vehicle{
    model: String,
	brand: String,
	year: Date,
	owner: {
		type: User
	},
	seats: Number,
	licencePlate: String,
	insurance: {
		isValid: Boolean,
		docPicture:String
	}
}
