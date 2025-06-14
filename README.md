# 🛒 My Ecomm Backend Project

This is a Node.js-based backend for an E-commerce platform. It handles user authentication, category management, and is built using Express and MongoDB.

---

## 📁 Project Structure
```bash
my-ecomm-backend/
├── config/
├── controllers/
│   ├── auth.controller.js
│   └── category.controller.js
├── middlewares/
│   ├── auth.mw.js
│   └── category.mw.js
├── models/
│   ├── user.model.js
│   └── category.model.js
├── routes/
│   ├── auth.route.js
│   └── category.route.js
├── server.js
├── package.json
├── package-lock.json
```
---

## ⚙️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Bcrypt (for password hashing)
- Dotenv (for environment variables)
---

## 🚀 Getting Started

### 1. Clone the repository

git clone https://github.com/your-username/my-ecomm-backend.git
cd my-ecomm-backend


### 2. Install dependencies

npm install


### 3. Configure Environment Variables

Create a `.env` file in the root directory and add:
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


### 4. Run the server

node server.js

The server will start on: `http://localhost:8000`

---

## 📌 API Endpoints

### 🔐 Auth Routes

- `POST /ecomm/v1/auth/signup` – Register a new user
- `POST /ecomm/v1/auth/login` – Login user

### 📁 Category Routes

- `POST /ecomm/v1/category/` – Create a new category
- `GET /ecomm/v1/category/` – Get all categories

---

## ✅ Features

- JWT-based authentication
- Password encryption with Bcrypt
- Role-based access
- Modular folder structure
- Custom middleware

---

## ✍️ Author

**Nauman Hussain**  
Backend Developer | CSE Student  
[LinkedIn](
The server will start on: `http://localhost:8000`

---

## 📌 API Endpoints

### 🔐 Auth Routes

- `POST /ecomm/v1/auth/signup` – Register a new user
- `POST /ecomm/v1/auth/login` – Login user

### 📁 Category Routes

- `POST /ecomm/v1/category/` – Create a new category
- `GET /ecomm/v1/category/` – Get all categories

---

## ✅ Features

- JWT-based authentication
- Password encryption with Bcrypt
- Role-based access
- Modular folder structure
- Custom middleware

---

## ✍️ Author

**Nauman Hussain**  
Backend Developer | CSE Student  
[LinkedIn](www.linkedin.com/in/nauman-hussain-a89297262)




