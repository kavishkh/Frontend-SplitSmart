// Vercel API proxy for SplitSmart
// This proxy handles all /api and /auth requests and forwards them to your backend

export default async function handler(request, response) {
  // Get the backend URL from environment variables or use default
  const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:3000';
  
  // Extract the path from the request
  const { path } = request.query;
  const fullPath = Array.isArray(path) ? path.join('/') : path;
  
  // Construct the full URL to the backend
  const backendUrl = `${BACKEND_URL}/${fullPath}${request.url.split('?')[1] ? '?' + request.url.split('?')[1] : ''}`;
  
  try {
    // Prepare headers for the backend request
    const headers = { ...request.headers };
    
    // Remove headers that shouldn't be forwarded
    delete headers.host;
    delete headers['content-length'];
    
    // Make the request to the backend
    const backendResponse = await fetch(backendUrl, {
      method: request.method,
      headers,
      body: ['GET', 'HEAD'].includes(request.method) ? undefined : JSON.stringify(request.body),
    });
    
    // Get the response data
    const data = await backendResponse.text();
    
    // Set the response headers
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    // Forward the status code and data
    response.status(backendResponse.status).send(data);
  } catch (error) {
    console.error('Proxy error:', error);
    response.status(500).json({ 
      error: 'Proxy error', 
      message: error.message 
    });
  }
}

export const config = {
  api: {
    bodyParser: true,
  },
};