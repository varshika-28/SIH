import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] space-y-8 text-center">
      <h2 className="text-4xl font-extrabold text-green-800">
        Village Wisdom, Verified
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl">
        GraminVeda is an AI-driven hyper-local business advisory and financial decision-support system designed to help rural micro-entrepreneurs evaluate business ideas before committing scarce capital.
      </p>
      
      <div className="bg-white shadow-md rounded-xl p-8 max-w-md w-full border border-gray-100">
        <h3 className="text-2xl font-bold mb-4">Start Your Journey</h3>
        <p className="text-gray-500 mb-6">
          Find out if your business idea is financially viable and discover the risks involved.
        </p>
        <Link 
          to="/profile"
          className="inline-block w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Start Assessment
        </Link>
      </div>
    </div>
  )
}
