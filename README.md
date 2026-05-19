# ARKAR Portfolio Platform

Full-stack personal portfolio platform built with Next.js (App Router), FastAPI, and modern web technologies.

## 📁 Project Structure

```
arkar-web/
├── frontend/                     # Next.js (App Router)
│   ├── src/
│   │   ├── app/                  # UI Pages & Routing
│   │   │   ├── layout.tsx        # Root Layout
│   │   │   ├── page.tsx         # Homepage (Portfolio)
│   │   │   ├── login/           # Auth Page
│   │   │   └── dashboard/       # Protected Admin Dashboard
│   │   ├── components/          # Reusable UI Components
│   │   │   ├── ui/              # Button, GlassCard
│   │   │   ├── MobileNav.tsx    # Bottom Navigation
│   │   │   └── ThemeProvider.tsx
│   │   ├── context/              # Auth State Management
│   │   │   └── AuthContext.tsx
│   │   ├── lib/                 # Utilities
│   │   │   ├── firebase.ts      # Firebase Client
│   │   │   └── animations.ts   # Framer Motion Variants
│   │   └── styles/
│   │       └── globals.css     # Tailwind & Glassmorphic Styles
│   ├── package.json
│   ├── tailwind.config.js
│   └── tsconfig.json
│
├── backend/                      # Python FastAPI
│   ├── app/
│   │   ├── main.py              # Entry Point
│   │   ├── config.py           # Environment Variables
│   │   └── routes/
│   │       ├── auth.py          # User Authentication
│   │       └── projects.py      # Portfolio CRUD APIs
│   └── requirements.txt
│
└── README.md
```

## 🚀 Quick Start

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Visit `http://localhost:3000`

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Visit `http://localhost:8000`

## 🎨 Features

- Dark/Light Theme Toggle
- Glassmorphism UI Effects
- Mobile-First Responsive Design
- Smooth Framer Motion Animations
- Firebase Authentication
- Project Management Dashboard
- RESTful API Backend

## 🛠 Tech Stack

### Frontend
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons

### Backend
- FastAPI
- Python 3.10+
- PostgreSQL/Supabase

## 📝 License

MIT