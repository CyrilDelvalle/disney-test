import Hostel from "../interfaces/Hostel";
import Show from "../interfaces/Show";
import getDaysBetweenStartDateAndEndDate from "./getDaysBetweenStartDateAndEndDate";

const getTotal = (hostels: Hostel[], shows: Show[], startDate: Date, endDate: Date): number => {
    const nbDays = getDaysBetweenStartDateAndEndDate(startDate, endDate);
    let hostelsPrice = 0;
    let showsPrice = 0;

    if(hostels.length) {
        hostelsPrice = hostels.reduce((total, item) => item.price + total, 0);
    }

    if(shows.length) {
        showsPrice = shows.reduce((total, item) => item.price + total, 0);
    }

    return nbDays * (hostelsPrice + showsPrice)
}

export default getTotal;