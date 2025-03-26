import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const SAVE_BOOKING = gql `
  mutation saveBooking(
    $userId: String!,
    $bookedDay: String!,
    $bookedMonth: String!, 
    $timeSlot: String!
  ) {
    saveBooking(
      userId: $userId,
      bookedDay: $bookedDay,
      bookedMonth: $bookedMonth,
      timeSlot: $timeSlot
    ) {
      _id
      userId
      bookedDay
      bookedMonth
      timeSlot
    }
  }
`;

export const DELETE_BOOKING = gql `
  mutation deleteBooking(
    $bookingId: String!
  ) {
    deleteBooking(
      bookingId: $bookingId
){
      _id   
}
  }
`;
