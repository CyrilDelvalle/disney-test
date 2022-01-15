const getYesterdayDate = () => {
    const date = new Date();
    date.setDate(date.getDate()-1);

    return date
}

export default getYesterdayDate;