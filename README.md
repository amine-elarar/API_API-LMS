# API_API-LMS

# LMS API

Backend API for a Learning Management System.

## Technologies

- Node.js
- Express
- MongoDB
- Mongoose

## Installation

```bash
npm install
```

Create `.env`:

```env
MONGO_URI=your_mongodb_uri
PORT=3000
```

Run:

```bash
node src/server.js
```

## Endpoints

- `GET /courses`
- `GET /courses/:id`
- `GET /courses/:id/modules`
- `GET /modules/:id/resources`

## Swagger

`http://localhost:3000/api-docs`