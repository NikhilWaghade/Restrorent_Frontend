# 🚀 Frontend-Backend Integration & Deployment Guide

## 📋 Overview

Your application is now fully integrated with the deployed backend and ready for production!

- **Backend URL**: https://restrorent-backend.onrender.com
- **Frontend URL**: https://restrorent-frontend.vercel.app

---

## ✅ What's Been Updated

### 1. **Environment Configuration**

#### `.env` File Created
```env
VITE_API_URL=https://restrorent-backend.onrender.com
```

#### `.env.example` Template
```env
# Backend API URL
VITE_API_URL=https://restrorent-backend.onrender.com

# For local development, use:
# VITE_API_URL=http://localhost:5000
```

---

### 2. **Centralized API Configuration**

#### Created: `src/api/api.js`
```javascript
import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

export default API;
```

**Benefits:**
- ✅ Single source of truth for API URL
- ✅ Automatically reads from environment variable
- ✅ Includes credentials for authentication
- ✅ Easy to update for different environments

---

### 3. **Files Updated**

All files now use the centralized `API` instance:

| File | Changes | Status |
|------|---------|--------|
| `src/pages/Home.jsx` | ✅ Uses `API.get("/api/menu")` | Updated |
| `src/pages/Menu.jsx` | ✅ Already using API instance | Ready |
| `src/components/AdminPanel.jsx` | ✅ All CRUD operations updated | Updated |
| `src/components/ProductDetail.jsx` | ✅ GET & POST reviews updated | Updated |
| `src/admin/AdminLogin.jsx` | ✅ Login endpoint updated | Updated |
| `src/admin/AdminSignup.jsx` | ✅ Signup endpoint updated | Updated |
| `src/pages/Payment.jsx` | ✅ Payment endpoints updated | Updated |

---

## 🔧 API Endpoints Used

### Public Endpoints
```
GET  /api/menu              → Get all menu items
GET  /api/menu/:id          → Get single menu item
POST /api/menu/:id/reviews  → Add review to item
```

### Admin Endpoints (Protected)
```
POST   /api/auth/admin/login   → Admin login
POST   /api/auth/admin/signup  → Admin signup
GET    /api/menu               → Get menu (admin view)
POST   /api/menu               → Create menu item
PUT    /api/menu/:id           → Update menu item
DELETE /api/menu/:id           → Delete menu item
```

### Payment Endpoints
```
POST /api/payment/order   → Create Razorpay order
POST /api/payment/verify  → Verify payment
```

---

## 📁 Project Structure

```
Restrorent_Frontend/
├── .env                          ✅ Environment variables
├── .env.example                  ✅ Environment template
├── src/
│   ├── api/
│   │   └── api.js               ✅ Centralized API config
│   ├── config/
│   │   └── api.js               ✅ API endpoints reference
│   ├── pages/
│   │   ├── Home.jsx             ✅ Updated
│   │   ├── Menu.jsx             ✅ Updated
│   │   └── Payment.jsx          ✅ Updated
│   ├── components/
│   │   ├── AdminPanel.jsx       ✅ Updated
│   │   └── ProductDetail.jsx    ✅ Updated
│   └── admin/
│       ├── AdminLogin.jsx       ✅ Updated
│       └── AdminSignup.jsx      ✅ Updated
```

---

## 🌐 Environment Variables

### Production (Already Set)
```env
VITE_API_URL=https://restrorent-backend.onrender.com
```

### Local Development
```env
VITE_API_URL=http://localhost:5000
```

### How to Switch

1. **For Production**: Use the current `.env` file
2. **For Local Dev**: Change URL in `.env` to `http://localhost:5000`
3. **Restart dev server** after changing `.env`

---

## 🚀 Deployment Steps

### Vercel Deployment (Frontend)

#### 1. Set Environment Variable in Vercel

Go to your Vercel project settings:

```
Settings → Environment Variables → Add New
```

Add:
```
Name:  VITE_API_URL
Value: https://restrorent-backend.onrender.com
```

#### 2. Redeploy

```bash
# Push to main branch or trigger redeploy
git add .
git commit -m "Update API endpoints for production"
git push origin main
```

Vercel will automatically redeploy with the new environment variable.

---

### Local Development

#### 1. Install Dependencies
```bash
npm install
```

#### 2. Set Environment Variable
Create `.env` file:
```env
VITE_API_URL=http://localhost:5000
```

#### 3. Run Development Server
```bash
npm run dev
```

---

## 🔍 Testing the Integration

### 1. **Test Menu Loading**

Visit: https://restrorent-frontend.vercel.app/

**Expected:**
- ✅ Popular Food Items load (top 5 by price)
- ✅ Menu section displays 8 items
- ✅ Loading skeletons appear during fetch
- ✅ No console errors

### 2. **Test Menu Page**

Visit: https://restrorent-frontend.vercel.app/menu

**Expected:**
- ✅ All menu items display
- ✅ Click opens product detail
- ✅ Images load correctly

### 3. **Test Product Detail**

Click any menu item:

**Expected:**
- ✅ Product details load
- ✅ Reviews display (if any)
- ✅ Can submit new review

### 4. **Test Admin Panel**

Visit: https://restrorent-frontend.vercel.app/admin/login

**Expected:**
- ✅ Login works
- ✅ Can view products
- ✅ Can add/edit/delete products

---

## 🐛 Troubleshooting

### Issue 1: CORS Error

**Error:**
```
Access to XMLHttpRequest has been blocked by CORS policy
```

**Solution:**
Backend needs to allow your frontend domain:

```javascript
// In your backend (Express)
app.use(cors({
  origin: 'https://restrorent-frontend.vercel.app',
  credentials: true
}));
```

---

### Issue 2: Environment Variable Not Working

**Error:**
```
API calls go to undefined/api/menu
```

**Solution:**

1. Check `.env` file exists in root
2. Restart dev server: `npm run dev`
3. In Vercel, check Environment Variables are set
4. Redeploy after adding env vars

---

### Issue 3: 404 Not Found

**Error:**
```
GET https://restrorent-backend.onrender.com/api/menu 404
```

**Solution:**

1. Check backend is running: Visit https://restrorent-backend.onrender.com
2. Verify API endpoint exists in backend
3. Check backend logs on Render

---

### Issue 4: Authentication Issues

**Error:**
```
Unauthorized or 401 errors
```

**Solution:**

1. Check `withCredentials: true` is set in API config
2. Backend must allow credentials in CORS
3. Clear cookies and try again

---

## 📊 API Request Examples

### Home Page - Fetch Menu
```javascript
const { data } = await API.get("/api/menu");
```

**URL Called:**
```
GET https://restrorent-backend.onrender.com/api/menu
```

---

### Admin Panel - Add Product
```javascript
await API.post("/api/menu", {
  name: "Chicken Biryani",
  price: 15.99,
  description: "Delicious biryani",
  category: "Main Course",
  image_url: "https://example.com/image.jpg"
});
```

**URL Called:**
```
POST https://restrorent-backend.onrender.com/api/menu
```

---

### Product Detail - Get Item
```javascript
const { data } = await API.get(`/api/menu/${id}`);
```

**URL Called:**
```
GET https://restrorent-backend.onrender.com/api/menu/123
```

---

## 🔐 Security Considerations

### 1. **Environment Variables**

✅ **Good:**
```javascript
baseURL: import.meta.env.VITE_API_URL
```

❌ **Bad:**
```javascript
baseURL: "https://restrorent-backend.onrender.com" // Hardcoded
```

---

### 2. **Credentials**

Always include credentials for authentication:

```javascript
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true  // ✅ Important for auth
});
```

---

### 3. **API Keys**

Never commit API keys in `.env`:

```env
# ❌ Don't commit this file with real keys
RAZORPAY_KEY=your_secret_key
```

Use `.env.example` instead:

```env
# ✅ Commit this template
RAZORPAY_KEY=your_key_here
```

---

## 📈 Performance Optimization

### 1. **Caching**

Backend should implement caching:

```javascript
// Example: Cache menu for 5 minutes
app.get('/api/menu', cache('5 minutes'), getMenu);
```

---

### 2. **Image Optimization**

Use optimized images:
- WebP format
- Responsive sizes
- CDN for images

---

### 3. **API Response**

Keep responses lean:
- Only send needed fields
- Implement pagination
- Use compression

---

## ✅ Deployment Checklist

### Before Deploying

- [ ] `.env` file configured
- [ ] All API calls use `API` instance
- [ ] No `localhost` references remain
- [ ] CORS configured on backend
- [ ] Environment variables set in Vercel
- [ ] Test locally first

### After Deploying

- [ ] Test all pages load
- [ ] Test API calls work
- [ ] Check console for errors
- [ ] Test authentication
- [ ] Test CRUD operations (admin)
- [ ] Monitor backend logs

---

## 🎯 Quick Commands

### Development
```bash
# Install
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Deployment
```bash
# Deploy to Vercel (if using CLI)
vercel

# Or push to GitHub (auto-deploy)
git push origin main
```

---

## 📚 Additional Resources

### Documentation
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
- [Axios Documentation](https://axios-http.com/docs/intro)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [Render Documentation](https://render.com/docs)

### Your URLs
- Frontend: https://restrorent-frontend.vercel.app
- Backend: https://restrorent-backend.onrender.com
- Backend Health: https://restrorent-backend.onrender.com (should show "Backend is working 🚀")

---

## 🎉 Summary

Your application is now:

✅ **Fully integrated** with production backend  
✅ **Environment-aware** (dev vs prod)  
✅ **Centralized API** configuration  
✅ **No hardcoded URLs** anywhere  
✅ **Ready for deployment** on Vercel  
✅ **CORS-compatible** with credentials  
✅ **Secure** with environment variables  
✅ **Production-ready** and scalable  

---

## 🚀 Next Steps

1. **Push to GitHub** to trigger Vercel deployment
2. **Set environment variables** in Vercel dashboard
3. **Test production URL** after deployment
4. **Monitor logs** on both Vercel and Render
5. **Add custom domain** (optional)

---

## 💡 Pro Tips

1. **Always test locally** before pushing to production
2. **Keep `.env` out of git** (add to `.gitignore`)
3. **Use `.env.example`** for team members
4. **Monitor backend logs** on Render dashboard
5. **Set up error tracking** (e.g., Sentry)
6. **Enable HTTPS** for secure communication
7. **Implement rate limiting** on backend

---

**Need help?** Check the troubleshooting section or backend logs!

Happy deploying! 🎊
