"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Plaquiste() {
  return (
    <div className="bg-gray-50">
 

      <div className="relative h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat" 
     style={{ backgroundImage: "url('/img/anfane_04.jpg')", backgroundBlendMode: "multiply" }}>
        {/* Overlay sombre pour améliorer la visibilité */}
  

        <motion.div className="relative z-1 text-center text-white px-6" 
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8 }}>
            <h1 className="text-6xl font-extrabold drop-shadow-lg">Service de Plaquiste</h1>
            <p className="text-xl mt-4 max-w-2xl mx-auto">
            Expertise et précision pour des espaces sur mesure.
            </p>
            <Link href="/contact">
            <motion.button whileHover={{ scale: 1.1 }} 
                            className="mt-6 px-8 py-4 bg-gray-700 text-white rounded-lg shadow-lg hover:bg-gray-800 transition">
                Demandez un Devis Gratuit
            </motion.button>
            </Link>
        </motion.div>
        </div>

      {/* Présentation du Service */}
      <section className="py-20 px-6 md:px-20">
        <motion.h2 className="text-5xl font-bold text-center text-gray-900" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>Pourquoi choisir nos services de plaquiste ?</motion.h2>
        <p className="text-lg mt-6 text-center text-gray-700 max-w-3xl mx-auto">
          Nous allions savoir-faire et innovation pour garantir une finition impeccable et un service irréprochable.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-10">
          {["Installation de Cloisons Sèches", "Création de Plafonds Suspendus", "Finitions et Enduits"].map((type, index) => (
            <motion.div whileHover={{ scale: 1.05, y: -5 }} key={index} className="p-8 bg-white bg-opacity-90 backdrop-blur-lg rounded-xl shadow-md hover:shadow-xl transition">
              <h4 className="text-gray-700 text-2xl font-semibold">{type}</h4>
              <p className="text-gray-700 mt-4">Des solutions adaptées à vos besoins avec une qualité professionnelle.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Nos Réalisations */}
      <section className="py-20 px-6 md:px-20 bg-gray-900">
        <motion.h2 className="text-white text-5xl font-bold text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>Nos Réalisations</motion.h2>
        <p className="text-white text-lg mt-6 text-center max-w-3xl mx-auto">
          Découvrez nos travaux réalisés pour des habitations et des locaux professionnels.
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-10">
          {["plaquiste_car_01.jpg", "plaquiste_car_02.jpg", "plaquiste_car_03.jpg"].map((img, index) => (
            <motion.div whileHover={{ scale: 1.05, y: -5 }} key={index} className="bg-white bg-opacity-90 backdrop-blur-lg shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
              <motion.div className="overflow-hidden" whileHover={{ scale: 1.05 }}>
                <Image src={`/img/${img}`} width={400} height={250} alt="Projet Plaquiste" className="w-full transition-transform duration-300" />
              </motion.div>
              <div className="p-6">
                <h4 className="text-2xl font-semibold text-gray-900">Projet {index + 1}</h4>
                <p className="text-gray-600 mt-4">Un travail de précision pour garantir un rendu esthétique et fonctionnel.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Engagements et Expertise */}
      <section className="py-20 px-6 md:px-20 text-gray-900 text-center bg-gray-50">
        <motion.h2 className="text-5xl font-bold" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>Nos Engagements</motion.h2>
        <p className="text-lg mt-6 max-w-4xl mx-auto">Nous mettons un point d'honneur à offrir un travail soigné et conforme aux normes du bâtiment.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-10">
          {["Précision et Finition", "Maîtrise des Matériaux", "Communication et Service Client"].map((engagement, index) => (
            <motion.div whileHover={{ scale: 1.05, y: -5 }} key={index} className="p-8 bg-white bg-opacity-90 backdrop-blur-lg rounded-xl shadow-md hover:shadow-xl transition">
              <h4 className="text-2xl font-semibold">{engagement}</h4>
              <p className="text-gray-700 mt-4">Nous travaillons avec rigueur et professionnalisme pour un résultat parfait.</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
