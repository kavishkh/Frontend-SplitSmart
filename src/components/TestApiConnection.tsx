import React, { useState, useEffect } from 'react';

const TestApiConnection: React.FC = () => {
  const [apiResponse, setApiResponse] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const testApiConnection = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/test');
      const data = await response.json();
      setApiResponse(data);
    } catch (err) {
      setError('Failed to connect to the API');
      console.error('API connection error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    testApiConnection();
  }, []);

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-center">API Connection Test</h2>
      
      {loading && (
        <div className="text-center">
          <p>Testing connection...</p>
        </div>
      )}
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>{error}</p>
          <button 
            onClick={testApiConnection}
            className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Retry
          </button>
        </div>
      )}
      
      {apiResponse && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          <h3 className="font-bold">Success!</h3>
          <p>Message: {apiResponse.message}</p>
          <p>Timestamp: {apiResponse.timestamp}</p>
        </div>
      )}
      
      <button 
        onClick={testApiConnection}
        disabled={loading}
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
      >
        {loading ? 'Testing...' : 'Test API Connection'}
      </button>
    </div>
  );
};

export default TestApiConnection;