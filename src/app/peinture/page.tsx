"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Peinture() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */} 
      <div className="relative h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat" 
     style={{ backgroundImage: "url('/img/anfane_04.jpg')", backgroundBlendMode: "multiply" }}>
        {/* Overlay sombre pour améliorer la visibilité */}
  

        <motion.div className="relative z-1 text-center text-white px-6" 
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8 }}>
            <h1 className="text-6xl font-extrabold drop-shadow-lg">Nos Services de Peinture</h1>
            <p className="text-xl mt-4 max-w-2xl mx-auto">
            Pour des finitions impeccables et durables adaptées à vos besoins.
            </p>
            <Link href="/contact">
            <motion.button whileHover={{ scale: 1.1 }} 
                            className="mt-6 px-8 py-4 bg-gray-700 text-white rounded-lg shadow-lg hover:bg-gray-800 transition">
                Demandez un Devis Gratuit
            </motion.button>
            </Link>
        </motion.div>
        </div>

      {/* Types de Peinture */}
      <section className="py-20 px-6 md:px-20">
        <motion.h2 className="text-5xl font-bold text-center text-gray-900" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>Types de Peinture</motion.h2>
        <p className="text-lg mt-6 text-center text-gray-700 max-w-3xl mx-auto">Découvrez nos solutions de peinture adaptées à chaque espace.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-10">
          {["Peinture Intérieure", "Peinture Extérieure", "Peinture Écologique"].map((type, index) => (
            <motion.div whileHover={{ scale: 1.05, y: -5 }} key={index} className="p-8 bg-white bg-opacity-90 backdrop-blur-lg rounded-xl shadow-md hover:shadow-xl transition">
              <h4 className="text-gray-700 text-2xl font-semibold">{type}</h4>
              <p className="text-gray-700 mt-4">Apportez une touche unique avec nos peintures adaptées et performantes.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Nos Réalisations */}
      <section className="py-20 px-6 md:px-20 bg-gray-900">
        <motion.h2 className="text-white text-5xl font-bold text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          Nos Réalisations
        </motion.h2>
        <p className="text-white text-lg mt-6 text-center max-w-3xl mx-auto">
          Découvrez nos projets de peinture pour des maisons, bureaux et locaux professionnels.
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-10">
          {["peinture_salon.jpg", "peinture_chambre.jpg", "peinture_bureau.jpg"].map((img, index) => (
            <motion.div whileHover={{ scale: 1.05, y: -5 }} key={index} className="bg-white bg-opacity-90 backdrop-blur-lg shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
              <motion.div className="overflow-hidden" whileHover={{ scale: 1.05 }}>
                <Image src={`/img/${img}`} width={400} height={250} alt="Projet Peinture" className="w-full transition-transform duration-300" />
              </motion.div>
              <div className="p-6">
                <h4 className="text-2xl font-semibold text-gray-900">Projet {index + 1}</h4>
                <p className="text-gray-600 mt-4">Nous avons appliqué des peintures haut de gamme avec précision pour un rendu durable et esthétique.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Techniques de Peinture */}
      <section className="py-20 px-6 md:px-20 text-gray-900 text-center bg-gray-50">
        <motion.h2 className="text-5xl font-bold" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>Nos Techniques de Peinture</motion.h2>
        <p className="text-lg mt-6 max-w-4xl mx-auto">Nous utilisons des méthodes modernes pour des résultats parfaits.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-10">
          {["Application au Pistolet", "Peinture au Rouleau", "Peinture à Effet Décoratif"].map((technique, index) => (
            <motion.div whileHover={{ scale: 1.05, y: -5 }} key={index} className="p-8 bg-white bg-opacity-90 backdrop-blur-lg rounded-xl shadow-md hover:shadow-xl transition">
              <h4 className="text-2xl font-semibold">{technique}</h4>
              <p className="text-gray-700 mt-4">Des finitions précises et adaptées à chaque projet.</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}