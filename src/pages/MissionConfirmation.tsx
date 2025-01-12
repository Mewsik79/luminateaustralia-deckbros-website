import { CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MissionConfirmation() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-green-600" />
          <h1 className="mt-4 text-3xl font-bold text-gray-900">
            Mission Submitted!
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Your mission has been successfully submitted for review. Our team will review it and once approved, it will be visible on the Missions page.
          </p>
          <div className="mt-8 space-x-4">
            <Link
              to="/missions"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              View Missions
            </Link>
            <Link
              to="/missions/create"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
            >
              Create Another Mission
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
