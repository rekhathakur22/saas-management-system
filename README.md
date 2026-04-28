# 🚀 SaaS Management System - Backend

A scalable backend system for managing SaaS subscriptions within an organization.
Built using the MERN stack principles, this project helps track tools, manage users, monitor costs, and generate insights.

---

# 📌 Features

## 🔐 Authentication & Authorization

* User registration & login
* JWT-based authentication
* Role-based access control (Admin / Employee)

---

## 👤 User Management

* Create and manage users
* Assign SaaS tools to employees
* View user-specific SaaS usage

---

## 📦 SaaS Management

* Add SaaS tools (name, cost, billing cycle, renewal date)
* Track subscription details
* Link SaaS tools to users

---

## 📊 Analytics Dashboard APIs

* Total annual SaaS cost calculation
* Monthly vs yearly cost breakdown
* User-wise SaaS usage insights

---

## 🧠 Advanced Features

* Detect unused SaaS subscriptions
* Identify upcoming renewals (next 7 days)

---

# 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (Authentication)
* bcrypt.js (Password hashing)

---

# 📁 Project Structure

backend/
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
├── utils/
└── server.js

---

# ⚙️ Environment Variables

Create a `.env` file in root:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

---

# 🚀 Installation & Setup

```bash
# Clone repo
git clone <your-repo-url>

# Navigate to backend
cd backend

# Install dependencies
npm install

# Run server
npm run dev
```

---

# 📡 API Endpoints

## 🔐 Auth Routes

* POST /api/auth/register
* POST /api/auth/login
* GET /api/auth/me (Protected)

---

## 👤 User Routes

* POST /api/users/assign (Admin only)
* GET /api/users/:id (Get user with assigned SaaS)

---

## 📦 SaaS Routes

* POST /api/saas (Admin only)
* GET /api/saas/total-cost
* GET /api/saas/cost-breakdown
* GET /api/saas/user-usage

---

## 🧠 Advanced Routes

* GET /api/saas/unused
* GET /api/saas/renewals

---

# 🔐 Authentication

Pass JWT token in headers:

```
Authorization: Bearer YOUR_TOKEN
```

---

# 🧠 Key Concepts Implemented

* REST API Design
* JWT Authentication
* Role-Based Authorization
* MongoDB Relationships (User ↔ SaaS)
* Data Aggregation & Analytics
* Middleware Architecture

---

# 🎯 Future Improvements

* Email notifications for renewals
* Cron jobs for automated alerts
* Pagination & filtering
* Frontend dashboard (React)
* SaaS usage tracking analytics
