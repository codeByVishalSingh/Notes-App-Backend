📝 Notes App Backend

A robust backend API for the Notes Application built with Node.js and Express.js, providing secure authentication and efficient note management.

🔗 GitHub Repository:
https://github.com/codeByVishalSingh/Notes-App-Backend

🚀 Features
🔐 User Authentication (JWT-based)
🧑‍💻 User Registration & Login
📝 Create, Read, Update, Delete (CRUD) Notes
🔒 Password hashing with bcrypt
🌐 RESTful API architecture
⚡ Fast and scalable backend
🔑 Protected routes with middleware
🛠️ Tech Stack
Runtime: Node.js
Framework: Express.js
Database: MongoDB
ODM: Mongoose
Authentication: JSON Web Token (JWT)
Security: bcryptjs, helmet, cors
Environment Variables: dotenv
📂 Folder Structure
backend/
│── controllers/     # Business logic
│── models/          # Mongoose schemas
│── routes/          # API routes
│── middleware/      # Auth middleware
│── config/          # DB connection
│── utils/           # Helper functions
│── server.js        # Entry point
⚙️ Installation & Setup
Clone the repository
git clone https://github.com/codeByVishalSingh/Notes-App-Backend.git
Navigate to project folder
cd Notes-App-Backend
Install dependencies
npm install
Create a .env file
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Run the server
npm run dev
📡 API Endpoints
🔐 Auth Routes
POST /api/auth/register → Register a new user
POST /api/auth/login → Login user
📝 Notes Routes (Protected)
GET /api/notes → Get all notes
POST /api/notes → Create a note
PUT /api/notes/:id → Update a note
DELETE /api/notes/:id → Delete a note
🔒 Authentication
Uses JWT (JSON Web Token)
Protected routes require token in headers:
Authorization: Bearer <token>
🌐 Database
MongoDB Atlas / Local MongoDB supported
Managed via Mongoose
🧪 Testing

You can test APIs using:

Postman
Thunder Client (VS Code)

Contributions are welcome!

Fork the repo
Create a branch (git checkout -b feature-name)
Commit changes
Push to GitHub
Open a Pull Request
📄 License

This project is licensed under the MIT License.

👨‍💻 Author

Vishal Singh
🔗 GitHub: https://github.com/codeByVishalSingh
