import { Users, Shield, Handshake, Activity } from 'lucide-react'

    const highlights = [
      {
        icon: <Users className="h-8 w-8" />,
        title: 'Authentic Connections',
        description: 'Build real relationships through shared experiences'
      },
      {
        icon: <Activity className="h-8 w-8" />,
        title: 'Mission-Based Activities',
        description: 'Engage in meaningful activities with purpose'
      },
      {
        icon: <Shield className="h-8 w-8" />,
        title: 'Safety & Trust',
        description: 'Verified members and safety-first approach'
      },
      {
        icon: <Handshake className="h-8 w-8" />,
        title: 'Inclusive Community',
        description: 'Open to all, fostering diversity and inclusion'
      }
    ]

    export default function KeyHighlights() {
      return (
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose DECKBROS?
              </h2>
              <p className="text-lg text-gray-600 mb-12">
                Discover what makes our community special
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-50 rounded-lg"
                >
                  <div className="mx-auto h-12 w-12 text-indigo-600 mb-4">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }
