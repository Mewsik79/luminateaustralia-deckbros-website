import { Clock, MapPin, User, DollarSign } from 'lucide-react'
    import { Link } from 'react-router-dom'

    interface MissionCardProps {
      id: string
      title: string
      description: string
      location: string
      date: string
      time: string
      cost: number
      host: {
        id: string
        name: string
        rating: number
        verified: boolean
      }
      participants: number
      imageSrc?: string
    }

    export default function MissionCard({
      id,
      title,
      description,
      location,
      date,
      time,
      cost,
      host,
      participants,
      imageSrc
    }: MissionCardProps) {
      const formattedDate = new Date(date).toLocaleDateString('en-AU', {
        weekday: 'short',
        day: 'numeric',
        month: 'short'
      })

      return (
        <Link to={`/missions/${id}`} className="block">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            {imageSrc && (
              <div className="h-48 bg-gray-100">
                <img
                  src={imageSrc}
                  alt={title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 mb-4">{description}</p>

              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{location}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{formattedDate} at {time}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span>{host.name}</span>
                  {host.verified && (
                    <span className="ml-1 text-indigo-600">✓</span>
                  )}
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 mr-2" />
                  <span>{cost === 0 ? 'Free' : `$${cost}`}</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <span>{participants} participants</span>
                </div>
                <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
                  Join Mission
                </button>
              </div>
            </div>
          </div>
        </Link>
      )
    }
