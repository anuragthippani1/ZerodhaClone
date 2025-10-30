# Quick Start Guide

## Local Development Setup (5 minutes)

### Prerequisites
- Node.js (v14+)
- MongoDB installed and running
- Git

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/anuragthippani1/ZerodhaClone.git
   cd ZerodhaClone
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Edit .env if needed (default works for local MongoDB)
   node seedData.js  # Seed database with sample data
   npm start         # Starts on port 3002
   ```

3. **Setup Frontend** (New terminal)
   ```bash
   cd frontend
   npm install
   npm start         # Starts on port 3000
   ```

4. **Setup Dashboard** (New terminal)
   ```bash
   cd dashboard
   npm install
   PORT=3001 npm start  # Starts on port 3001
   ```

### Access Your App
- **Landing Page**: http://localhost:3000
- **Trading Dashboard**: http://localhost:3001
- **Backend API**: http://localhost:3002

---

## Production Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

**Quick Deploy**:
1. Database → MongoDB Atlas
2. Backend → Render.com
3. Frontend → Vercel.com
4. Dashboard → Vercel.com

Total time: ~30 minutes  
Total cost: **$0 (Free tier)**

---

## Project Structure

```
zerodha/
├── backend/          # Express.js API server
│   ├── model/        # Mongoose models
│   ├── schemas/      # Database schemas
│   ├── index.js      # Main server file
│   └── seedData.js   # Database seeding script
├── frontend/         # React landing page
│   └── src/
│       └── landing_page/
├── dashboard/        # React trading dashboard
│   └── src/
│       └── components/
└── README.md
```

---

## Common Commands

### Backend
```bash
npm start          # Start server (production)
npm run dev        # Start with nodemon (development)
node seedData.js   # Seed database
```

### Frontend/Dashboard
```bash
npm start          # Development server
npm run build      # Production build
npm test           # Run tests
```

---

## Need Help?

- **Setup Issues**: Check [README.md](./README.md)
- **Deployment Issues**: Check [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Bugs**: Open an issue on GitHub

