# Deployment Guide - Zerodha Clone

This guide will help you deploy your Zerodha clone to production using free hosting services.

## Architecture Overview

- **Frontend (Landing Page)** → Vercel/Netlify
- **Dashboard** → Vercel/Netlify  
- **Backend API** → Render/Railway
- **Database** → MongoDB Atlas (Cloud)

---

## 📦 Part 1: Deploy Database (MongoDB Atlas)

### Step 1: Create MongoDB Atlas Account
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up for a **FREE** account
3. Create a new cluster (choose FREE tier - M0)

### Step 2: Setup Database
1. Click **"Connect"** on your cluster
2. Add your current IP address to whitelist (or use `0.0.0.0/0` for all IPs)
3. Create a database user with username and password
4. Choose **"Connect your application"**
5. Copy the connection string (looks like):
   ```
   mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/zerodha?retryWrites=true&w=majority
   ```

### Step 3: Seed Your Cloud Database
1. Update your local `backend/.env` with the Atlas connection string
2. Run the seed script:
   ```bash
   cd backend
   node seedData.js
   ```

---

## 🔧 Part 2: Deploy Backend (Render or Railway)

### Option A: Using Render (Recommended - Free)

#### Step 1: Prepare Backend for Deployment
1. Update `backend/package.json` to add engine version:
   ```json
   "engines": {
     "node": "18.x"
   }
   ```

2. Ensure your backend starts correctly:
   ```json
   "scripts": {
     "start": "node index.js",
     "dev": "nodemon index.js"
   }
   ```

#### Step 2: Deploy to Render
1. Go to [Render.com](https://render.com) and sign up
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository
4. Configure:
   - **Name**: `zerodha-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: Free

5. Add Environment Variables:
   - `PORT` = `3002`
   - `MONGO_URL` = (your MongoDB Atlas connection string)

6. Click **"Create Web Service"**
7. Wait for deployment (5-10 minutes)
8. Copy your backend URL: `https://zerodha-backend-xxxx.onrender.com`

### Option B: Using Railway

1. Go to [Railway.app](https://railway.app)
2. Sign up with GitHub
3. Click **"New Project"** → **"Deploy from GitHub repo"**
4. Select your repository
5. Add environment variables (same as Render)
6. Railway will auto-deploy your backend

---

## 🌐 Part 3: Deploy Frontend (Landing Page)

### Step 1: Update API URLs
1. Open `frontend/src/landing_page/home/Hero.js`
2. If you have any API calls, update them to use your deployed backend URL

### Step 2: Deploy to Vercel

1. Install Vercel CLI (optional):
   ```bash
   npm install -g vercel
   ```

2. **Via Vercel Dashboard** (Easier):
   - Go to [Vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click **"Add New"** → **"Project"**
   - Import your repository
   - Configure:
     - **Root Directory**: `frontend`
     - **Framework Preset**: Create React App
     - Leave other settings as default
   - Click **"Deploy"**
   - Your frontend will be live at: `https://your-project.vercel.app`

3. **Via CLI**:
   ```bash
   cd frontend
   vercel
   # Follow prompts
   ```

### Alternative: Netlify
1. Go to [Netlify.com](https://netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect GitHub and select your repo
4. Configure:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
5. Click **"Deploy"**

---

## 📊 Part 4: Deploy Dashboard

### Update Dashboard API Calls
1. Open `dashboard/src/components/Holdings.js` and other files with API calls
2. Replace `http://localhost:3002` with your deployed backend URL:
   ```javascript
   // Before
   axios.get("http://localhost:3002/allHoldings")
   
   // After
   axios.get("https://zerodha-backend-xxxx.onrender.com/allHoldings")
   ```

3. Do the same for:
   - `dashboard/src/components/Positions.js`
   - `dashboard/src/components/BuyActionWindow.js`

### Deploy to Vercel/Netlify
Follow the same steps as Frontend deployment, but use `dashboard` as the root directory.

---

## 🔐 Important: Update CORS in Backend

Once frontend and dashboard are deployed, update backend CORS settings:

**In `backend/index.js`**:
```javascript
const cors = require("cors");

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "https://your-frontend.vercel.app",      // Add your frontend URL
  "https://your-dashboard.vercel.app"       // Add your dashboard URL
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
```

Or for testing (less secure):
```javascript
app.use(cors()); // Allows all origins
```

Push the changes and Render/Railway will auto-redeploy.

---

## 🚀 Quick Deployment Checklist

- [ ] MongoDB Atlas cluster created and connection string obtained
- [ ] Database seeded with sample data
- [ ] Backend deployed to Render/Railway
- [ ] Backend environment variables set (PORT, MONGO_URL)
- [ ] Backend URL copied
- [ ] Frontend API calls updated (if any)
- [ ] Frontend deployed to Vercel/Netlify
- [ ] Dashboard API calls updated with backend URL
- [ ] Dashboard deployed to Vercel/Netlify
- [ ] Backend CORS updated with frontend/dashboard URLs
- [ ] All three parts tested and working

---

## 🔍 Testing Your Deployment

1. **Backend API**:
   ```bash
   curl https://your-backend.onrender.com/allHoldings
   ```
   Should return JSON with stock data

2. **Frontend**: 
   - Visit your Vercel URL
   - Navigate through pages
   - Test signup button

3. **Dashboard**:
   - Visit your dashboard URL
   - Check if holdings display
   - Verify charts load

---

## 💰 Cost Summary

| Service | Free Tier Limits |
|---------|-----------------|
| **MongoDB Atlas** | 512 MB storage, shared RAM |
| **Render** | 750 hours/month, sleeps after 15min inactivity |
| **Vercel** | Unlimited bandwidth, 100 GB-hours |
| **Netlify** | 100 GB bandwidth/month |

**Total Cost**: $0/month (completely free!)

---

## ⚠️ Common Issues & Solutions

### Issue 1: Backend Sleeps (Render Free Tier)
**Problem**: First request after inactivity takes 30-60 seconds  
**Solution**: 
- Upgrade to paid tier ($7/month)
- Use a cron job to ping your backend every 10 minutes
- Consider Railway (doesn't sleep on free tier)

### Issue 2: CORS Errors
**Problem**: Frontend can't connect to backend  
**Solution**: Update CORS settings in backend as shown above

### Issue 3: Environment Variables Not Working
**Problem**: App can't connect to database  
**Solution**: Double-check environment variables in Render/Railway dashboard

### Issue 4: Build Fails
**Problem**: Deployment fails during build  
**Solution**: 
- Check Node.js version matches local
- Ensure all dependencies are in package.json
- Check build logs for specific errors

---

## 📱 Custom Domain (Optional)

### For Vercel/Netlify:
1. Buy a domain (Namecheap, GoDaddy, etc.)
2. In Vercel/Netlify dashboard, go to **Domains**
3. Add your custom domain
4. Update DNS records as instructed

### Example:
- Frontend: `www.zerodhaclone.com`
- Dashboard: `app.zerodhaclone.com`
- Backend: `api.zerodhaclone.com`

---

## 🎉 You're Live!

Once deployed, your URLs will look like:
- **Frontend**: `https://zerodha-frontend-xxxx.vercel.app`
- **Dashboard**: `https://zerodha-dashboard-xxxx.vercel.app`
- **Backend**: `https://zerodha-backend-xxxx.onrender.com`

Share your live project in your portfolio! 🚀

---

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Render Documentation](https://render.com/docs)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [Railway Documentation](https://docs.railway.app/)

---

**Need Help?** Check the deployment logs for specific error messages and troubleshoot from there.

