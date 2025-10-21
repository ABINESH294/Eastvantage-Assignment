# 🧑‍💻 Fetch Random User – React + TypeScript

This is a simple React application that fetches and displays a random user’s full name and email from the [Random User API](https://randomuser.me/).  
It also caches the data in **localStorage** and allows refreshing to fetch a new user **without page reload**.

---
## 🚀 [Application Link] (https://ABINESH294.github.io/eastvantage-task)


## 🚀 Features

- ✅ Built with **React + TypeScript**
- ✅ Fetches user data asynchronously using **Axios**
- ✅ Caches user info in **localStorage**
- ✅ Refresh button fetches new user without reloading
- ✅ Clean and minimal UI

---

## 🧰 Tech Stack

- **React** (with Functional Components & Hooks)
- **TypeScript**
- **Axios** for API calls
- **Vite** or **Create React App** (you can use either)

---

## ⚙️ Installation

### 1. Clone the repository
```bash
git clone https://github.com/ABINESH294/eastvantage-task.git
```

### 2. Navigate into the project folder
```bash
cd eastvantage-task
```

### 3. Install dependencies
```bash
npm install
```

---

## ▶️ Run the Application

### Start the development server:
```bash
npm run dev
```

If you used **Create React App**, use:
```bash
npm start
```

Then open your browser and visit:
```
http://localhost:5173
```
*(or `http://localhost:3000` for CRA)*

---

## 🧠 Project Overview

### File: `FetchUserDetails.tsx`
Fetches data from `https://randomuser.me/api`, stores it in localStorage, and displays the user’s full name and email.

---

## 🧩 Example Output

```
Random User Info
Full Name: Mrs Jane Doe
Email: jane.doe@example.com
[Refresh Button]
```

---

## 🧹 Scripts

| Command | Description |
|----------|--------------|
| `npm run dev` | Start local dev server |
| `npm run build` | Build for production |

---