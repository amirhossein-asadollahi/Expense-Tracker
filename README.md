# 💰 Expense Tracker

A personal finance management application built with **React**, integrated with a **Django REST API** and **SQLite** database.

The main focus of this project is the frontend implementation using React. The backend API was provided separately and is used by the frontend for data management.

---

## ✨ Features

- 💸 Add income and expense transactions
- ✏️ Edit transactions
- 🗑️ Delete transactions
- 📂 Manage transaction categories
- 🎯 Create and manage financial goals
- 🔎 Search transactions
- 📅 Filter transactions by date
- 📊 View income and expense reports
- 📈 Visualize financial data with charts
- 💰 Track total income, expenses, and balance

---

## 🛠️ Tech Stack

### Frontend

- React
- JavaScript
- CSS
- Recharts
- React Icons

### Backend

- Django
- Django REST Framework

### Database

- SQLite

> **Note:** The backend API was provided separately and is used by the React frontend. The primary focus of this project is the frontend implementation.

---

## 📁 Project Structure

```text
Expense-Tracker/
│
├── public/
├── src/
├── package.json
│
├── Expense-Tracker-Api/
│   ├── manage.py
│   ├── db.sqlite3
│   ├── requirements.txt
│   └── ...
│
├── .gitignore
└── README.md
```

- `src/` — React application source code
- `public/` — Static frontend assets
- `Expense-Tracker-Api/` — Django REST API
- `db.sqlite3` — Local SQLite database
- `package.json` — Frontend dependencies and scripts
- `requirements.txt` — Backend Python dependencies
- `README.md` — Project documentation

---

# 🚀 Getting Started

Follow the instructions below to run the project locally.

## 📋 Prerequisites

Make sure you have the following installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- Python 3.x

---

# ⚙️ Backend Setup

The Django backend is located inside the `Expense-Tracker-Api` directory.

### 1. Navigate to the Backend

From the project root:

```bash
cd Expense-Tracker-Api
```

### 2. Create a Virtual Environment

```bash
python -m venv venv
```

### 3. Activate the Virtual Environment

#### Windows

```bash
venv\Scripts\activate
```

#### macOS / Linux

```bash
source venv/bin/activate
```

### 4. Install Dependencies

```bash
pip install -r requirements.txt
```

---

# 🗄️ Database

This project uses **SQLite** as its database.

The SQLite database file is included in the repository:

```text
Expense-Tracker-Api/db.sqlite3
```

No separate database installation or configuration is required.

If necessary, run the migrations:

```bash
python manage.py migrate
```

---

# ▶️ Start the Backend

Start the Django development server:

```bash
python manage.py runserver
```

The backend API will be available at:

```text
http://127.0.0.1:8000/
```

Keep this terminal running.

---

# 🎨 Frontend Setup

Open a **new terminal** while the Django server is running.

Make sure you are in the root `Expense-Tracker` directory.

Install the frontend dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm run dev
```

The terminal will display the local URL of the application.

Open that URL in your browser.

---

# 🔗 API Connection

The React frontend communicates with the Django REST API running locally.

The backend is available at:

```text
http://127.0.0.1:8000/
```

Example API endpoints:

```text
http://127.0.0.1:8000/api/transaction/
http://127.0.0.1:8000/api/category/
```

> Make sure the Django server is running before using the React application.

---

# 🖥️ Running the Project

You need **two terminals** running simultaneously.

### Terminal 1 — Backend

```bash
cd Expense-Tracker-Api
venv\Scripts\activate
python manage.py runserver
```

### Terminal 2 — Frontend

From the project root:

```bash
npm run dev
```

Then open the local URL provided by Vite in your browser.

---

## ⚠️ Important Notes

- No PostgreSQL or other external database is required.
- The project uses SQLite locally.
- The Django backend must be running while using the React application.
- The SQLite database is included with the project for local development.
- Do not delete `db.sqlite3` if you want to keep the included demo data.
- The project is currently configured for local development.

---

## 🔮 Future Improvements

Possible future improvements include:

- User authentication and registration
- Multiple user accounts
- Online deployment
- Cloud database
- Budget management
- Recurring transactions
- Advanced financial analytics
- Export financial reports
- Dark mode
- Improved mobile responsiveness

---

## 👨‍💻 Author

**AmirHossein Asadollahi**

Frontend Developer | React & JavaScript

---

## 📄 License

This project was created for learning and portfolio purposes.
