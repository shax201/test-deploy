'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [backendMessage, setBackendMessage] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const fetchFromBackend = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await fetch('http://localhost:5000')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.text()
      setBackendMessage(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      console.error('Error fetching from backend:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // Auto-fetch on component mount
    fetchFromBackend()
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Next.js + NestJS Integration
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Frontend ↔ Backend Communication
          </h2>
          
          <div className="space-y-4">
            <button
              onClick={fetchFromBackend}
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              {loading ? 'Fetching...' : 'Fetch from Backend'}
            </button>

            {backendMessage && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-medium text-green-800 mb-2">Backend Response:</h3>
                <p className="text-green-700 font-mono">{backendMessage}</p>
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-medium text-red-800 mb-2">Error:</h3>
                <p className="text-red-700">{error}</p>
                <p className="text-sm text-red-600 mt-2">
                  Make sure the NestJS backend is running on port 5000
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Frontend (Next.js)</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Running on port 3000</li>
              <li>• React 18 with App Router</li>
              <li>• TypeScript support</li>
              <li>• Tailwind CSS styling</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Backend (NestJS)</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Running on port 5000</li>
              <li>• Express.js under the hood</li>
              <li>• TypeScript support</li>
              <li>• RESTful API endpoints</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
