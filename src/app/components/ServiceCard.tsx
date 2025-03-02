import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  image: string;
  description: string;
}

export default function ServiceCard({ title, image, description }: ServiceCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition">
      <div className="relative w-full h-40">
        <Image src={image} alt={title} layout="fill" objectFit="cover" className="rounded-t-lg" />
      </div>
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
