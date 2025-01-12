import { Home, Users, Plus, Shield, Handshake } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-800">DECKBROS</span>
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link
                to="/missions"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:border-b-2 hover:border-gray-500"
              >
                <Users className="mr-2 h-4 w-4" />
                Missions
              </Link>
              <Link
                to="/missions/create"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:border-b-2 hover:border-gray-500"
              >
                <Plus className="mr-2 h-4 w-4" />
                Create Mission
              </Link>
              <Link
                to="/safety"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:border-b-2 hover:border-gray-500"
              >
                <Shield className="mr-2 h-4 w-4" />
                Safety
              </Link>
              <Link
                to="/partners"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:border-b-2 hover:border-gray-500"
              >
                <Handshake className="mr-2 h-4 w-4" />
                Partners
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
