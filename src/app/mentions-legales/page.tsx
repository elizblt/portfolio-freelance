"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-arsen pt-20">
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Mentions légales
          </h1>
          <p className="text-gray-600">
            Informations légales concernant le site web d'Élise Boillat
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8"
        >
          {/* Éditeur du site */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Éditeur du site
            </h2>
            <div className="space-y-2 text-gray-700">
              <p><strong>Nom :</strong> Élise Boillat</p>
              <p><strong>Statut :</strong> Entreprise individuelle (Auto-entrepreneur)</p>
              <p><strong>SIRET :</strong> [À compléter]</p>
              <p><strong>Code APE :</strong> 6201Z - Programmation informatique</p>
              
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Adresse :</h3>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                  <p>Montauban, France</p>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold mb-2">Contact :</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-500" />
                    <a href="mailto:elise@example.com" className="text-blue-600 hover:underline">
                      elise@example.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-500" />
                    <a href="tel:+33612345678" className="text-blue-600 hover:underline">
                      +33 6 12 34 56 78
                    </a>
                  </div>
                </div>
              </div>

              <p className="mt-4">
                <strong>Numéro de TVA :</strong> Non applicable (régime de franchise en base de TVA)
              </p>
            </div>
          </section>

          {/* Hébergement */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Hébergement
            </h2>
            <div className="text-gray-700">
              <p><strong>Hébergeur :</strong> Netlify, Inc.</p>
              <p><strong>Adresse :</strong> 2325 3rd Street, Suite 215, San Francisco, CA 94107, USA</p>
              <p><strong>Site web :</strong> <a href="https://www.netlify.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.netlify.com</a></p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Propriété intellectuelle
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
                Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p>
                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite 
                sauf autorisation expresse d'Élise Boillat.
              </p>
            </div>
          </section>

          {/* Responsabilité */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Responsabilité
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, 
                mais peut toutefois contenir des inexactitudes ou des omissions.
              </p>
              <p>
                Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email, 
                en décrivant le problème de la manière la plus précise possible.
              </p>
            </div>
          </section>

          {/* Liens hypertextes */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Liens hypertextes
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Les sites internet peuvent offrir des liens vers d'autres sites internet ou d'autres ressources disponibles sur Internet. 
                Élise Boillat ne dispose d'aucun moyen pour contrôler les sites en connexion avec son site internet.
              </p>
              <p>
                Élise Boillat ne répond pas de la disponibilité de tels sites et sources externes, ni ne la garantit. 
                Elle ne peut être tenue pour responsable de tout dommage, de quelque nature que ce soit, résultant du contenu de ces sites ou sources externes.
              </p>
            </div>
          </section>

          {/* Droit applicable */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Droit applicable et juridiction compétente
            </h2>
            <div className="text-gray-700">
              <p>
                Tout litige en relation avec l'utilisation du site est soumis au droit français. 
                En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de Montauban.
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}