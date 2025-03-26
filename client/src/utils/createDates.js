const createDates = () => {
    const days = [];
  
    const week = 7;
  
    let currentDate = new Date();
  
    let newDate = new Date(currentDate);
  
    for (let i = 0; i < week; i++) {
      newDate.setDate(currentDate.getDate() + i);

      let dateMonth = newDate.getMonth() + 1;
      let dateDate = newDate.getDate();
      let dateDay = newDate.toLocaleString("en-us", { weekday: "long" });
      let dateShort = dateDay.substring(0, 3);
  
      let dateObj = {
        month: dateMonth,
        day: dateDate,
        weekday: dateDay,
        dayShort: dateShort,
      };
  
      days.push(dateObj);
    }
  
    
    return days;
  };
  
  export default createDates;