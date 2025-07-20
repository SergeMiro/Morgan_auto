import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              <span className="text-orange-500">Morgan</span>Auto
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Votre concessionnaire automobile de confiance à Dijon. 
              Spécialisé dans les véhicules d'occasion haut de gamme.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange-500">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-orange-500 text-sm">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/catalogue" className="text-gray-300 hover:text-orange-500 text-sm">
                  Catalogue
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-orange-500 text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/partenaires" className="text-gray-300 hover:text-orange-500 text-sm">
                  Partenaires
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-orange-500 text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/financement" className="text-gray-300 hover:text-orange-500 text-sm">
                  Financement
                </Link>
              </li>
              <li>
                <Link href="/reprise" className="text-gray-300 hover:text-orange-500 text-sm">
                  Reprise
                </Link>
              </li>
              <li>
                <Link href="/garantie" className="text-gray-300 hover:text-orange-500 text-sm">
                  Garantie
                </Link>
              </li>
              <li>
                <Link href="/entretien" className="text-gray-300 hover:text-orange-500 text-sm">
                  Entretien
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 text-orange-500" />
                <div>
                  <p className="text-sm text-gray-300">12 Rue de la République</p>
                  <p className="text-sm text-gray-300">21000 Dijon</p>
                </div>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-orange-500" />
                <a href="tel:0380505050" className="text-sm text-gray-300 hover:text-orange-500">
                  03 80 50 50 50
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-orange-500" />
                <a href="mailto:contact@morganauto.fr" className="text-sm text-gray-300 hover:text-orange-500">
                  contact@morganauto.fr
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-orange-500" />
                <div>
                  <p className="text-sm text-gray-300">Lun-Sam: 9h-19h</p>
                  <p className="text-sm text-gray-300">Dim: 10h-18h</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300">
              © 2024 MorganAuto. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/mentions-legales" className="text-sm text-gray-300 hover:text-orange-500">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="text-sm text-gray-300 hover:text-orange-500">
                Politique de confidentialité
              </Link>
              <Link href="/cgv" className="text-sm text-gray-300 hover:text-orange-500">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}