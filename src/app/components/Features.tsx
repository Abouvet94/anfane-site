import { LucideShieldCheck, LucideUsers, LucidePalette, LucideLayoutGrid, LucideClock, LucideDollarSign } from "lucide-react";

const features = [
  { icon: <LucideShieldCheck size={32} />, title: "Expertise Exceptionnelle", text: "Maîtrise en plaquisterie, peinture, et revêtement avec des finitions impeccables." },
  { icon: <LucideUsers size={32} />, title: "Service Client Personnalisé", text: "Approche sur mesure, professionnalisme et attention garantie." },
  { icon: <LucidePalette size={32} />, title: "Créativité Inspirante", text: "Des espaces uniques où chaque couleur trouve sa place." },
  { icon: <LucideLayoutGrid size={32} />, title: "Solutions Complètes", text: "De la plaquisterie à la peinture, des solutions adaptées à chaque projet." },
  { icon: <LucideClock size={32} />, title: "Respect des Délais", text: "Engagement à livrer dans les temps avec un suivi professionnel." },
  { icon: <LucideDollarSign size={32} />, title: "Rapport Qualité-Prix", text: "Services de haute qualité à des prix compétitifs." },
];

export default function Features() {
  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Pourquoi nous choisir ?</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-4 p-4 bg-gray-800 rounded-lg shadow-md">
            <div className="text-blue-400">{feature.icon}</div>
            <div>
              <h4 className="text-lg font-semibold">{feature.title}</h4>
              <p className="text-sm">{feature.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
