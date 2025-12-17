# Deployment Instructions for SplitSmart Frontend

## Vercel Deployment with External Backend

This application is configured to work with an external backend deployed at `https://backend-split-smart.onrender.com`.

## Environment Variables Setup

When deploying to Vercel, you need to set the following environment variables in your Vercel project dashboard:

1. Go to your Vercel project dashboard
2. Navigate to Settings > Environment Variables
3. Add these environment variables:

```
VITE_BACKEND_URL=https://backend-split-smart.onrender.com
VITE_API_BASE_URL=https://backend-split-smart.onrender.com
```

## How It Works

- In development: The app uses `/api` as the base URL which gets proxied to `http://localhost:3000` via Vite's proxy configuration
- In production: The app uses the full backend URL directly (`https://backend-split-smart.onrender.com`)

## File Structure

- `.env` - Development environment variables
- `.env.production` - Production environment variables (not committed to repo)
- `.env.example` - Example environment variables for reference

## Notes

- Never commit actual environment files (especially `.env.production`) to the repository
- The `.vercelignore` file ensures environment files are not included in the deployment
- Environment variables should always be set in the Vercel dashboard for security