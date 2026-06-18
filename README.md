# 🚀 Event Registration API

A RESTful backend API built using **Node.js, Express.js, MongoDB Atlas, and Mongoose** for managing events and user registrations.  
This project includes **Swagger API documentation**, deployed backend, and full event-registration functionality.

---

## ✨ Features

- Create events
- View all events
- Filter events by location
- Filter events by date
- Register users for events
- Prevent duplicate registrations
- View event-specific registrations
- MongoDB Atlas integration
- REST API deployment on Render
- Swagger API documentation

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Swagger (API Documentation)
- Render (Deployment)

---

## 📡 API Endpoints

### ➕ Create Event
`POST /api/events`

---

### 📄 Get All Events
`GET /api/events`

#### Optional Query Parameters:
- location
- date

Example:
```
GET /api/events?location=Delhi
```

---

### 🧑‍🤝‍🧑 Register User for Event
`POST /api/events/:id/register`

Prevents duplicate registrations for the same event.

---

### 📊 Get Event Registrations
`GET /api/events/:id/registrations`

Returns all users registered for a specific event.

---

## 📘 Swagger API Documentation

Interactive API documentation is available via Swagger UI:

👉 https://event-registrations-rjl2.onrender.com/api-docs

Features:
- Try API endpoints directly from browser
- View request/response schemas
- Understand API structure without external tools

---

## 🌐 Deployment

Live API Base URL:
👉 https://event-registrations-rjl2.onrender.com

---

## ⚙️ Installation & Setup

### 1. Clone repository
```bash
git clone <repository-url>
cd event-registration-api
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create `.env` file
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 4. Run server
```bash
npm run dev
```

---

## 📁 Project Structure (Optional but recommended)

```
src/
│── models/
│── routes/
│── config/
│── server.js
```

---

## 👨‍💻 Author

**Ambika Raj**  
Software Developer Intern

---

## ⭐ Future Improvements

- User authentication (JWT)
- Event categories & tags
- Pagination for events
- Email confirmation on registration
- Rate limiting & security middleware
```
