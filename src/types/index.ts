export interface Vehicle {
  id: string
  make: string
  model: string
  year: number
  price: number
  mileage: number
  fuelType: 'Essence' | 'Diesel' | 'Hybride' | 'Électrique'
  transmission: 'Manuelle' | 'Automatique'
  color: string
  images: string[]
  description: string
  features: string[]
  condition: 'Neuf' | 'Occasion'
  warranty: boolean
  registration: string
  power: number
  doors: number
  seats: number
  consumption: {
    city: number
    highway: number
    combined: number
  }
  co2: number
  createdAt: Date
  updatedAt: Date
  isAvailable: boolean
  isFeatured: boolean
  slug: string
}

export interface Partner {
  id: string
  name: string
  type: 'Financement' | 'Assurance' | 'Entretien' | 'Carrosserie'
  description: string
  logo: string
  website: string
  phone: string
  email: string
  address: {
    street: string
    city: string
    postalCode: string
  }
  coordinates: {
    lat: number
    lng: number
  }
  services: string[]
  isActive: boolean
  createdAt: Date
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  author: {
    name: string
    avatar: string
  }
  tags: string[]
  publishedAt: Date
  updatedAt: Date
  isPublished: boolean
  readingTime: number
}

export interface Reservation {
  id: string
  vehicleId: string
  customer: {
    firstName: string
    lastName: string
    email: string
    phone: string
  }
  preferredDate: Date
  preferredTime: string
  message: string
  status: 'pending' | 'confirmed' | 'cancelled'
  createdAt: Date
}

export interface QuoteRequest {
  id: string
  vehicleId?: string
  customer: {
    firstName: string
    lastName: string
    email: string
    phone: string
  }
  tradeIn?: {
    make: string
    model: string
    year: number
    mileage: number
  }
  financing: boolean
  message: string
  status: 'pending' | 'processed' | 'closed'
  createdAt: Date
}

export interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'user'
  createdAt: Date
}