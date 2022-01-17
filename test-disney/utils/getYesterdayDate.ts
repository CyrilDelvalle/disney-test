const getYesterdayDate = (date: Date) => {
    date.setDate(date.getDate()-1);

    return date
}

export default getYesterdayDate;