import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
        }
    }`;

export const ADD_USER = gql`
    mutation AddUser($input: UserInput!) {
        addUser(input: $input) {
            token
            user {
            _id
            username
            email
            }
        }
    }`;

export const SAVE_BOOK = gql`
    mutation SaveBook($book: BookInput!) {
        saveBook(book: $book) {
            _id
            bookCount
            savedBooks {
            bookId
            }
        }
    }`;

export const REMOVE_BOOK = gql`
    mutation RemoveBook($bookId: String!) {
        removeBook(bookId: $bookId) {
            username
            bookCount
        }
    }`;