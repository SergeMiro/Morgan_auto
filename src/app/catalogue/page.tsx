'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Filter, ChevronRight, Star, MapPin, Calendar, Zap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { formatPrice, formatMileage } from '@/lib/utils'

const mockVehicles = [
  {
    id: 1,
    make: 'BMW',
    model: 'Série 3',
    year: 2023,
    price: 35000,
    mileage: 15000,
    fuelType: 'Essence',
    transmission: 'Automatique',
    color: 'Noir',
    images: ['/images/bmw-3-series.jpg'],
    description: 'BMW Série 3 2023 en excellent état, full options',
    features: ['GPS', 'Climatisation', 'Toit ouvrant', 'Sièges cuir'],
    condition: 'Occasion',
    warranty: true,
    registration: 'AB-123-CD',
    power: 184,
    doors: 4,
    seats: 5,
    consumption: { city: 7.5, highway: 5.5, combined: 6.2 },
    co2: 145,
    isAvailable: true,
    isFeatured: true,
    slug: 'bmw-serie-3-2023',
  },
  {
    id: 2,
    make: 'Mercedes',
    model: 'Classe C',
    year: 2023,
    price: 42000,
    mileage: 8000,
    fuelType: 'Diesel',
    transmission: 'Automatique',
    color: 'Gris',
    images: ['/images/mercedes-c-class.jpg'],
    description: 'Mercedes Classe C 2023, très faible kilométrage',
    features: ['GPS', 'Climatisation', 'Caméra 360°', 'Sièges chauffants'],
    condition: 'Occasion',
    warranty: true,
    registration: 'EF-456-GH',
    power: 194,
    doors: 4,
    seats: 5,
    consumption: { city: 6.8, highway: 4.9, combined: 5.5 },
    co2: 135,
    isAvailable: true,
    isFeatured: true,
    slug: 'mercedes-classe-c-2023',
  },
  {
    id: 3,
    make: 'Audi',
    model: 'A4',
    year: 2022,
    price: 38000,
    mileage: 20000,
    fuelType: 'Hybride',
    transmission: 'Automatique',
    color: 'Bleu',
    images: ['/images/audi-a4.jpg'],
    description: 'Audi A4 2022 hybride, économique et performante',
    features: ['GPS', 'Climatisation', 'Sièges chauffants', 'Bluetooth'],
    condition: 'Occasion',
    warranty: true,
    registration: 'IJ-789-KL',
    power: 204,
    doors: 4,
    seats: 5,
    consumption: { city: 5.2, highway: 4.1, combined: 4.5 },
    co2: 105,
    isAvailable: true,
    isFeatured: false,
    slug: 'audi-a4-2022',
  },
  {
    id: 4,
    make: 'Volkswagen',
    model: 'Golf',
    year: 2021,
    price: 22000,
    mileage: 35000,
    fuelType: 'Essence',
    transmission: 'Manuelle',
    color: 'Blanc',
    images: ['/images/vw-golf.jpg'],
    description: 'VW Golf 2021, parfait état, entretien complet',
    features: ['GPS', 'Climatisation', 'Bluetooth', 'Radar de recul'],
    condition: 'Occasion',
    warranty: false,
    registration: 'MN-012-OP',
    power: 130,
    doors: 5,
    seats: 5,
    consumption: { city: 6.5, highway: 4.8, combined: 5.4 },
    co2: 125,
    isAvailable: true,
    isFeatured: false,
    slug: 'vw-golf-2021',
  },
  {
    id: 5,
    make: 'Peugeot',
    model: '308',
    year: 2022,
    price: 25000,
    mileage: 15000,
    fuelType: 'Essence',
    transmission: 'Automatique',
    color: 'Rouge',
    images: ['/images/peugeot-308.jpg'],
    description: 'Peugeot 308 2022, très bon état, garantie 2 ans',
    features: ['GPS', 'Climatisation', 'Radar avant/arrière', 'Bluetooth'],
    condition: 'Occasion',
    warranty: true,
    registration: 'QR-345-ST',
    power: 130,
    doors: 5,
    seats: 5,
    consumption: { city: 6.2, highway: 4.5, combined: 5.1 },
    co2: 118,
    isAvailable: true,
    isFeatured: true,
    slug: 'peugeot-308-2022',
  },
]

export default function CataloguePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFuelType, setSelectedFuelType] = useState('all')
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100000 })
  const [showFilters, setShowFilters] = useState(false)

  const filteredVehicles = mockVehicles.filter(vehicle => {
    const matchesSearch = vehicle.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vehicle.model.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFuelType = selectedFuelType === 'all' || vehicle.fuelType === selectedFuelType
    const matchesPrice = vehicle.price >= priceRange.min && vehicle.price <= priceRange.max
    
    return matchesSearch && matchesFuelType && matchesPrice
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Nos véhicules disponibles</h1>
          <p className="text-gray-600">Trouvez la voiture de vos rêves parmi notre sélection</p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Rechercher une marque ou modèle..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              Filtres
            </Button>
          </div>

          {showFilters && (
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type de carburant
                  </label>
                  <select
                    value={selectedFuelType}
                    onChange={(e) => setSelectedFuelType(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">Tous</option>
                    <option value="Essence">Essence</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Hybride">Hybride</option>
                    <option value="Électrique">Électrique</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prix min
                  </label>
                  <Input
                    type="number"
                    value={priceRange.min}
                    onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prix max
                  </label>
                  <Input
                    type="number"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                    placeholder="100000"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mb-6">
          <p className="text-gray-600">
            {filteredVehicles.length} véhicule(s) trouvé(s)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map((vehicle) => (
            <div key={vehicle.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="relative">
                <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center rounded-t-lg">
                  <Zap className="w-12 h-12 text-gray-400" />
                </div>
                {vehicle.isFeatured && (
                  <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded-md text-xs font-medium">
                    À la une
                  </div>
                )}
              </div>

              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{vehicle.make} {vehicle.model}</h3>
                    <p className="text-sm text-gray-600">{vehicle.year} • {vehicle.condition}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-blue-600">{formatPrice(vehicle.price)}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    {vehicle.mileage} km
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-1" />
                    {vehicle.year}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Zap className="w-4 h-4 mr-1" />
                    {vehicle.fuelType}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{vehicle.condition}</span>
                  <Button variant="outline" size="sm">
                    Voir détails
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
