import { useState } from 'react'
import { Search, Filter, Plus } from 'lucide-react'
import Navbar from '../components/Navbar'
import MissionCard from '../components/MissionCard'
import Footer from '../components/Footer'

const sampleMissions = [
  {
    id: '1',
    title: 'Weekend Fishing Trip',
    description: 'Join us for a relaxing fishing trip at Lake Serene',
    location: 'Lake Serene, CA',
    date: '2023-11-18',
    time: '09:00',
    cost: 0,
    host: {
      id: 'h1',
      name: 'John D',
      rating: 4.8,
      verified: true
    },
    participants: 3,
    imageSrc: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29',
    category: 'Outdoor'
  },
  {
    id: '2',
    title: 'DIY Deck Building Workshop',
    description: 'Learn basic deck building skills in a hands-on workshop',
    location: '123 Main St, Springfield',
    date: '2023-11-19',
    time: '10:00',
    cost: 20,
    host: {
      id: 'h2',
      name: 'Mike T',
      rating: 4.5,
      verified: false
    },
    participants: 5,
    imageSrc: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    category: 'Skills'
  }
]

export default function Missions() {
  const [filters, setFilters] = useState({
    search: '',
    location: '',
    date: '',
    category: '',
    cost: ''
  })

  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters(prev => ({ ...prev, [name]: value }))
  }

  const clearFilters = () => {
    setFilters({
      search: '',
      location: '',
      date: '',
      category: '',
      cost: ''
    })
  }

  // Get approved missions from local storage
  const [missions, setMissions] = useState(() => {
    const storedMissions = JSON.parse(localStorage.getItem('missions') || '[]')
    return storedMissions.filter(mission => mission.status === 'approved')
  })

  const filteredMissions = (missions.length > 0 ? missions : sampleMissions).filter(mission => {
    return (
      mission.title.toLowerCase().includes(filters.search.toLowerCase()) &&
      (filters.location ? mission.location.includes(filters.location) : true) &&
      (filters.date ? mission.date === filters.date : true) &&
      (filters.category ? mission.category === filters.category : true) &&
      (filters.cost === 'free' ? mission.cost === 0 : true) &&
      (filters.cost === 'paid' ? mission.cost > 0 : true)
    )
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-1 relative">
              <input
                type="text"
                name="search"
                value={filters.search}
                onChange={handleFilterChange}
                placeholder="Search missions..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button
              onClick={clearFilters}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              Clear Filters
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <input
                type="text"
                name="location"
                value={filters.location}
                onChange={handleFilterChange}
                placeholder="Location"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
              <Filter className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            <input
              type="date"
              name="date"
              value={filters.date}
              onChange={handleFilterChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />

            <select
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">All Categories</option>
              <option value="Outdoor">Outdoor</option>
              <option value="Skills">Skills & Hobbies</option>
              <option value="Automotive">Automotive</option>
            </select>

            <select
              name="cost"
              value={filters.cost}
              onChange={handleFilterChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">All Costs</option>
              <option value="free">Free</option>
              <option value="paid">Paid</option>
            </select>
          </div>
        </div>

        {/* Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMissions.map(mission => (
            <MissionCard key={mission.id} {...mission} />
          ))}
        </div>

        {/* Create Mission Button */}
        <div className="fixed bottom-8 right-8">
          <a
            href="/missions/create"
            className="flex items-center justify-center w-14 h-14 bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
          >
            <Plus className="h-6 w-6 text-white" />
          </a>
        </div>
      </div>

      <Footer />
    </div>
  )
}
