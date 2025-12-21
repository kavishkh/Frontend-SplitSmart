// Simple test script to verify backend connectivity
async function testBackendConnection() {
  const backendUrl = 'https://backend-split-smart.onrender.com';
  
  console.log('Testing connection to backend at:', backendUrl);
  
  try {
    // Test health endpoint
    const healthResponse = await fetch(`${backendUrl}/api/health`);
    console.log('Health check status:', healthResponse.status);
    
    if (healthResponse.ok) {
      const healthData = await healthResponse.json();
      console.log('Health check data:', healthData);
      console.log('✅ Backend connection successful!');
    } else {
      console.log('❌ Health check failed with status:', healthResponse.status);
    }
  } catch (error) {
    console.log('❌ Backend connection failed:', error.message);
  }
}

// Run the test
testBackendConnection();