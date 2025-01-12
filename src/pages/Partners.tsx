import { Handshake, Users, Star, Award, Briefcase } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Partners() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Partner with DECKBROS
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join us in building genuine connections and making a positive social impact through shared experiences.
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700"
            >
              Become a Partner
            </a>
          </div>
        </div>

        {/* Why Partner Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Handshake className="h-8 w-8 mr-2 text-indigo-600" />
            Why Partner with DECKBROS?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Users className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Engaged Community
              </h3>
              <p className="text-gray-600">
                Reach a niche audience passionate about hands-on activities and building meaningful connections.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Star className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Brand Alignment
              </h3>
              <p className="text-gray-600">
                Showcase your products and services in authentic, real-life settings that resonate with your values.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Award className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Social Impact
              </h3>
              <p className="text-gray-600">
                Contribute to mental health initiatives and community building through meaningful partnerships.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Briefcase className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Flexible Models
              </h3>
              <p className="text-gray-600">
                Choose from various collaboration options tailored to your brand's goals and resources.
              </p>
            </div>
          </div>
        </div>

        {/* Partnership Tiers */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Handshake className="h-8 w-8 mr-2 text-indigo-600" />
            Partnership Tiers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Bronze */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Bronze
              </h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li>Logo placement on mission pages</li>
                <li>Mention in event recaps</li>
                <li>Single event sponsorship</li>
              </ul>
              <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                Learn More
              </button>
            </div>

            {/* Silver */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Silver
              </h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li>Multiple sponsored missions</li>
                <li>Brand presence in marketing</li>
                <li>Co-hosted events</li>
              </ul>
              <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                Learn More
              </button>
            </div>

            {/* Gold */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Gold
              </h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li>Ongoing event sponsorship</li>
                <li>Custom participant badges</li>
                <li>Skill-sharing workshops</li>
              </ul>
              <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                Learn More
              </button>
            </div>

            {/* Platinum */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Platinum
              </h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li>Exclusive long-term partnership</li>
                <li>Shared branding on features</li>
                <li>Media coverage & interviews</li>
              </ul>
              <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-gray-600 mb-6">
            Let's create meaningful connections together. Get in touch to discuss partnership opportunities.
          </p>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="Tell us about your partnership ideas"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  )
}
