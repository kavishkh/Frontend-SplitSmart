import React, { useState, useEffect } from 'react';

const ApiTest: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/test');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="p-4 border rounded-lg bg-gray-50">
      <h2 className="text-xl font-bold mb-2">API Test Component</h2>
      <p className="mb-2">Testing connection to backend API:</p>
      <div className="bg-white p-3 rounded shadow">
        <p><strong>Message:</strong> {data?.message}</p>
        <p><strong>Timestamp:</strong> {data?.timestamp}</p>
        <p><strong>Status:</strong> {data?.success ? 'Success' : 'Failed'}</p>
      </div>
    </div>
  );
};

export default ApiTest;