# 📄 Document Request System

A full-stack web application for managing and processing document requests, built with **Angular** and **Express.js**, powered by **Firebase**.

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Angular (ES2022) |
| Backend | Node.js + Express |
| Auth & DB | Firebase Admin SDK |
| API Docs | Swagger UI |
| Styling | Tailwind CSS |
| Language | TypeScript |

---

## ✨ Features

- 🔐 User authentication (login & registration)
- 📋 Document request submission and tracking
- 🛡️ JWT-based secure API with Firebase Admin SDK
- 📑 Swagger API documentation at `/api-docs`
- 📁 File upload support
- 🔄 Hot reload in development (watch mode for both servers)

---

## 📁 Project Structure

```
document-request-system/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   └── routes/
│   ├── uploads/
│   ├── server.ts
│   ├── .env
│   └── service-account-key.json
└── frontend/
    └── frontend-app/
        ├── src/
        ├── angular.json
        ├── tailwind.config.js
        └── tsconfig.json
```

---

## ⚙️ Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [Angular CLI](https://angular.io/cli) v15+
- A Firebase project with a service account key

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/carrz22/Document_Request_System.git
cd document-request-system
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
PORT=5000
FIREBASE_PROJECT_ID=your-project-id
# Add any other required environment variables
```

Place your Firebase `service-account-key.json` in the `backend/` directory.

Start the backend server:

```bash
npm run dev
```

The API will be available at `http://localhost:5000`  
Swagger docs: `http://localhost:5000/api-docs`

### 3. Frontend Setup

```bash
cd frontend/frontend-app
npm install
ng serve
```

The Angular app will be available at `http://localhost:4200`

---

## 📡 API Overview

Full interactive API documentation is available via Swagger at:

```
http://localhost:5000/api-docs
```

---

## 🔑 Usage

1. Navigate to `http://localhost:4200`
2. Register a new account or log in with existing credentials
3. Access document request features from the main dashboard

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

> Built with ❤️ by [carrz22](https://github.com/carrz22)
