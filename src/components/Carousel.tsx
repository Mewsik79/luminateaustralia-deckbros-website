import { useState, useEffect } from 'react'
    import { ChevronLeft, ChevronRight } from 'lucide-react'

    const images = [
      {
        src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac',
        alt: 'Group of friends building a deck',
        caption: 'Fostering genuine connections through shared experiences'
      },
      {
        src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
        alt: 'People working together on a project',
        caption: 'Building camaraderie one mission at a time'
      },
      {
        src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
        alt: 'Team celebrating a completed project',
        caption: 'Creating meaningful memories together'
      }
    ]

    export default function Carousel() {
      const [currentIndex, setCurrentIndex] = useState(0)
      const [isPaused, setIsPaused] = useState(false)

      useEffect(() => {
        if (isPaused) return
        const interval = setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % images.length)
        }, 20000)
        return () => clearInterval(interval)
      }, [isPaused])

      const goToPrevious = () => {
        setIsPaused(true)
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
        setTimeout(() => setIsPaused(false), 10000)
      }

      const goToNext = () => {
        setIsPaused(true)
        setCurrentIndex((prev) => (prev + 1) % images.length)
        setTimeout(() => setIsPaused(false), 10000)
      }

      return (
        <div className="relative h-[500px] overflow-hidden">
          <div
            className="absolute inset-0 transition-transform duration-1000"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="absolute w-full h-full"
                style={{ left: `${index * 100}%` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="text-center max-w-2xl px-4">
                    <h2 className="text-4xl font-bold text-white mb-6">
                      {image.caption}
                    </h2>
                    <a
                      href="/missions"
                      className="inline-block px-8 py-3 text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
                    >
                      Join the Movement
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/50 hover:bg-white/75 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/50 hover:bg-white/75 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )
    }
