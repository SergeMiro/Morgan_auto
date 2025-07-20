import { Button } from '@/components/ui/button'
import { Search, Shield, Clock, Award, Star, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  const featuredCars = [
    {
      id: 1,
      make: 'BMW',
      model: 'Série 3',
      year: 2023,
      price: 35000,
      mileage: 15000,
      image: '/images/bmw-3-series.jpg',
    },
    {
      id: 2,
      make: 'Mercedes',
      model: 'Classe C',
      year: 2023,
      price: 42000,
      mileage: 8000,
      image: '/images/mercedes-c-class.jpg',
    },
    {
      id: 3,
      make: 'Audi',
      model: 'A4',
      year: 2022,
      price: 38000,
      mileage: 20000,
      image: '/images/audi-a4.jpg',
    },
  ]

  const services = [
    {
      icon: Shield,
      title: 'Garantie 12 mois',
      description: 'Tous nos véhicules bénéficient d\'une garantie complète',
    },
    {
      icon: Clock,
      title: 'Livraison rapide',
      description: 'Votre véhicule livré en 48h partout en France',
    },
    {
      icon: Award,
      title: 'Certification qualité',
      description: 'Contrôle technique complet de 150 points',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-navy-900 to-navy-700">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Votre prochaine voiture d'occasion
              <span className="text-orange-500"> vous attend</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Découvrez notre sélection de véhicules d'occasion haut de gamme, 
              inspectés et garantis. Financement sur-mesure disponible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Voir le catalogue
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy-900">
                Estimer ma reprise
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-white py-8 -mt-8 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Trouvez votre véhicule idéal
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <select className="border border-gray-300 rounded-md px-3 py-2">
                <option>Marque</option>
                <option>BMW</option>
                <option>Mercedes</option>
                <option>Audi</option>
              </select>
              <select className="border border-gray-300 rounded-md px-3 py-2">
                <option>Prix max</option>
                <option>20 000 €</option>
                <option>30 000 €</option>
                <option>50 000 €</option>
              </select>
              <select className="border border-gray-300 rounded-md px-3 py-2">
                <option>Kilométrage</option>
                <option>Moins de 50 000 km</option>
                <option>Moins de 100 000 km</option>
              </select>
              <Button className="w-full">
                <Search className="h-4 w-4 mr-2" />
                Rechercher
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos véhicules vedettes
            </h2>
            <p className="text-lg text-gray-600">
              Une sélection rigoureuse des meilleurs véhicules disponibles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-video bg-gray-200 relative">
                  <Image
                    src={car.image}
                    alt={`${car.make} ${car.model}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {car.make} {car.model}
                  </h3>
                  <p className="text-gray-600 mb-4">{car.year} • {car.mileage.toLocaleString()} km</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-500">
                      {car.price.toLocaleString()} €
                    </span>
                    <Button size="sm">
                      Voir détails
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/catalogue">
              <Button variant="outline" className="text-orange-500 border-orange-500 hover:bg-orange-500">
                Voir tout le catalogue
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi choisir MorganAuto ?
            </h2>
            <p className="text-lg text-gray-600">
              Un service complet pour votre tranquillité d'esprit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <service.icon className="h-8 w-8 text-orange-500" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos clients témoignent
            </h2>
            <p className="text-lg text-gray-600">
              Plus de 500 clients satisfaits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Excellente expérience avec MorganAuto. Le véhicule était exactement comme décrit, 
                  et le service client est irréprochable."
                </p>
                <p className="font-semibold text-gray-900">Jean D.</p>
                <p className="text-sm text-gray-600">Client depuis 2023</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à trouver votre prochaine voiture ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Réservez un essai ou demandez un devis personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              Réserver un essai
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy-900">
              Demander un devis
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}