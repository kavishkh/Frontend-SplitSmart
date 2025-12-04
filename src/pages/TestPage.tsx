import React from 'react';
import ApiTest from '@/components/ApiTest';
import { Header } from '@/components/Header';

const TestPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">API Connection Test</h1>
        <ApiTest />
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">How this works</h2>
          <p className="mb-2">
            This page tests the connection between the frontend and backend using Vite's proxy configuration.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>The frontend makes a request to <code className="bg-gray-200 px-1 rounded">/api/test</code></li>
            <li>Vite proxies this request to <code className="bg-gray-200 px-1 rounded">http://localhost:5000/api/test</code></li>
            <li>The backend responds with test data</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default TestPage;