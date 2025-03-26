import { DELETE_BOOKING } from "../../utils/mutations";
import { toast } from "react-toastify";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import React, { useEffect } from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import "./profile.css";

const Profile = () => {
    const { data, refetch: refetchUser } = useQuery(QUERY_ME);
    const [deleteBooking, { error }] = useMutation(DELETE_BOOKING);
    let user;
  
    if (data) {
      user = data.user;
    }
  
    useEffect(() => {
      function onfocus() {
        refetchUser();
      }
  
      onfocus();
  
      window.addEventListener("focus", onfocus);
  
      return () => window.removeEventListener("focus", onfocus);
    }, []);
  
    const handleDeleteBooking = async (bookingId) => {
      if (window.confirm("Are you sure want to delete the booking?")) {
        try {
          await deleteBooking({
            variables: {
              bookingId,
            },
          });
  
          toast.info("Booking deleted successfully!",{position: "top-center", autoClose: 3000, closeOnClick: true, pauseOnHover: false});
  
          refetchUser();
        } catch (error) {
          toast.error("Something went wrong while deleting booking",{position: "top-center", autoClose: 3000, closeOnClick: true, pauseOnHover: false});
          console.error(error);
        }
      }
    };

    return (
      <>
        {Auth.loggedIn() ? (
          
    <div className="container mx-auto p-8"> 
    <h1 className="h1 text-5xl font-bold text-center mb-8">Your Profile</h1>
    {user ? (
      <div className="bg-white p-6 rounded-lg shadow-md border-4 border-blue-800">
        <h2 className="h2 text-3xl font-semibold mb-4">Personal Information</h2>
        <div className="mb-6">
          <p className="text-lg font-medium">First Name: {user.firstName}</p>
          <p className="text-lg font-medium">Last Name: {user.lastName}</p>
          <p className="text-lg font-medium">Email: {user.email}</p>
        </div>

        <h3 className="h3 text-2xl font-semibold mb-4">Heres Your Bookings</h3>
        {user.bookings.length > 0 ? (
          user.bookings.map((booking, index) => (
            <div
              key={booking._id}
              className="booking-cell bg-green-100 p-4 rounded-lg shadow-sm mb-4 border border-green-800 flex justify-between items-center"
            >
              <div className="book-text">
                <p className="text-lg font-semibold text-blue-800">
                  Booking {index + 1} with: Andres Zuniga
                </p>
                <p className="text-lg">
                  Date: {booking.bookedDay}/{booking.bookedMonth}
                </p>
                <p className="text-lg">Time: {booking.timeSlot}</p>
              </div>
              <button
                onClick={() => handleDeleteBooking(booking._id)}
                className="delete-but bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-lg text-gray-500">No bookings found.</p>
        )}
      </div>
    ) : (
      <p className="text-lg text-center text-gray-500">Loading profile...</p>
    )}
  </div>
        ) : (
          <h1 className="text-center h-12 mt-24 text-3xl">Ohhh No! Please login to access your booking calendar! {' '}
            <Link to="/login" className="font-bold">login</Link> or <Link to="/signup" className="font-bold">signup.</Link>
          </h1>
        )}
      </>
    );
};

export default Profile;