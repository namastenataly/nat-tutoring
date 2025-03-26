import React, {useState} from 'react';

const timeslots = [
  {
    id: 1,
    time: "8:00",
    shortTime: "8am"
  },
  {
    id: 2,
    time: "9:00",
  },
  {
    id: 3,
    time: "10:00",
  },
  {
    id: 4,
    time: "11:00",
  },
  {
    id: 5,
    time: "12:00",
  },
  {
    id: 6,
    time: "1:00",
  },
  {
    id: 7,
    time: "2:00",
  },
  {
    id: 8,
    time: "3:00",
  },
  {
    id: 9,
    time: "4:00",
  },
  {
    id: 10,
    time: "5:00",
  },
  {
    id: 11,
    time: "6:00",
  },
  {
    id: 12,
    time: "7:00",
  },
];


const Calendar = () => {
  const [selectedCells, setSelectedCells] = useState([]);

  const handleClickCell = (timeslotId, dayIndex) => {
    const cellId = `${timeslotId}-${dayIndex}`;
    setSelectedCells((prevSelectedCells) =>
      prevSelectedCells.includes(cellId)
        ? prevSelectedCells.filter((id) => id !== cellId)
        : [...prevSelectedCells, cellId]
    );
  };

  const availabilityFormHandler = () => {
    const selectedTimeslots = selectedCells.map((cellId) => {
      const [timeslotId, dayIndex] = cellId.split('-').map(Number);
      return {
        timeslot: timeslots.find(slot => slot.id === timeslotId),
        day: daysOfWeek[dayIndex],
      };
    });
    console.log(selectedTimeslots);
  };

  const daysOfWeek = [
    { day: "Monday", shortName: "Mon" },
    { day: "Tuesday", shortName: "Tue" },
    { day: "Wednesday", shortName: "Wed" },
    { day: "Thursday", shortName: "Thu" },
    { day: "Friday", shortName: "Fri" },
    { day: "Saturday", shortName: "Sat" },
    { day: "Sunday", shortName: "Sun" }
  ];

  return (
    <div className="shadow-md w-screen h-screen">
      <section className="calendar-box flex flex-col justify-start align-start bg-gray-300 w-100 m-24 rounded-xl h-auto">
        <div className="info-head flex flex-row items-center h-28 rounded-xl text-black ml-5 w-100">
          <span className="header-text basis-full font-bold">Please specify your availability here:</span>
          <span className="tutor-name basis-full ml-3 flex-1 font-bold">Mitra Ahmadi</span>
          <button className='bg-black h-10 w-44 text-white' onClick={() => availabilityFormHandler()}>Update Availability</button>
        </div>
        <div className="dates-box flex flex-row items-center h-28 bg-blue-800">
          <div className="basis-12"></div>
          {daysOfWeek.map((day, index) => (
            <div className="flex-1 grow text-center" key={index}>
              <span className="full-day font-bold">{day.day}</span>
              <span className="short-day font-bold">{day.shortName}</span>
            </div>
          ))}
          <div className="basis-12"></div>
        </div>
        <div className="flex flex-col h-full bg-gray-400 w-100 pb-6 rounded-bl-xl rounded-br-xl">
          {timeslots.map((timeslot) => (
            <div key={timeslot.id} className="flex flex-row w-full">
              <div className="side-space basis-12"></div>
              {daysOfWeek.map((_, index) => {
                const cellId = `${timeslot.id}-${index}`;
                const isSelected = selectedCells.includes(cellId);
                return (
                  <div
                    key={cellId}
                    className={`grid-cell flex-1 grow text-center rounded-xl h-10 m-1 ${
                      isSelected ? 'bg-sky-900' : 'bg-black'
                    } hover:bg-sky-900`}
                  >
                    <button
                      className="w-full h-full text-white"
                      onClick={() => handleClickCell(timeslot.id, index)}
                    >
                      {timeslot.time}
                    </button>
                  </div>
                );
              })}
              <div className="side-space basis-12"></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};



export default Calendar;