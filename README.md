# Humble Superhero API

## Introduction

The **Humble Superhero API** is a simple REST API designed to celebrate the unique abilities and humility of our team members. This API allows users to add superheroes with their name, superpower, and humility score, and fetch a sorted list based on their humility.

## Features

- Add a new superhero with name, superpower, and humility score (1-10).
- Retrieve a list of superheroes sorted by humility score in descending order.
- Input validation to ensure correct data entry.
- Basic unit testing using Jest.
- Error handle with notifications.

## Tech Stack

- **Backend:** Node.js
- **Storage:** In-memory database (array)
- **Testing:** Jest (for basic endpoint testing)

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/barkinrl/Superhero-API.git
   cd <your-folder>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```
   The API will be available at `http://localhost:3001` (or your configured port).

## API Endpoints

### 1. Add a Superhero

- **Endpoint:** `POST /superheroes`
- **Request Body:**
  ```json
  {
    "name": "Super Dev",
    "superpower": "Bug Fixing",
    "humility": 9
  }
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "name": "Super Dev",
    "superpower": "Bug Fixing",
    "humility": 9
  }
  ```

### 2. Get Superheroes List

- **Endpoint:** `GET /superheroes`
- **Response:**
  ```json
  [
    {
      "id": 1,
      "name": "Super Dev",
      "superpower": "Bug Fixing",
      "humility": 9
    },
    {
      "id": 2,
      "name": "Code Master",
      "superpower": "Refactoring",
      "humility": 8
    }
  ]
  ```

## Testing

To run the Jest tests:

```sh
npm test
```

## Collaboration & Future Improvements

### How I'd Collaborate with a Teammate

- Discuss API design and improvements in a shared document before implementing changes.
- Use GitHub issues to track features and bug fixes.
- Implement code reviews before merging changes.
- Maintain clear and concise documentation.

### If I Had More Time

- Implement database storage (e.g., PostgreSQL, MongoDB) instead of an in-memory array.
- Add authentication and authorization using JWT.
- Improve test coverage for edge cases.
- Deploy the API to a cloud service (e.g., AWS, Vercel).
- More CRUD operations could be added but some of them requires ID (so array is not an option maybe hashmap could be use)

## Conclusion

This project showcases a simple yet functional API with good coding practices, validation, and a foundation for future expansion. Feel free to contribute and make the Humble Superhero API even better!

stay metal \m/
