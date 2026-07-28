# Eco Pulse Technology - Employment Platform

A professional, full-featured employment platform built with Next.js 16, Supabase, and TypeScript.

## Features

### For Job Seekers
- Browse and search available jobs
- Apply to job positions with cover letters
- Save favorite jobs for later
- View application status and history
- Manage profile and upload resume
- Receive notifications about application updates
- Message with employers

### For Employers
- Create company profile
- Post and manage job listings
- View and manage applications
- Communicate with candidates
- Advanced filtering and search
- Analytics dashboard

### For Admins
- Monitor platform activity
- Manage users and permissions
- Verify companies and employers
- Monitor job postings
- System analytics and reporting

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS, custom dark theme
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth (Email/Password)
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **State Management**: SWR, React Hooks

## Database Schema

### Core Tables
- `profiles` - User profile information
- `companies` - Company/Employer details
- `jobs` - Job listings
- `applications` - Job applications
- `saved_jobs` - Bookmarked jobs
- `messages` - Direct messaging
- `notifications` - User notifications
- `job_categories` - Job categorization

All tables include Row-Level Security (RLS) policies for data protection.

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Fx1cryptos/Eco-Pulse-Technology.git
cd Eco-Pulse-Technology
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Set up environment variables:
Create a `.env.local` file with:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL=http://localhost:3000
```

Get these values from your Supabase project settings.

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## User Roles

### Job Seeker
- Sign up as a job seeker
- Browse job listings
- Apply to positions
- Track applications
- Manage profile

### Employer
- Sign up as employer
- Create company profile
- Post jobs
- Review applications
- Communicate with candidates

### Admin
- Administrative access to platform
- User management
- System monitoring
- Content moderation

## Project Structure

```
app/
├── auth/                    # Authentication pages
│   ├── login/
│   ├── sign-up/
│   ├── callback/
│   └── error/
├── dashboard/               # User dashboards
│   ├── jobs/                # Job seeker features
│   ├── employer/            # Employer features
│   ├── admin/               # Admin features
│   └── messages/            # Messaging
├── layout.tsx               # Root layout
└── page.tsx                 # Landing page

components/
├── notifications.tsx        # Notification dropdown
└── sidebar-nav.tsx          # Navigation component

lib/
└── supabase/                # Supabase utilities
    ├── client.ts
    ├── server.ts
    └── proxy.ts
```

## Authentication Flow

1. Users sign up with email and password
2. Email confirmation required
3. Profile creation on first login
4. Role-based dashboard routing
5. Secure session management with Supabase

## Row Level Security

All data is protected with RLS policies ensuring:
- Users can only access their own profiles
- Employers see only their job postings
- Job seekers see only public job listings
- Messages are private between sender/receiver
- Notifications belong to specific users

## Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Import repository to Vercel
3. Add environment variables in Vercel settings
4. Deploy

```bash
# Vercel CLI
vercel deploy
```

### Environment Variables on Vercel
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Development

### Running Tests
```bash
npm run test
```

### Building for Production
```bash
npm run build
npm run start
```

### Linting
```bash
npm run lint
```

## API Routes

### Authentication
- `POST /auth/login` - Login endpoint
- `POST /auth/sign-up` - Registration endpoint
- `POST /auth/logout` - Logout endpoint

### Jobs
- `GET /api/jobs` - List all jobs
- `POST /api/jobs` - Create job (employer only)
- `GET /api/jobs/[id]` - Get job details
- `PUT /api/jobs/[id]` - Update job
- `DELETE /api/jobs/[id]` - Delete job

### Applications
- `GET /api/applications` - List applications
- `POST /api/applications` - Submit application
- `PUT /api/applications/[id]` - Update status

### Messages
- `GET /api/messages` - Get messages
- `POST /api/messages` - Send message
- `PUT /api/messages/[id]` - Mark as read

## Contributing

1. Create feature branch: `git checkout -b feature/amazing-feature`
2. Commit changes: `git commit -m 'Add amazing feature'`
3. Push to branch: `git push origin feature/amazing-feature`
4. Open Pull Request

## License

This project is licensed under the MIT License.

## Support

For support, email support@ecopulsetechnology.com or open an issue on GitHub.

## Branding

Logo and branding assets are provided by Eco Pulse Technology. All rights reserved.
