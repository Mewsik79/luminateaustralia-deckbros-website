import { Facebook, Twitter, Instagram } from 'lucide-react'

    export default function Footer() {
      return (
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">DECKBROS</h3>
                <p className="text-sm text-gray-400">
                  Fostering genuine connections through shared experiences
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="/about" className="text-sm text-gray-400 hover:text-white">About</a></li>
                  <li><a href="/missions" className="text-sm text-gray-400 hover:text-white">Missions</a></li>
                  <li><a href="/partners" className="text-sm text-gray-400 hover:text-white">Partners</a></li>
                  <li><a href="/contact" className="text-sm text-gray-400 hover:text-white">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="/terms" className="text-sm text-gray-400 hover:text-white">Terms of Use</a></li>
                  <li><a href="/privacy" className="text-sm text-gray-400 hover:text-white">Privacy Policy</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} DECKBROS. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      )
    }
