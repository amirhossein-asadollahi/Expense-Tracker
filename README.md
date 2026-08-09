# 💰 Expense Tracker

A personal finance management application built with **React**, integrated with a **Django REST API** and **PostgreSQL** database.

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

- PostgreSQL

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
│   ├── requirements.txt
│   └── ...
│
├── .gitignore
└── README.md
```

- `src/` — React application source code
- `public/` — Static frontend assets
- `Expense-Tracker-Api/` — Django REST API
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
- PostgreSQL

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

# 🗄️ PostgreSQL Setup

Make sure PostgreSQL is installed and running on your computer.

Create a PostgreSQL database for the project.

For example:

```text
Database Name: expense_tracker
Host: localhost
Port: 5432
```

Configure the Django database settings using your local PostgreSQL credentials.

> ⚠️ Do not upload your database password or other sensitive credentials to GitHub.

If the project uses environment variables, create a `.env` file with your local database configuration.

Example:

```env
DB_NAME=expense_tracker
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
```

---

# 🔄 Database Migration

After configuring PostgreSQL, run:

```bash
python manage.py makemigrations
```

Then:

```bash
python manage.py migrate
```

This will create the required database tables in PostgreSQL.

---

# ▶️ Start the Backend

Run the Django development server:

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

# ⚠️ Important Notes

- PostgreSQL must be running before starting the Django backend.
- The Django backend must be running while using the React application.
- Make sure your PostgreSQL credentials are correctly configured.
- Do not commit `.env` files or sensitive credentials.
- The project is currently configured for local development.
- The backend API is included in this repository for local development and integration purposes.

---

# 🔮 Future Improvements

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

# 👨‍💻 Author

**AmirHossein Asadollahi**

Frontend Developer | React & JavaScript

---

## 📄 License

This project was created for learning and portfolio purposes.
