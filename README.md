# LSM Nest Next - Full Stack Application

A full-stack application combining Next.js frontend with NestJS backend in a single repository.

## Project Structure

```
lsm-nest-next/
├── app/                    # Next.js frontend (App Router)
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── backend/                # NestJS backend
│   ├── src/
│   │   ├── app.controller.ts
│   │   ├── app.module.ts
│   │   ├── app.service.ts
│   │   └── main.ts
│   ├── package.json
│   └── tsconfig.json
├── package.json            # Root package.json with scripts
└── README.md
```

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Installation

1. **Install all dependencies** (both frontend and backend):
   ```bash
   npm run install:all
   ```

   Or install manually:
   ```bash
   # Install frontend dependencies
   npm install
   
   # Install backend dependencies
   cd backend
   npm install
   cd ..
   ```

## Development

### Option 1: Run Both Services Together (Recommended)
```bash
npm run dev:all
```

This will start both:
- Next.js frontend on http://localhost:3000
- NestJS backend on http://localhost:5000

### Option 2: Run Services Separately

**Terminal 1 - Frontend:**
```bash
npm run dev
```

**Terminal 2 - Backend:**
```bash
cd backend
npm run start:dev
```

## API Endpoints

The NestJS backend provides the following endpoints:

- `GET http://localhost:5000` - Hello message
- `GET http://localhost:5000/health` - Health check

## Features

- ✅ Next.js 14 with App Router
- ✅ NestJS backend with TypeScript
- ✅ CORS enabled for frontend-backend communication
- ✅ Concurrently script to run both services
- ✅ Example API call from frontend to backend
- ✅ Modern UI with Tailwind CSS
- ✅ Error handling and loading states

## Development Workflow

1. Start both services: `npm run dev:all`
2. Open http://localhost:3000 in your browser
3. The frontend will automatically fetch data from the backend
4. Make changes to either frontend or backend - hot reload is enabled for both

## Troubleshooting

- **Backend not responding**: Make sure the NestJS backend is running on port 5000
- **CORS errors**: The backend is configured to allow requests from http://localhost:3000
- **Port conflicts**: Ensure ports 3000 and 5000 are available

## Next Steps

- Add more API endpoints in the NestJS backend
- Implement authentication and authorization
- Add database integration (Prisma, TypeORM, etc.)
- Add more complex frontend pages and components
- Implement real-time features with WebSockets

## 6. Tailwind CSS Configuration

```js:tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

```js:postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

## Summary

I've created a complete Next.js + NestJS integration with the following features:

### ✅ **Project Structure**
- Next.js frontend in `app/` directory (App Router)
- NestJS backend in `backend/` directory
- Root-level scripts to manage both services

### ✅ **NestJS Backend**
- Standard NestJS setup with TypeScript
- CORS enabled for frontend communication
- Test endpoint returning "Hello from NestJS backend 🚀"
- Health check endpoint
- Runs on port 5000

### ✅ **Next.js Frontend**
- Modern React 18 with App Router
- Beautiful UI with Tailwind CSS
- Example API call to NestJS backend
- Error handling and loading states
- Auto-fetch on page load

### ✅ **Development Workflow**
- `npm run dev:all` - runs both services concurrently
- `npm run install:all` - installs all dependencies
- Hot reload for both frontend and backend

### ✅ **Communication**
- Frontend calls backend via `http://localhost:5000`
- CORS properly configured
- Error handling for when backend is not running

To get started:

1. Run `npm run install:all` to install all dependencies
2. Run `npm run dev:all` to start both services
3. Open http://localhost:3000 to see the integration in action

The frontend will automatically fetch data from the NestJS backend and display it with a modern, responsive UI.
