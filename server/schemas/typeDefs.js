const typeDefs = `
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    bookings: [Booking]
  }

  type Tutor {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    bookings: [Booking]
  }

  type Booking {
    _id: ID
    userId: ID
    bookedDay: String
    bookedMonth: String
    timeSlot: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
    tutors: [Tutor]!
    tutor(tutorId: ID!): Tutor
    bookings: [Booking]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBooking(userId: String!, bookedDay: String!, bookedMonth: String!, timeSlot: String!): Booking
    deleteBooking(bookingId: String!): Booking
  }
`;

module.exports = typeDefs;