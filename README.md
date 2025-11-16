# TripZ — Travel Packages CRUD App

A full‑stack travel management application with public tour browsing and an authenticated admin dashboard.

---

## 🚀 Tech Stack

### **Frontend**
- React (Vite)
- React Router DOM
- Axios
- React‑Hook‑Form
- Material UI Icons
- CSS3

### **Backend**
- Node.js
- Express.js
- MySQL
- bcrypt
- JWT Authentication
- CORS
- dotenv

### **Deployment**
- **Frontend:** Vercel  
- **Backend:** Vercel
- **Database:** MySQL Local or Free MySQL database (Cloud)

---

## 🧩 Features

### **Public**
- View all tours (list format, mobile‑first)
- View a single tour’s details

### **Admin**
- Login with JWT (test credentials below)
- Create a new tour
- Edit an existing tour (with modal + react‑hook‑form)
- Delete a tour
- Fully responsive dashboard

---

## 🛠️ How to Run Locally

### **1. Clone both repositories**
```sh
git clone https://github.com/MananBagadi100/TripZ-frontend
git clone https://github.com/MananBagadi100/TripZ-backend
```

---

## 🔧 Backend Setup

### **2. Install dependencies**
```sh
cd backend
npm install
```

### **3. Create `.env` file**
```
PORT=3000
DB_HOST=localhost
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=tripzsearch
DB_PORT=3306
JWT_SECRET=secretkey
FRONTEND_URL=http://localhost:5173
```

### **4. Start backend**
```sh
npm run dev
```

Backend runs at:
```
http://localhost:3000
```

---

## 🎨 Frontend Setup

### **5. Install dependencies**
```sh
cd frontend
npm install
```

### **6. Create `.env`**
```
VITE_BACKEND_URL=http://localhost:3000
```

### **7. Run frontend**
```sh
npm run dev
```

Frontend runs at:
```
http://localhost:5173
```

---

## 🌐 Deployment URLs (fill these after deployment)

- **Frontend (Vercel):** [<paste_here>](https://trip-z-frontend.vercel.app/)
- **Backend API Base URL:** [<paste_here>](https://trip-z-backend.vercel.app/)
- **Public GitHub Repos:**
  - Frontend Repo: [<paste_here>](https://github.com/MananBagadi100/TripZ-frontend)
  - Backend Repo: [<paste_here>](https://github.com/MananBagadi100/TripZ-backend)

---

## 🔑 Admin Login Credentials (Test User)

```
email: admin@example.com
password: password123
```

---

## 📂 Folder Structure (Quick Overview)

### **Frontend**
```
src/
 ├── Components/
 ├── Styles/
 ├── App.jsx
 ├── main.jsx
```

### **Backend**
```
controllers/
middleware/
routes/
db.js
server.js
```

---

## ✔️ Notes

- CORS configured to allow frontend origin
- Admin dashboard uses modal dialog for editing tours
- React‑Hook‑Form used for fast JSON submission
- Fully mobile‑first UI and responsive design

---

## 📄 Author

Built as an assignment project — TripZ CRUD Travel App.
