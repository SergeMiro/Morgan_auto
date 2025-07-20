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
