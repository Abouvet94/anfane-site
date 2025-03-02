"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Isolation() {
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
            <h1 className="text-6xl font-extrabold drop-shadow-lg">Isolation de Qualité, Confort Assuré</h1>
            <p className="text-xl mt-4 max-w-2xl mx-auto">
            Transformez votre espace en un havre de paix thermique et acoustique grâce à notre expertise.
            </p>
            <Link href="/contact">
            <motion.button whileHover={{ scale: 1.1 }} 
                            className="mt-6 px-8 py-4 bg-gray-700 text-white rounded-lg shadow-lg hover:bg-gray-800 transition">
                Demandez un Devis Gratuit
            </motion.button>
            </Link>
        </motion.div>
        </div>

 

      {/* Types d’Isolation */}
      <section className="py-20 px-6 md:px-20">
        <motion.h2 className="text-5xl font-bold text-center text-gray-900" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>Types d’Isolation</motion.h2>
        <p className="text-lg mt-6 text-center text-gray-700 max-w-3xl mx-auto">Découvrez les différentes méthodes d’isolation adaptées à votre besoin.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-10">
          {["Isolation Thermique", "Isolation Acoustique", "Isolation Écologique"].map((type, index) => (
            <motion.div whileHover={{ scale: 1.05, y: -5 }} key={index} className="p-8 bg-white bg-opacity-90 backdrop-blur-lg rounded-xl shadow-md hover:shadow-xl transition">
              <h4 className="text-gray-700 text-2xl font-semibold">{type}</h4>
              <p className="text-gray-700 mt-4">Optimisez votre confort avec des solutions performantes et adaptées.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Nos Réalisations */}
      <section className="py-20 px-6 md:px-20 bg-gray-900 ">
        <motion.h2 className="text-white text-5xl font-bold text-center text-gray-900" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>Nos Réalisations</motion.h2>
        <p className="text-white text-lg mt-6 text-center text-gray-700 max-w-3xl mx-auto">Découvrez nos travaux d’isolation pour des maisons, appartements et combles.</p>
        <div className="mt-12 grid md:grid-cols-3 gap-10">
          {["isolation_1.jpg", "isolation_6.jpg", "isolation_7.jpg"].map((img, index) => (
            <motion.div whileHover={{ scale: 1.05, y: -5 }} key={index} className="bg-white bg-opacity-90 backdrop-blur-lg shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
              <motion.div className="overflow-hidden" whileHover={{ scale: 1.05 }}>
                <Image src={`/img/${img}`} width={400} height={250} alt="Projet Isolation" className="w-full transition-transform duration-300" />
              </motion.div>
              <div className="p-6">
                <h4 className="text-2xl font-semibold text-gray-900">Projet {index + 1}</h4>
                <p className="text-gray-600 mt-4">Découvrez comment nous avons optimisé l'efficacité énergétique et acoustique de ce projet.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Normes d’Isolation */}
      <section className="py-20 px-6 md:px-20 text-gray-900 text-center bg-gray-50">
        <motion.h2 className="text-5xl font-bold" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>Normes d’Isolation</motion.h2>
        <p className="text-lg mt-6 max-w-4xl mx-auto">Nos solutions respectent les normes actuelles pour garantir sécurité et efficacité.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-10">
          {["RT 2020 - Performance Énergétique", "RE 2020 - Économie d'Énergie", "Label BBC - Bâtiment Basse Consommation"].map((norme, index) => (
            <motion.div whileHover={{ scale: 1.05, y: -5 }} key={index} className="p-8 bg-white bg-opacity-90 backdrop-blur-lg rounded-xl shadow-md hover:shadow-xl transition">
              <h4 className="text-2xl font-semibold">{norme}</h4>
              <p className="text-gray-700 mt-4">Conformité avec les exigences en matière d’isolation et de performance thermique.</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}