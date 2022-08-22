const differenceBetweenDatesInDays = (startDate, endDate) => {
    const newStartDate= new Date(startDate);
    const newEndDate=new Date(endDate);
    const one_day = 1000*60*60*24;
    let result
    result = Math.ceil((newEndDate.getTime()-newStartDate.getTime())/(one_day))
    if (result < 0 ) {return 0}
    return result

}

export default differenceBetweenDatesInDays;