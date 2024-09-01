# Bookstore MERN Stack Web App

This is a full-stack web application for managing a bookstore, built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The app allows users to create, view, edit, and delete book records.

## Project Structure

```bash
BOOKSTORE-MERN-STACK/
├── backend/
│   ├── models/
│   │   └── bookModel.js
│   ├── routes/
│   │   └── booksRoute.js
│   ├── config.js
│   └── index.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   └── home/
│   │   │       ├── BackButton.jsx
│   │   │       └── Spinner.jsx
│   │   ├── pages/
│   │   │   ├── CreateBooks.jsx
│   │   │   ├── DeleteBook.jsx
│   │   │   ├── EditBook.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── ShowBook.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── .gitignore
└── .gitignore
```


## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. **Clone the repository:**

   ```bash
    git clone https://github.com/your-username/bookstore-mern-stack.git
    cd bookstore-mern-stack
2. **Install backend dependencies:**

    ```bash
    cd backend
    npm install
    ```
The frontend server will start on http://localhost:5173.

### Environment Variables
Create a .env file in the backend/ directory with the following environment variables:
```env
MONGO_URI={mongdb database link}
PORT=5555
```
### Features
- **Book Management**: Add, edit, delete, and view books.
- **Responsive Design**: The UI is built using Tailwind CSS and is responsive on all devices.
- **Loading Spinner**: Displays a loading spinner while fetching data.

### Tech Stack
- **Frontend**
    - React.js
    - Tailwind CSS
    - React Icons
- **Backend**
    - Node.js
    - Express.js
    - MongoDB
