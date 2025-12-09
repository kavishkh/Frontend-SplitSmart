export default function handler(request, response) {
  response.status(200).json({ 
    status: 'ok', 
    message: 'SplitSmart frontend is running successfully!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
}