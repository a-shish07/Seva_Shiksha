import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="text-center">
        <div className="loader mb-4"></div>
        <p className="text-gray-600 text-lg font-medium">Loading...</p>
      </div>
    </div>
  )
}

export default LoadingSpinner