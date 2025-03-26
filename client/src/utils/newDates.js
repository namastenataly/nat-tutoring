export default function loadNewWeeks(dates, direction = 1) {
    try {
      return dates.map((dateObj) => {
        const [day, month] = dateObj.date.split("/");
        const parsedDay = parseInt(day);
        const parsedMonth = parseInt(month) - 1; 
  
        // new Date object
        const currentDate = new Date(2024, parsedMonth, parsedDay);
  
       
        currentDate.setDate(currentDate.getDate() + 7 * direction);
  
        // new day and month
        const newDay = currentDate.getDate();
        const newMonth = currentDate.getMonth() + 1; 
  
      
        const formattedDate = `${newDay}/${newMonth}`;
  
        return { date: formattedDate };
      });
    } catch (error) {
      console.error("Error generating new dates:", error);
      return dates; 
    }
  }