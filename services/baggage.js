import Baggage from '../models/baggage.js';
import { find as findTrip} from './trip.js';

export const create = async (data) => {
    await findTrip(data.trip, data.user)
    return Baggage.create(data);
}
       
export const index = async (createTripValidator, userId) => {
    return Baggage.find({ trip: createTripValidator, user: userId });

}


export const remove = async (createBaggageValidator, createTripValidator, userId) => {
    const baggage = await Baggage.find.OneAndDelete({
        _id: baggageId 
    })
}
