import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router';

interface StoryCardProps {
  title: string;
  excerpt: string;
  image: string;
  date?: string;
  category?: string;
  link: string;
  index?: number;
}

export function StoryCard({ title, excerpt, image, date, category, link, index = 0 }: StoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {category && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-[#C5A572] text-white text-xs font-medium rounded-full">
            {category}
          </div>
        )}
      </div>
      <div className="p-6">
        {date && (
          <div className="flex items-center text-sm text-[#8B8478] mb-3">
            <Calendar size={14} className="mr-2" />
            {date}
          </div>
        )}
        <h3 className="font-serif text-xl text-[#1A2B47] mb-3 group-hover:text-[#C5A572] transition-colors">
          {title}
        </h3>
        <p className="text-[#8B8478] leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>
        <Link
          to={link}
          className="inline-flex items-center text-[#C5A572] hover:text-[#9E7E4A] transition-colors group/link"
        >
          Read More
          <ArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" size={16} />
        </Link>
      </div>
    </motion.div>
  );
}
