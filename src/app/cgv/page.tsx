"use client";

import { motion } from "framer-motion";
import { ArrowLeft, FileText, Clock, Euro, Shield } from "lucide-react";
import Link from "next/link";

export default function CGV() {
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
            <FileText className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Conditions Générales de Vente
            </h1>
          </div>
          <p className="text-gray-600">
            Conditions applicables aux prestations de développement web
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
          {/* Préambule */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              1. Préambule
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Les présentes Conditions Générales de Vente (CGV)
                s&rsquo;appliquent à toutes les prestations de services de
                développement web réalisées par Élise Boillat,
                auto-entrepreneur.
              </p>
              <p>
                Toute commande implique l&rsquo;acceptation sans réserve des
                présentes conditions et la renonciation à ses propres conditions
                d&rsquo;achat ou autres conditions.
              </p>
            </div>
          </section>

          {/* Prestations */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              2. Prestations proposées
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>Élise Boillat propose les prestations suivantes :</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Développement de sites web sur mesure</li>
                <li>Création d&rsquo;applications web</li>
                <li>Développement e-commerce</li>
                <li>Maintenance et support technique</li>
                <li>Optimisation et refonte de sites existants</li>
                <li>Formation et conseil</li>
              </ul>
            </div>
          </section>

          {/* Commandes et devis */}
          <section>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
              <FileText className="h-6 w-6 text-blue-600" />
              3. Commandes et devis
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Devis :</strong> Tout projet fait l&rsquo;objet
                d&rsquo;un devis détaillé gratuit, valable 30 jours. Le devis
                signé et accompagné de l&rsquo;acompte vaut commande.
              </p>
              <p>
                <strong>Bon de commande :</strong> La commande ne sera
                considérée comme définitive qu&rsquo;après signature du devis et
                réception de l&rsquo;acompte.
              </p>
              <p>
                <strong>Modifications :</strong> Toute modification en cours de
                réalisation fera l&rsquo;objet d&rsquo;un avenant au contrat
                initial.
              </p>
            </div>
          </section>

          {/* Prix et facturation */}
          <section>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
              <Euro className="h-6 w-6 text-green-600" />
              4. Prix et facturation
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Prix :</strong> Les prix sont exprimés en euros, hors
                taxes (TVA non applicable - article 293 B du CGI).
              </p>
              <p>
                <strong>Modalités de paiement :</strong>
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Acompte de 50% à la commande</li>
                <li>Solde à la livraison du projet</li>
                <li>Paiement par virement bancaire ou chèque</li>
                <li>Délai de paiement : 30 jours maximum</li>
              </ul>
              <p>
                <strong>Retard de paiement :</strong> En cas de retard, des
                pénalités de 3 fois le taux d&rsquo;intérêt légal seront
                appliquées, plus une indemnité forfaitaire de 40€ pour frais de
                recouvrement.
              </p>
            </div>
          </section>

          {/* Délais */}
          <section>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
              <Clock className="h-6 w-6 text-orange-600" />
              5. Délais d&rsquo;exécution
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Les délais annoncés sont donnés à titre indicatif et courent à
                compter de la signature du devis et de la réception de
                l&rsquo;acompte.
              </p>
              <p>Ces délais peuvent être prolongés en cas de :</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Retard dans la fourniture des éléments nécessaires par le
                  client
                </li>
                <li>Modifications demandées en cours de réalisation</li>
                <li>Cas de force majeure</li>
              </ul>
            </div>
          </section>

          {/* Obligations du client */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              6. Obligations du client
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>Le client s&rsquo;engage à :</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Fournir tous les éléments nécessaires à la réalisation du
                  projet
                </li>
                <li>
                  Répondre dans les délais convenus aux demandes de validation
                </li>
                <li>
                  S&rsquo;assurer qu&rsquo;il dispose des droits sur tous les
                  contenus fournis
                </li>
                <li>Respecter les échéances de paiement</li>
                <li>Informer de tout changement pouvant impacter le projet</li>
              </ul>
            </div>
          </section>

          {/* Livraison et validation */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              7. Livraison et validation
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Livraison :</strong> La livraison s&rsquo;effectue par
                mise en ligne sur un serveur de test ou par remise des fichiers
                selon les modalités convenues.
              </p>
              <p>
                <strong>Validation :</strong> Le client dispose de 15 jours pour
                valider le travail livré. Passé ce délai sans retour, la
                prestation sera considérée comme acceptée.
              </p>
              <p>
                <strong>Corrections :</strong> Les corrections mineures sont
                incluses (2 séries maximum). Les modifications importantes
                feront l&rsquo;objet d&rsquo;un devis complémentaire.
              </p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
              <Shield className="h-6 w-6 text-purple-600" />
              8. Propriété intellectuelle
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Transfert de propriété :</strong> La propriété
                intellectuelle du travail réalisé est transférée au client après
                paiement intégral.
              </p>
              <p>
                <strong>Droit de référence :</strong> Élise Boillat se réserve
                le droit de mentionner sa participation au projet à des fins de
                référence et de promotion.
              </p>
              <p>
                <strong>Code source :</strong> Le client devient propriétaire du
                code développé spécifiquement pour son projet, à
                l&rsquo;exclusion des frameworks et librairies tiers.
              </p>
            </div>
          </section>

          {/* Garanties */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              9. Garanties et maintenance
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Garantie :</strong> Une garantie de bon fonctionnement
                de 3 mois est offerte à compter de la livraison, couvrant les
                dysfonctionnements liés au développement.
              </p>
              <p>
                <strong>Maintenance :</strong> La maintenance (mises à jour,
                sauvegardes, sécurité) peut faire l&rsquo;objet d&rsquo;un
                contrat séparé.
              </p>
              <p>
                <strong>Exclusions :</strong> Sont exclus de la garantie les
                problèmes liés à :
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>L&rsquo;hébergement et l&rsquo;infrastructure</li>
                <li>Les modifications apportées par le client ou des tiers</li>
                <li>L&rsquo;utilisation non conforme du site</li>
              </ul>
            </div>
          </section>

          {/* Résiliation */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              10. Résiliation
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                En cas de manquement grave de l&rsquo;une des parties à ses
                obligations, le contrat pourra être résilié de plein droit 8
                jours après mise en demeure restée sans effet.
              </p>
              <p>
                En cas de résiliation, le client reste redevable des sommes dues
                pour le travail effectué jusqu&rsquo;à la date de résiliation.
              </p>
            </div>
          </section>

          {/* Responsabilité */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              11. Limitation de responsabilité
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                La responsabilité d&rsquo;Élise Boillat est limitée au montant
                du contrat. Elle ne peut être tenue responsable des dommages
                indirects.
              </p>
              <p>
                Le client est seul responsable de l&rsquo;usage qu&rsquo;il fait
                du site livré et de son contenu.
              </p>
            </div>
          </section>

          {/* Droit applicable */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              12. Droit applicable et litiges
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Les présentes CGV sont régies par le droit français. En cas de
                litige, une solution amiable sera recherchée avant toute action
                judiciaire.
              </p>
              <p>
                À défaut, les tribunaux de Montauban seront seuls compétents.
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
