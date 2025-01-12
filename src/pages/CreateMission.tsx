import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Calendar, MapPin, DollarSign, Users, Image, AlertCircle } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const categories = [
  'Outdoor',
  'Skills & Hobbies', 
  'Automotive',
  'Personal Development'
]

const skillLevels = [
  'Beginner',
  'Intermediate',
  'Advanced'
]

export default function CreateMission() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    location: '',
    date: '',
    time: '',
    cost: 0,
    skillLevel: '',
    image: null,
    capacity: '',
    disclaimers: ''
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData(prev => ({
        ...prev,
        image: URL.createObjectURL(file)
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.title) newErrors.title = 'Mission title is required'
    if (!formData.description) newErrors.description = 'Description is required'
    if (!formData.location) newErrors.location = 'Location is required'
    if (!formData.date) newErrors.date = 'Date is required'
    if (formData.date && new Date(formData.date) < new Date()) {
      newErrors.date = 'Date must be in the future'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      // Save mission to local storage
      const missions = JSON.parse(localStorage.getItem('missions') || '[]')
      const newMission = {
        ...formData,
        id: Date.now().toString(),
        status: 'pending',
        createdAt: new Date().toISOString()
      }
      missions.push(newMission)
      localStorage.setItem('missions', JSON.stringify(missions))
      
      // Redirect to confirmation page
      navigate('/missions/confirmation')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Create a Mission
        </h1>
        <p className="text-gray-600 mb-8">
          Fill out the details below and share your activity with the DECKBROS community.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Mission Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mission Title
            </label>
            <div className="relative">
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Weekend Fishing Trip"
                className={`w-full px-4 py-2 border ${
                  errors.title ? 'border-red-500' : 'border-gray-300'
                } rounded-lg focus:ring-2 focus:ring-indigo-500`}
              />
              {errors.title && (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                </div>
              )}
            </div>
            {errors.title && (
              <p className="mt-2 text-sm text-red-600">{errors.title}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Provide a brief overview of what you'll be doing, what to bring, and any relevant info."
              rows={4}
              className={`w-full px-4 py-2 border ${
                errors.description ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:ring-2 focus:ring-indigo-500`}
            />
            {errors.description && (
              <p className="mt-2 text-sm text-red-600">{errors.description}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <div className="relative">
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Sydney, Australia"
                className={`w-full px-4 py-2 border ${
                  errors.location ? 'border-red-500' : 'border-gray-300'
                } rounded-lg focus:ring-2 focus:ring-indigo-500`}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-gray-400" />
              </div>
            </div>
            {errors.location && (
              <p className="mt-2 text-sm text-red-600">{errors.location}</p>
            )}
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full px-4 py-2 border ${
                    errors.date ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:ring-2 focus:ring-indigo-500`}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
              </div>
              {errors.date && (
                <p className="mt-2 text-sm text-red-600">{errors.date}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time (optional)
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Cost */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cost
            </label>
            <div className="relative">
              <input
                type="number"
                name="cost"
                value={formData.cost}
                onChange={handleChange}
                placeholder="0"
                min={0}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <DollarSign className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Skill Level */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Skill Level (optional)
            </label>
            <select
              name="skillLevel"
              value={formData.skillLevel}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select skill level</option>
              {skillLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cover Photo (optional)
            </label>
            <div className="flex items-center space-x-4">
              <label className="cursor-pointer">
                <span className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                  Upload Image
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
              {formData.image && (
                <img 
                  src={formData.image}
                  alt="Preview"
                  className="h-16 w-16 object-cover rounded-lg"
                />
              )}
            </div>
          </div>

          {/* Capacity */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Participant Limit (optional)
            </label>
            <div className="relative">
              <input
                type="number"
                name="capacity"
                value={formData.capacity}
                onChange={handleChange}
                placeholder="Unlimited"
                min={1}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Users className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Disclaimers */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Notes (optional)
            </label>
            <textarea
              name="disclaimers"
              value={formData.disclaimers}
              onChange={handleChange}
              placeholder="E.g., Bring your own tools, safety requirements, etc."
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Submit */}
          <div className="pt-8">
            <button
              type="submit"
              className="w-full px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
            >
              Create Mission
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  )
}
