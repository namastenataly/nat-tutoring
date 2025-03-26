import { gql } from '@apollo/client';

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      firstName
      lastName
      email
      bookings
    }
  }
`;

export const QUERY_ME = gql`
  {
    user {
      _id
      firstName
      lastName
      email
      bookings {
        _id
        userId
        bookedDay
        bookedMonth
        timeSlot
      }
    }
  } 
`;

export const QUERY_BOOKINGS = gql`
 query GetBookings {
    bookings {
        _id
        userId
        bookedDay
        bookedMonth
        timeSlot
      }
  } 
`;

export const QUERY_SINGLE_TUTOR = gql`
  query getSingleTutor($tutorId: ID!) {
    tutor(tutorId: $tutorId) {
      _id
      firstName
      lastName
    }
  }
`;

export const QUERY_ALL_TUTORS = gql`
  query allTutors {
    tutors {
      _id
      firstName
      lastName
    }
  }
`;