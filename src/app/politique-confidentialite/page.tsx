"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Shield, Eye, Lock, Mail } from "lucide-react";
import Link from "next/link";

export default function PolitiqueConfidentialite() {
  return (
    <div className="bg-arsen min-h-screen pt-20">
      <div className="mx-auto max-w-4xl px-4 py-16 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à l&rsquo;accueil
          </Link>

          <div className="mb-4 flex items-center gap-3">
            <Shield className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Politique de confidentialité
            </h1>
          </div>
          <p className="text-gray-600">
            Comment nous collectons, utilisons et protégeons vos données
            personnelles
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-8 rounded-2xl bg-white p-8 shadow-lg md:p-12"
        >
          {/* Introduction */}
          <section>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
              <Eye className="h-6 w-6 text-blue-600" />
              1. Introduction
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Élise Boillat, développeuse web freelance, s&rsquo;engage à
                protéger la confidentialité de vos données personnelles. Cette
                politique de confidentialité explique comment nous collectons,
                utilisons, stockons et protégeons vos informations lorsque vous
                utilisez notre site web.
              </p>
              <p>
                En utilisant ce site, vous acceptez les pratiques décrites dans
                cette politique de confidentialité.
              </p>
            </div>
          </section>

          {/* Données collectées */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              2. Données personnelles collectées
            </h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold">
                Données que vous nous fournissez :
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Nom de votre entreprise</li>
                <li>Message et informations sur votre projet</li>
              </ul>

              <h3 className="mt-6 text-lg font-semibold">
                Données collectées automatiquement :
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Adresse IP</li>
                <li>Type de navigateur et version</li>
                <li>Pages visitées et temps passé sur le site</li>
                <li>Données de navigation (cookies techniques)</li>
              </ul>
            </div>
          </section>

          {/* Utilisation des données */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              3. Utilisation de vos données
            </h2>
            <div className="text-gray-700">
              <p className="mb-4">
                Nous utilisons vos données personnelles pour :
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Répondre à vos demandes de contact et de devis</li>
                <li>Vous fournir nos services de développement web</li>
                <li>Améliorer notre site web et nos services</li>
                <li>
                  Vous envoyer des informations sur nos services (avec votre
                  consentement)
                </li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </div>
          </section>

          {/* Base légale */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              4. Base légale du traitement
            </h2>
            <div className="text-gray-700">
              <p className="mb-4">Le traitement de vos données repose sur :</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Intérêt légitime :</strong> pour répondre à vos
                  demandes et améliorer nos services
                </li>
                <li>
                  <strong>Exécution d&rsquo;un contrat :</strong> pour la
                  fourniture de nos services
                </li>
                <li>
                  <strong>Consentement :</strong> pour l&rsquo;envoi de
                  communications marketing
                </li>
                <li>
                  <strong>Obligation légale :</strong> pour la conservation de
                  certaines données
                </li>
              </ul>
            </div>
          </section>

          {/* Partage des données */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              5. Partage de vos données
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Nous ne vendons, ne louons ni ne partageons vos données
                personnelles avec des tiers, sauf dans les cas suivants :
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Prestataires techniques (hébergement, analytics) sous contrat
                  de confidentialité
                </li>
                <li>
                  Obligations légales ou demandes des autorités compétentes
                </li>
                <li>Protection de nos droits et sécurité</li>
              </ul>
            </div>
          </section>

          {/* Conservation */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              6. Conservation des données
            </h2>
            <div className="text-gray-700">
              <p className="mb-4">Nous conservons vos données :</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Données de contact :</strong> 3 ans après le dernier
                  contact
                </li>
                <li>
                  <strong>Données contractuelles :</strong> 10 ans (obligations
                  comptables)
                </li>
                <li>
                  <strong>Données de navigation :</strong> 13 mois maximum
                </li>
              </ul>
            </div>
          </section>

          {/* Sécurité */}
          <section>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
              <Lock className="h-6 w-6 text-blue-600" />
              7. Sécurité des données
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Nous mettons en œuvre des mesures techniques et
                organisationnelles appropriées pour protéger vos données contre
                tout accès non autorisé, modification, divulgation ou
                destruction.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Chiffrement des communications (HTTPS)</li>
                <li>Accès restreint aux données</li>
                <li>Sauvegarde sécurisée</li>
                <li>Mise à jour régulière des systèmes</li>
              </ul>
            </div>
          </section>

          {/* Vos droits */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              8. Vos droits (RGPD)
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Droit d&rsquo;accès :</strong> connaître les données
                  que nous détenons sur vous
                </li>
                <li>
                  <strong>Droit de rectification :</strong> corriger vos données
                  inexactes
                </li>
                <li>
                  <strong>Droit à l&rsquo;effacement :</strong> supprimer vos
                  données (sous conditions)
                </li>
                <li>
                  <strong>Droit à la limitation :</strong> limiter le traitement
                  de vos données
                </li>
                <li>
                  <strong>Droit à la portabilité :</strong> récupérer vos
                  données dans un format structuré
                </li>
                <li>
                  <strong>Droit d&rsquo;opposition :</strong> vous opposer au
                  traitement (sous conditions)
                </li>
                <li>
                  <strong>Droit de retrait du consentement :</strong> retirer
                  votre consentement à tout moment
                </li>
              </ul>

              <div className="mt-4 rounded-lg bg-blue-50 p-4">
                <p className="mb-2 font-semibold text-blue-900">
                  Pour exercer vos droits :
                </p>
                <div className="flex items-center gap-2 text-blue-800">
                  <Mail className="h-4 w-4" />
                  <a
                    href="mailto:elise@example.com"
                    className="hover:underline"
                  >
                    elise@example.com
                  </a>
                </div>
                <p className="mt-2 text-sm text-blue-700">
                  Délai de réponse : 1 mois maximum
                </p>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              9. Cookies
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Ce site utilise uniquement des cookies techniques nécessaires au
                bon fonctionnement du site. Aucun cookie de tracking ou
                publicitaire n&rsquo;est utilisé.
              </p>
              <p>
                Vous pouvez configurer votre navigateur pour refuser les
                cookies, mais cela pourrait affecter certaines fonctionnalités
                du site.
              </p>
            </div>
          </section>

          {/* Contact DPO */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              10. Contact et réclamations
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Pour toute question concernant cette politique de
                confidentialité ou l&rsquo;exercice de vos droits :
              </p>

              <div className="rounded-lg bg-gray-50 p-4">
                <p className="mb-2 font-semibold">
                  Élise Boillat - Responsable des données
                </p>
                <div className="mb-1 flex items-center gap-2">
                  <Mail className="h-4 w-4 text-blue-500" />
                  <a
                    href="mailto:elise@example.com"
                    className="text-blue-600 hover:underline"
                  >
                    elise@example.com
                  </a>
                </div>
              </div>

              <p>
                Vous avez également le droit d&rsquo;introduire une réclamation
                auprès de la Commission Nationale de l&rsquo;Informatique et des
                Libertés (CNIL) si vous estimez que vos droits ne sont pas
                respectés.
              </p>
            </div>
          </section>

          {/* Modifications */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              11. Modifications de cette politique
            </h2>
            <div className="text-gray-700">
              <p>
                Cette politique de confidentialité peut être modifiée
                occasionnellement. Nous vous informerons de tout changement
                significatif par email ou via un avis sur notre site web.
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
