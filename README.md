# SplitSmart - Frontend

This is the frontend application for SplitSmart, a expense splitting application built with React, TypeScript, and Vite.

## Deployment to Vercel

To deploy this application to Vercel, follow these steps:

1. Push your code to a GitHub repository
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Configure the project settings:
   - Framework Preset: Vite
   - Root Directory: ./ (or leave empty)
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

6. Add environment variables in the Vercel dashboard:
   - `BACKEND_URL`: The URL of your backend API (e.g., https://your-backend-app.herokuapp.com)

7. Deploy!

## Local Development

To run the application locally:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at http://localhost:5173

## Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Troubleshooting

If you're having issues running the website:

1. Make sure all dependencies are installed:
   ```bash
   npm install
   ```

2. Check for TypeScript errors:
   ```bash
   npm run build
   ```

3. Ensure your backend server is running if you're testing locally

4. Check the browser console for any JavaScript errors