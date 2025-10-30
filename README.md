# Zerodha Clone

A full-stack clone of Zerodha's trading platform built with the MERN stack (MongoDB, Express, React, Node.js).

## 🚀 Project Structure

This project consists of three main components:

- **Frontend** - Landing page with product information, pricing, and support (React)
- **Dashboard** - Trading dashboard with holdings, positions, and order management (React)
- **Backend** - RESTful API server (Node.js + Express + MongoDB)

## 📋 Features

### Frontend (Landing Page)
- ✅ Home page with hero section
- ✅ About page with team information
- ✅ Product showcase
- ✅ Pricing information
- ✅ Support page
- ✅ Signup page
- ✅ Responsive navigation

### Dashboard
- ✅ Trading dashboard interface
- ✅ Holdings management with charts
- ✅ Positions tracking
- ✅ Order placement (Buy/Sell)
- ✅ Funds overview
- ✅ Watchlist functionality
- ✅ Real-time data visualization using Chart.js

### Backend
- ✅ RESTful API endpoints
- ✅ MongoDB database integration
- ✅ Holdings, Positions, and Orders models
- ✅ CORS enabled for cross-origin requests

## 🛠️ Tech Stack

**Frontend & Dashboard:**
- React 18
- React Router DOM
- Axios
- Chart.js & react-chartjs-2
- Material-UI (Dashboard)
- Bootstrap (Landing Page)

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- dotenv for environment variables
- CORS
- body-parser

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd zerodha
```

### 2. Setup Backend
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
PORT=3002
MONGO_URL=your_mongodb_connection_string
```

### 3. Setup Frontend
```bash
cd ../frontend
npm install
```

### 4. Setup Dashboard
```bash
cd ../dashboard
npm install
```

## 🚀 Running the Application

You need to run all three components simultaneously:

### Terminal 1 - Backend
```bash
cd backend
npm start
```
Backend will run on `http://localhost:3002`

### Terminal 2 - Frontend
```bash
cd frontend
npm start
```
Frontend will run on `http://localhost:3000`

### Terminal 3 - Dashboard
```bash
cd dashboard
PORT=3001 npm start
```
Dashboard will run on `http://localhost:3001`

## 🔌 API Endpoints

### Holdings
- `GET /allHoldings` - Fetch all holdings

### Positions
- `GET /allPositons` - Fetch all positions

### Orders
- `POST /newOrder` - Create a new order
  ```json
  {
    "name": "STOCK_NAME",
    "qty": 10,
    "price": 1500.50,
    "mode": "BUY"
  }
  ```

## 📁 Project Structure
```
zerodha/
├── backend/
│   ├── model/
│   │   ├── HoldingsModel.js
│   │   ├── OrdersModels.js
│   │   └── PositionsModel.js
│   ├── schemas/
│   │   ├── HoldingsSchema.js
│   │   ├── OrdersSchema.js
│   │   └── PositionsSchema.js
│   ├── index.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── landing_page/
│   │   │   ├── home/
│   │   │   ├── about/
│   │   │   ├── product/
│   │   │   ├── pricing/
│   │   │   ├── support/
│   │   │   ├── signup/
│   │   │   ├── Navbar.js
│   │   │   └── Footer.js
│   │   └── index.js
│   └── package.json
└── dashboard/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── Dashboard.js
    │   │   ├── Holdings.js
    │   │   ├── Positions.js
    │   │   ├── Orders.js
    │   │   ├── WatchList.js
    │   │   ├── BuyActionWindow.js
    │   │   └── ...
    │   └── index.js
    └── package.json
```

## 🐛 Recent Fixes

- ✅ Fixed critical bug in `/newOrder` endpoint (was using `find()` instead of creating new document)
- ✅ Added navigation to "Signup Now" button in Hero section
- ✅ Improved project documentation

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📝 License

This project is for educational purposes.

## 🙏 Acknowledgments

- Inspired by [Zerodha](https://zerodha.com/)
- Reference: [Apna College Zerodha Clone](https://github.com/apna-college/Zerodha)

---

Made with ❤️ for learning MERN stack development

