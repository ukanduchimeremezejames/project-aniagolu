import { motion } from 'motion/react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image?: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C5A572] via-[#D4B88C] to-[#C5A572]" />

      <div className="space-y-12">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative flex flex-col md:flex-row items-start md:items-center ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 bg-[#C5A572] rounded-full border-4 border-white shadow-lg z-10" />

            {/* Content */}
            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-20 md:pl-0`}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <span className="inline-block px-4 py-1 bg-[#1A2B47] text-white rounded-full text-sm font-medium mb-3">
                  {event.year}
                </span>
                <h3 className="font-serif text-xl text-[#1A2B47] mb-2">{event.title}</h3>
                <p className="text-[#8B8478] leading-relaxed">{event.description}</p>
                {event.image && (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="mt-4 w-full h-48 object-cover rounded-md"
                  />
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
