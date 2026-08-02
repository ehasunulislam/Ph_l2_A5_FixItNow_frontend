<div align="center">

# 🔧 FixItNow Frontend

### Your Trusted Home Service Marketplace

A modern, responsive, and scalable home service marketplace where customers can easily find trusted technicians, book services, make secure online payments, and leave reviews — while technicians efficiently manage services, availability, and bookings.

### 🌐 Live Demo

**Frontend:** https://frontendfixitnow.vercel.app/

**Backend API:** https://fixitnow-xi.vercel.app/

</div>

---

# ✨ Features

## 👤 Customer Features

- Secure Authentication
- Browse Services
- Filter Services by Category
- View Technician Profile
- Book Available Time Slots
- Stripe Payment Integration
- Booking Tracking
- Review & Rating System
- Payment History

---

## 🛠 Technician Features

- Technician Dashboard
- Create & Manage Services
- Manage Availability
- Accept / Decline Bookings
- Start Service
- Complete Service
- Booking Management

---

## 🛡 Admin Features

- Dashboard Overview
- User Management
- Category Management
- Booking Monitoring

---

# 🚀 Tech Stack

| Category | Technology |
|------------|----------------|
| Framework | Next.js 16 |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI Library | Shadcn UI |
| State Management | TanStack Query |
| Forms | React Hook Form |
| Validation | Zod |
| Icons | Lucide React |
| Notifications | Sonner |
| Date Utility | date-fns |
| Payment | Stripe |
| Deployment | Vercel |

---

# 📁 Folder Structure

```text
app
├── (auth)
│   ├── login
│   └── register
│
├── (dashboard-group)
│   ├── dashboard
│   │   ├── admin
│   │   ├── customer
│   │   └── technician
│
├── (publicRoute)
│
├── how-it-work
├── payment
├── service
├── technician
├── trust-safety
│
├── favicon.ico
├── globals.css
├── layout.tsx
└── not-found.tsx

components
├── Interface
├── Shared
├── ui
└── ...

lib

public
```

---

# 📄 Application Routes

| Route | Description | API |
|---------|------------|---------|
| `/` | Home Page | GET `/api/services` |
| `/services` | Browse Services | GET `/api/services` |
| `/technician/[id]` | Technician Details | GET `/api/technicians/:id` |
| `/auth/register` | Register | POST `/api/auth/register` |
| `/auth/login` | Login | POST `/api/auth/login` |
| `/dashboard/customer` | Customer Dashboard | GET `/api/bookings` |
| `/dashboard/customer/bookings/[id]/pay` | Payment Page | POST `/api/payments/create` |
| `/payment/success` | Payment Success | POST `/api/payments/confirm` |
| `/payment/cancel` | Payment Cancel | Stripe Redirect |
| `/dashboard/technician` | Technician Dashboard | GET `/api/technician/profile` |
| `/dashboard/technician/bookings` | Technician Booking Management | GET `/api/technician/bookings` |
| `/dashboard/admin` | Admin Dashboard | GET `/api/admin/users` |
| `/dashboard/admin/categories` | Category Management | GET/POST `/api/admin/categories` |

---

# 🔧 Customer Journey

```text
Register/Login
      │
      ▼
Browse Services
      │
      ▼
View Technician Profile
      │
      ▼
Select Service & Time Slot
      │
      ▼
Submit Booking Request
      │
      ▼
Wait for Technician Acceptance
      │
      ▼
Stripe Payment
      │
      ▼
Payment Success
      │
      ▼
Track Booking Status
      │
      ▼
Leave Review
```

---

# 🛠 Technician Journey

```text
Register/Login
      │
      ▼
Create Technician Profile
      │
      ▼
Create Services
      │
      ▼
Set Availability
      │
      ▼
Receive Booking Request
      │
      ▼
Accept / Decline
      │
      ▼
Customer Payment
      │
      ▼
Start Job
      │
      ▼
Complete Job
```

---

# 📊 Booking Status Flow

| Status | Customer View | Technician View |
|---------|---------------|-----------------|
| 🟡 REQUESTED | Waiting for approval | Accept / Decline |
| 🔵 ACCEPTED | Pay Now | Waiting for Payment |
| 🔴 DECLINED | Booking Declined | — |
| 🟣 PAID | Payment Completed | Start Job |
| 🟢 IN_PROGRESS | Job in Progress | Complete Job |
| ⚪ COMPLETED | Leave Review | Completed |
| 🔴 CANCELLED | Cancelled | Cancelled |

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/your-username/fixitnow-frontend.git
```

Go to project directory

```bash
cd fixitnow-frontend
```

Install dependencies

```bash
npm install
```

Run locally

```bash
npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file

```env
NEXT_PUBLIC_BACKEND_URL=https://fixitnow-xi.vercel.app
```

---

# 🌍 Backend API

```
https://fixitnow-xi.vercel.app
```

---

# 📸 Screenshots

> Add screenshots here

- Home Page
- Services
- Service Details
- Customer Dashboard
- Technician Dashboard
- Admin Dashboard

---

# 🚀 Future Improvements

- Real-time Notifications
- Chat System
- Email Notifications
- Google Maps Integration
- Advanced Analytics
- Dark / Light Theme

---

# 👨‍💻 Developer

**Ehasun Ul Islam**

GitHub: https://github.com/your-github

Portfolio: https://your-portfolio.com

LinkedIn: https://linkedin.com/in/your-profile

---

<div align="center">

Made with ❤️ using Next.js & TypeScript

</div>