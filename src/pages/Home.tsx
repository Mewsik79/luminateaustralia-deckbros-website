import Navbar from '../components/Navbar'
    import Carousel from '../components/Carousel'
    import KeyHighlights from '../components/KeyHighlights'
    import MissionCard from '../components/MissionCard'
    import Footer from '../components/Footer'

    export default function Home() {
      const sampleMissions = [
        {
          title: 'Weekend Fishing Trip',
          description: 'Join us for a relaxing fishing trip at Lake Serene',
          location: 'Lake Serene, CA',
          date: 'Sat, Nov 18',
          host: {
            name: 'John D',
            rating: 4.8,
            verified: true
          },
          participants: 3
        },
        {
          title: 'DIY Deck Building Workshop',
          description: 'Learn basic deck building skills in a hands-on workshop',
          location: '123 Main St, Springfield',
          date: 'Sun, Nov 19',
          host: {
            name: 'Mike T',
            rating: 4.5,
            verified: false
          },
          participants: 5
        }
      ]

      return (
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Carousel />
          <KeyHighlights />
          
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Featured Missions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleMissions.map((mission, index) => (
                <MissionCard key={index} {...mission} />
              ))}
            </div>
          </div>

          <Footer />
        </div>
      )
    }
