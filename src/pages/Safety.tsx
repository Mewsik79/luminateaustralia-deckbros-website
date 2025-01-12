import { ChevronDown, Shield, Users, Handshake, AlertCircle, MapPin, CheckCircle } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Safety() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Safety First, Always
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            At DECKBROS, we're committed to building a safe and positive community. Here's how we help ensure every mission is a great experience.
          </p>
        </div>

        {/* Core Safety Guidelines */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Shield className="h-8 w-8 mr-2 text-indigo-600" />
            Core Safety Guidelines
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Before the Mission */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Before the Mission
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  Research the activity and requirements
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  Verify host and participant profiles
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  Plan logistics and share your plans
                </li>
              </ul>
            </div>

            {/* During the Mission */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                During the Mission
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  Arrive prepared with proper gear
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  Stay aware of each other's well-being
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  Follow host guidelines and local laws
                </li>
              </ul>
            </div>

            {/* After the Mission */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                After the Mission
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  Provide honest feedback and ratings
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  Report any safety concerns
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  Stay connected with your new community
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Verification & Trust */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Users className="h-8 w-8 mr-2 text-indigo-600" />
            Verification & Trust
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                ID Verification
              </h3>
              <p className="text-gray-600 mb-4">
                Increase trust and accountability by verifying your identity through Google, Facebook, or by uploading a government-issued ID.
              </p>
              <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                Get Verified
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Reputation System
              </h3>
              <p className="text-gray-600">
                Our rating and feedback system helps the community identify reliable and respectful members. Display your skills and experience to build trust.
              </p>
            </div>
          </div>
        </div>

        {/* Emergency Contact & Safety */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <AlertCircle className="h-8 w-8 mr-2 text-indigo-600" />
            Emergency & Safety
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Emergency Contact
              </h3>
              <p className="text-gray-600 mb-4">
                Add an emergency contact in your profile, and we'll automatically notify them with mission details when you join an activity.
              </p>
              <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                Add Contact
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Safety Tips
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>Meet in public or group-friendly locations</li>
                <li>Share your whereabouts with someone you trust</li>
                <li>Check weather and prepare accordingly</li>
                <li>Don't over-exert yourself</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Community Standards */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Handshake className="h-8 w-8 mr-2 text-indigo-600" />
            Community Standards
          </h2>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Respect & Behavior
                </h3>
                <p className="text-gray-600">
                  We have zero tolerance for harassment, discrimination, or hate speech. Treat everyone with respect and kindness.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Legal Compliance
                </h3>
                <p className="text-gray-600">
                  All missions must comply with local laws and regulations. Illegal activities are strictly prohibited.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Reporting Issues
                </h3>
                <p className="text-gray-600">
                  If you experience or witness any misconduct, please report it immediately through our reporting tools or by emailing safety@deckbros.com.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Disclaimer
          </h2>
          <p className="text-gray-600">
            DECKBROS is a platform that facilitates connections between members. We do not directly organize or supervise missions. Participants assume full responsibility for their own safety and actions during activities.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}
