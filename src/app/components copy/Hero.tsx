import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  ctaPrimary?: { text: string; link: string };
  ctaSecondary?: { text: string; link: string };
  overlay?: boolean;
}

export function Hero({
  title,
  subtitle,
  description,
  image,
  ctaPrimary,
  ctaSecondary,
  overlay = true,
}: HeroProps) {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#1A2B47]/80 to-[#1A2B47]/60" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {subtitle && (
              <p className="text-[#C5A572] font-medium mb-4 tracking-wider uppercase text-sm">
                {subtitle}
              </p>
            )}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              {title}
            </h1>
            {description && (
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
                {description}
              </p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {ctaPrimary && (
              <Link
                to={ctaPrimary.link}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#C5A572] text-white rounded-md hover:bg-[#9E7E4A] transition-all duration-200 shadow-lg hover:shadow-xl group"
              >
                {ctaPrimary.text}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            )}
            {ctaSecondary && (
              <Link
                to={ctaSecondary.link}
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-md hover:bg-white/20 transition-all duration-200 border border-white/30"
              >
                {ctaSecondary.text}
              </Link>
            )}
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FAF8F5] to-transparent" />
    </section>
  );
}
