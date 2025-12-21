# Frontend Deployment Configuration

## Environment Variables

The frontend application uses the following environment variables:

- `VITE_API_BASE_URL`: The base URL for API requests (defaults to your deployed backend)

These variables are configured in:
- `.env` - For development
- `.env.production` - For production

Both files are already configured to use your deployed backend at `https://backend-split-smart.onrender.com`.

## Deployment to Render

The frontend is configured to be deployed as a static site to Render. The build process will:

1. Install dependencies with `npm install`
2. Build the application with `npm run build`
3. Serve the built files from the `dist` directory

## API Configuration

The frontend makes API requests to your deployed backend. All API calls are prefixed with the `VITE_API_BASE_URL` environment variable.

For example:
- A request to `/api/users` will be sent to `https://backend-split-smart.onrender.com/users`

## CORS Configuration

The backend is configured to handle CORS requests, so there should be no issues with cross-origin requests from the frontend.

## Troubleshooting

If you encounter issues with API requests:

1. Verify that the backend is running at `https://backend-split-smart.onrender.com`
2. Check that the environment variables are correctly set
3. Ensure that the backend MongoDB connection is working
4. Check the browser's developer console for any error messages

## Updating the Backend URL

If you need to change the backend URL:

1. Update the `VITE_API_BASE_URL` variable in both `.env` and `.env.production` files
2. Redeploy the frontend application