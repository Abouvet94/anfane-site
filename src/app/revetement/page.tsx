"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Revetement() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat" 
     style={{ backgroundImage: "url('/img/revetement_main.jpg')", backgroundBlendMode: "multiply" }}>
        {/* Overlay sombre pour améliorer la visibilité */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <motion.div className="relative z-10 text-center text-white px-6" 
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8 }}>
            <h1 className="text-6xl font-extrabold drop-shadow-lg">Nos Services de Revêtement</h1>
            <p className="text-xl mt-4 max-w-2xl mx-auto">
            Transformez vos espaces avec des revêtements modernes et durables.
            </p>
            <Link href="/contact">
            <motion.button whileHover={{ scale: 1.1 }} 
                            className="mt-6 px-8 py-4 bg-gray-700 text-white rounded-lg shadow-lg hover:bg-gray-800 transition">
                Demandez un Devis Gratuit
            </motion.button>
            </Link>
        </motion.div>
        </div>


      {/* Types de Revêtements */}
      <section className="py-20 px-6 md:px-20">
        <motion.h2 className="text-5xl font-bold text-center text-gray-900" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>Types de Revêtements</motion.h2>
        <p className="text-lg mt-6 text-center text-gray-700 max-w-3xl mx-auto">Découvrez nos solutions adaptées à tous vos besoins d'intérieur.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-10">
          {["Revêtement Mural", "Revêtement de Sol", "Revêtement Écologique"].map((type, index) => (
            <motion.div whileHover={{ scale: 1.05, y: -5 }} key={index} className="p-8 bg-white bg-opacity-90 backdrop-blur-lg rounded-xl shadow-md hover:shadow-xl transition">
              <h4 className="text-gray-700 text-2xl font-semibold">{type}</h4>
              <p className="text-gray-700 mt-4">Des solutions adaptées pour améliorer le confort et l'esthétique de vos espaces.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Nos Réalisations */}
      <section className="py-20 px-6 md:px-20 bg-gray-900">
        <motion.h2 className="text-white text-5xl font-bold text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>Nos Réalisations</motion.h2>
        <p className="text-white text-lg mt-6 text-center max-w-3xl mx-auto">Découvrez comment nos solutions de revêtement ont transformé divers espaces.</p>
        <div className="mt-12 grid md:grid-cols-3 gap-10">
          {["revetement_maison.jpg", "revetement_chambre.jpg", "revetement_bureau.jpg"].map((img, index) => (
            <motion.div whileHover={{ scale: 1.05, y: -5 }} key={index} className="bg-white bg-opacity-90 backdrop-blur-lg shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
              <motion.div className="overflow-hidden" whileHover={{ scale: 1.05 }}>
                <Image src={`/img/${img}`} width={400} height={250} alt="Projet Revêtement" className="w-full transition-transform duration-300" />
              </motion.div>
              <div className="p-6">
                <h4 className="text-2xl font-semibold text-gray-900">Projet {index + 1}</h4>
                <p className="text-gray-600 mt-4">Découvrez nos finitions haut de gamme et nos installations précises.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Techniques de Revêtement */}
      <section className="py-20 px-6 md:px-20 text-gray-900 text-center bg-gray-50">
        <motion.h2 className="text-5xl font-bold" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>Nos Techniques de Revêtement</motion.h2>
        <p className="text-lg mt-6 max-w-4xl mx-auto">Nous appliquons les meilleures techniques pour des résultats impeccables.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-10">
          {["Pose de Papier Peint", "Installation de Panneaux Décoratifs", "Revêtement de Sol"].map((technique, index) => (
            <motion.div whileHover={{ scale: 1.05, y: -5 }} key={index} className="p-8 bg-white bg-opacity-90 backdrop-blur-lg rounded-xl shadow-md hover:shadow-xl transition">
              <h4 className="text-2xl font-semibold">{technique}</h4>
              <p className="text-gray-700 mt-4">Des méthodes professionnelles adaptées à chaque besoin.</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
