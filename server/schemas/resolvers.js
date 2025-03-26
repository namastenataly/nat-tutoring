const { User, Booking, Tutor } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate("bookings");

        return user;
      }
      throw AuthenticationError;
    },
    tutor: async (parent, {tutorId}) => {
      const tutor = await Tutor.findOne({_id: tutorId});

      return tutor;
    },
    tutors: async () => {
      const tutors = await Tutor.find();

      return tutors;
    },
    bookings: async (parent, args, context) => {
      if (context.user) {
        const bookings = await Booking.find({});

        return bookings;
      }

      throw AuthenticationError;
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    saveBooking: async (
      parent,
      { bookedDay, bookedMonth, timeSlot, tutorId },
      context
    ) => {
      if (context.user) {
        const booking = await Booking.create({
          userId: context.user._id,
          // tutorId: tutorId,
          bookedDay: bookedDay,
          bookedMonth: bookedMonth,
          timeSlot: timeSlot,
        });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { bookings: booking },
        });

        return booking;
      }

      throw AuthenticationError;
    },
    deleteBooking: async (parent, { bookingId }, context) => {
      if (context.user) {
        const deletedBooking = await Booking.findByIdAndDelete(bookingId);

        await User.findByIdAndUpdate(context.user._id, {
          $pull: {
            bookings: {
              _id: bookingId,
            },
          },
        });

        return deletedBooking;
      }

      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;