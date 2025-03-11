# book-search-engine

  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

    A MERN application that allows users to search for books using Google APIs, and save those books to a list.
  
## Table of Contents

* [Description](#description)
* [Dependencies](#dependencies)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Questions](#questions)

## Dependencies

  This project relies on the following dependencies:

* **Express**: Used as the core web server to handle API requests from the React client, routing GraphQL queries, and managing middleware for authentication and authorization.
* **Mongoose**: Defines the data models (schemas) for User and Book collections in MongoDB, facilitating data validation and interaction with the database for user authentication, book management, and data retrieval via GraphQL.
* **GraphQL**: Implemented to provide a flexible API endpoint for the React client, allowing it to efficiently fetch and mutate user and book data based on specific query requirements.
* **Dotenv**: Loads environment variables from a .env file to securely manage sensitive information, such as database connection strings and JWT secrets, ensuring they are not exposed in the codebase.
* **MongoDB**: Stores all persistent data, including user accounts, book information, and any other application-specific data models defined using Mongoose.
* **Bcrypt**: Securely hashes user passwords during registration and authentication, protecting user credentials from unauthorized access.
* **JWT**: Generates and verifies JWTs for user authentication, ensuring that only authorized users can access protected API routes and resources.
* **Bootstrap**: Provides the foundational CSS framework for styling the user interface, ensuring a consistent and responsive design across different devices.
* **React**: Builds the interactive client-side application, consuming the GraphQL API to display and manage book and user data, and providing a dynamic user experience.
* **Apollo Client**: Manages the communication between the React client and the GraphQL API, handling data fetching, caching, and state management to optimize performance and simplify data interactions.

## Installation

**Prerequisites:**

* Node.js and npm (or yarn) installed.
* MongoDB installed.

**Steps:**

1. Clone this repository
2. `cd` into the project folder
3. Install the dependencies by runnning `npm install` in the command line
4. `npm run build` to build the application
4. `npm run start:dev` to test the application locally
5. `npm start` to start the production ready application

## Usage

![Walkthrough]

Application is deployed on [Render]

### Core Functionality

* Search for books
* Save books to a users list
* Create a new user
* Login as an existing user
* Remove saved books



## License

  This project is licensed under MIT. For more information, see (<https://opensource.org/licenses/MIT>)

## Questions

  **GitHub**: [nolangrossi](https://github.com/nolangrossi)

  If you have any questions, please contact me at: <nolangrossi6@gmail.com>
  