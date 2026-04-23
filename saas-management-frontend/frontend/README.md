# 🚀 SaaS Management System – Frontend

A modern React-based frontend application for managing SaaS products, users, subscriptions, and analytics. Designed for scalability, clean architecture, and a smooth user experience.

---

## 📌 Features

- 🔐 User Authentication (Login / Register / Logout)
- 👤 User Dashboard
- 🧾 SaaS Product Management
- 💳 Subscription Management
- 📊 Analytics Dashboard
- 🔒 Protected Routes
- 🌐 REST API Integration
- 📱 Fully Responsive Design

---

## 🛠️ Tech Stack

- React.js  
- React Router DOM  
- Axios  
- Context API / Redux  
- Tailwind CSS / Bootstrap / CSS  
- Chart.js / Recharts  

---

## 📂 Project Structure

## 📂 Project Structure

```bash
frontend/
├── public/
│   └── index.html
│
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page-level components (Login, Dashboard, etc.)
│   ├── context/         # Global state management
│   ├── services/        # API calls (Axios)
│   ├── utils/           # Helper functions
│   ├── routes/          # Protected & public routes
│   ├── App.js           # Main app component
│   └── index.js         # Entry point
│
├── .env                 # Environment variables
├── package.json         # Dependencies & scripts
└── README.md            # Project documentation
```
---

## ⚙️ Installation & Setup

### 1. Clone Repository

git clone https://github.com/your-username/saas-management-frontend.git
cd saas-management-frontend

### 2. Install Dependencies

npm install

### 3. Environment Variables

Create a `.env` file in root:

REACT_APP_API_URL=http://localhost:5000/api

### 4. Run Application

npm start

App runs on:

http://localhost:3000

---

## 🔐 Authentication Flow

- User logs in and receives JWT token  
- Token stored in localStorage  
- Token sent with API requests  
- Protected routes block unauthorized access  

---

## 🔗 API Configuration

import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default API;

---

## 🔒 Protected Routes

import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

---

## 📊 Analytics

Displays:

- Total Users  
- Active Subscriptions  
- Revenue Data  

---

## 🧪 Future Enhancements

- Notifications System  
- Dark Mode  
- Advanced Analytics  
- Billing & Invoices  
- Performance Optimization  

---

## 🤝 Contributing

- Fork the repository  
- Create a new branch  
- Commit changes  
- Open a pull request  


