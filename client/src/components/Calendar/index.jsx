import createDates from "../../utils/createDates";
import React, { useEffect, useState } from "react";
import "./calendar.css";
import { Link } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { SAVE_BOOKING } from "../../utils/mutations";
import { QUERY_ME, QUERY_BOOKINGS } from "../../utils/queries";
import { toast } from "react-toastify";
import Auth from "../../utils/auth";

const days = createDates();

const timeslots = [
  {
    id: 1,
    time: "8:00 AM",
    shortTime: "8am",
  },
  {
    id: 2,
    time: "9:00 AM",
  },
  {
    id: 3,
    time: "10:00 AM",
  },
  {
    id: 4,
    time: "11:00 AM",
  },
  {
    id: 5,
    time: "12:00 PM",
  },
  {
    id: 6,
    time: "1:00 PM",
  },
  {
    id: 7,
    time: "2:00 PM",
  },
  {
    id: 8,
    time: "3:00 PM",
  },
  {
    id: 9,
    time: "4:00 PM",
  },
  {
    id: 10,
    time: "5:00 PM",
  },
  {
    id: 11,
    time: "6:00 PM",
  },
  {
    id: 12,
    time: "7:00 PM",
  },
];

const NewCalendar = () => {
  const [saveBooking, { error }] = useMutation(SAVE_BOOKING);

  const {
    data: bookingsData,
    refetch: refetchBookings,
    loading: loadingBookings,
  } = useQuery(QUERY_BOOKINGS);
  const { data } = useQuery(QUERY_ME);
  let user;

  if (data) {
    user = data.user;
  }


  useEffect(() => {
    function onfocus() {
      refetchBookings();
    }

    onfocus()

    window.addEventListener("focus", onfocus);

    return () => window.removeEventListener("focus", onfocus);
  }, []);

  const isBooked = React.useCallback(
    (day, month, timeSlot) => {
      const foundBooking = bookingsData?.bookings.find(
        (booking) =>
          booking.bookedDay === String(day) &&
          booking.bookedMonth === String(month) &&
          booking.timeSlot === String(timeSlot)
      );
      if (foundBooking) return true;
      return false;
    },
    [bookingsData]
  );

  const getBookedColor = React.useCallback(
    (day, month, timeSlot) => {
      const foundBooking = isBooked(day, month, timeSlot);
      if (foundBooking) return "bg-red-900 text-red-900 hover:red-900";
    
      else if (!foundBooking) return "bg-zinc-700 text-white";
      return ``;
    },
    [bookingsData, isBooked]
  );

  const handleClick = async (event) => {
    if (loadingBookings) return;

    let bookedMonth = event.target.getAttribute("data-month");
    let bookedDay = event.target.getAttribute("data-day");
    let timeSlot = event.target.id;
    let userId = user._id;

    try {
      const { data } = await saveBooking({
        variables: {
          userId: userId,
          bookedDay: bookedDay,
          bookedMonth: bookedMonth,
          timeSlot: timeSlot,
        },
      });

      toast.success("Booked successfully!",{position: "top-center", autoClose: 3000, closeOnClick: true, pauseOnHover: false});

      refetchBookings();
    } catch (error) {
      toast.error("Something went wrong, while creating booking",{position: "top-center", autoClose: 3000, closeOnClick: true, pauseOnHover: false});
      console.error(error);
    }
  };


  return (
    <>
      {Auth.loggedIn() ? (
        <>
        <div className="w-[100vw] h-[75vh] bg-blue-100 relative overflow-hidden mx-auto ">
          <h1 className="text-5xl font-bold text-center pt-8">Schedule a Booking</h1>
           <section className="flex flex-col justify-start align-start bg-gray-200 border border-black -800 border-2 w-90 m-8 rounded-xl h-auto">
           <div className="info-head flex flex-row items-center h-28 rounded-xl text-black ml-5 w-100">
             <span className="header-text font-bold text-center">
               Tutors time of availability:
             </span>
             <span className="tutor-name basis-full ml-3 font-bold text-center">
               Tutor Name : 
             </span>
           </div>
           <div className="dates-box flex flex-row items-center h-28 bg-blue-800">
             <div className="basis-12"></div>
   
             {days.map((day) => {
               return (
                 <div className="flex-1 grow text-center" key={day.day}>
                   <span className="full-day font-bold text-white">{day.weekday}</span>
                   <span className="short-day font-bold text-white">{day.dayShort}</span> 
                   <br />
                   <span className="dates text-white">
                     {day.day}/{day.month}
                   </span>
                 </div>
               );
             })}
             <div className="basis-12"></div>
           </div>
           <div className="flex flex-col h-full bg-gray-200 w-100 pb-6 rounded-bl-xl rounded-br-xl">
             {timeslots.map((timeslot) => (
               <div key={timeslot.id} className="flex flex-row w-full">
                 <div className="side-space basis-12"></div>
   
                 {days.map((day) => {
                   return (
                     <div
                       key={day.day}
                       className={`grid-cell flex-1 grow text-center rounded-xl h-10 m-1 hover:bg-zinc-400 ${getBookedColor(
                         day.day,
                         day.month,
                         timeslot.time
                       )}`}
                     >
                       <button
                         id={timeslot.time}
                         data-month={day.month}
                         data-day={day.day}
                         onClick={(event) => {
                           if (isBooked(day.day, day.month, timeslot.time))
                             return toast.error("Already booked!",{position: "top-center"});
                           handleClick(event);
                         }}
                         className="button-cells w-full h-full"
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
         </>
      ) : (
          <h1 className="text-center h-12 mt-24 text-3xl">Ohh No! Please login to access your booking calendar. {' '}
            <Link to="/login" className="font-bold">login</Link> or <Link to="/signup" className="font-bold">signup.</Link>
          </h1>
      )}
     </>
  );
};

export default NewCalendar;