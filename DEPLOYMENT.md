# Eco Pulse Technology - Deployment Guide

## Quick Start

This is a production-ready Next.js 16 employment platform with Supabase backend.

### Prerequisites
- Node.js 18+ and npm
- Supabase account with project created
- Vercel account (for deployment)

### Local Development

1. **Clone and install dependencies:**
```bash
npm install
```

2. **Set up environment variables:**
Create `.env.local` file with your Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

3. **Run development server:**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Database Setup

The database schema is automatically created. If you need to recreate it:

1. Go to your Supabase project's SQL editor
2. Run the SQL migration script in the schema setup section
3. Ensure RLS policies are enabled

### Build & Production

```bash
npm run build
npm run start
```

### Deploy to Vercel

1. **Connect GitHub repository:**
   - Push code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Import project from GitHub

2. **Configure environment variables in Vercel:**
   - Add `NEXT_PUBLIC_SUPABASE_URL`
   - Add `NEXT_PUBLIC_SUPABASE_ANON_KEY`

3. **Deploy:**
   - Vercel will automatically build and deploy on push to main branch

## Features

### User Roles
- **Job Seeker**: Browse jobs, apply, save positions, track applications
- **Employer**: Post jobs, manage applications, create company profile
- **Admin**: Monitor platform, manage users, verify companies

### Core Pages
- `/` - Landing page
- `/auth/login` - Login
- `/auth/sign-up` - Registration
- `/dashboard` - Job seeker dashboard
- `/dashboard/employer` - Employer dashboard
- `/dashboard/admin` - Admin panel
- `/dashboard/messages` - Messaging
- `/dashboard/jobs/[id]` - Job details

### Database Tables
- `profiles` - User profiles with role
- `companies` - Employer companies
- `jobs` - Job postings
- `applications` - Job applications
- `saved_jobs` - Saved job listings
- `messages` - Direct messaging
- `notifications` - User notifications
- `job_categories` - Job categories

## Troubleshooting

### Build fails with TypeScript errors
- Check that all environment variables are set
- Run `npm install` to ensure all dependencies are installed
- Clear `.next` directory and rebuild

### Images not loading
- Ensure `next.config.js` has the correct image domains
- Check Supabase blob storage URL is accessible

### Authentication not working
- Verify Supabase URL and anon key are correct
- Check email confirmation is disabled in Supabase auth settings (if desired)
- Ensure auth callback URL is configured correctly

### Database errors
- Verify RLS policies are enabled on all tables
- Check that the current user has permission to access the table
- Review Supabase query logs for detailed errors

## Performance Tips

1. Use the production build (`npm run build` + `npm run start`)
2. Enable image optimization in `next.config.js`
3. Configure Supabase connection pooling
4. Use database indexes on frequently queried columns

## Security

- All database operations use RLS (Row-Level Security)
- User data is scoped to authenticated user only
- Passwords are hashed by Supabase Auth
- API routes validate user authentication
- Environment variables are never exposed to client

## Support

For issues or questions:
1. Check the GitHub issues
2. Review Supabase documentation: https://supabase.com/docs
3. Check Next.js docs: https://nextjs.org/docs
