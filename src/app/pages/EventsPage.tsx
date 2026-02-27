import { Hero } from '../components/Hero';
import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';
import heroImage from '../../assets/aniagolu.jpg';

export function EventsPage() {
  const upcomingEvents = [
    {
      title: 'Annual Aniagolu Memorial Lecture',
      date: 'April 15, 2026',
      time: '2:00 PM - 5:00 PM',
      location: 'Supreme Court Complex, Abuja',
      description: 'Distinguished legal scholars will discuss contemporary issues in constitutional law and judicial practice, honoring Justice Aniagolu\'s legacy.',
      attendees: '200+ expected',
      type: 'Lecture',
      featured: true,
    },
    {
      title: 'Legal Research Workshop',
      date: 'May 20, 2026',
      time: '10:00 AM - 4:00 PM',
      location: 'University of Nigeria, Nsukka',
      description: 'A hands-on workshop on legal research methods using the Aniagolu archives for law students and researchers.',
      attendees: '50 participants',
      type: 'Workshop',
      featured: false,
    },
    {
      title: 'Justice and Democracy Symposium',
      date: 'June 8, 2026',
      time: '9:00 AM - 6:00 PM',
      location: 'Lagos Bar Center',
      description: 'A full-day symposium exploring the relationship between the judiciary and democratic governance in modern Nigeria.',
      attendees: '300+ expected',
      type: 'Symposium',
      featured: true,
    },
    {
      title: 'Archives Open House',
      date: 'July 12, 2026',
      time: '10:00 AM - 2:00 PM',
      location: 'Aniagolu Foundation Library',
      description: 'Public access to the archives with guided tours and presentations on preservation methods.',
      attendees: 'Open to public',
      type: 'Open House',
      featured: false,
    },
  ];

  const pastEvents = [
    {
      title: 'Constitutional Law Conference 2025',
      date: 'November 2025',
      description: 'Three-day conference on constitutional interpretation featuring presentations by leading legal scholars.',
      image: heroImage,
    },
    {
      title: 'Youth Mentorship Program Launch',
      date: 'September 2025',
      description: 'Launch of a mentorship program connecting young lawyers with senior practitioners.',
      image: heroImage,
    },
    {
      title: 'Book Launch: Aniagolu Biography',
      date: 'July 2025',
      description: 'Launch of comprehensive biography examining Justice Aniagolu\'s life and contributions.',
      image: heroImage,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Events & Programs"
        subtitle="Join Us"
        description="Participate in lectures, symposiums, and educational programs honoring the legacy of Justice Aniagolu."
        image={heroImage}
      />

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A2B47] mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-[#8B8478] max-w-2xl mx-auto">
              Join us for engaging programs that explore law, justice, and the legacy of judicial excellence
            </p>
          </div>

          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${
                  event.featured ? 'bg-[#1A2B47] text-white' : 'bg-[#FAF8F5]'
                }`}
              >
                <div className="md:flex">
                  <div className="md:w-1/4 p-8 flex flex-col justify-center items-center border-r border-white/10">
                    <div className={`text-center ${event.featured ? 'text-white' : 'text-[#1A2B47]'}`}>
                      <div className="text-4xl font-serif mb-2">
                        {new Date(event.date).getDate()}
                      </div>
                      <div className="text-sm uppercase tracking-wider">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      </div>
                      {event.featured && (
                        <div className="mt-4 px-3 py-1 bg-[#C5A572] text-white text-xs rounded-full inline-block">
                          Featured
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="md:w-3/4 p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className={`font-serif text-2xl mb-2 ${event.featured ? 'text-white' : 'text-[#1A2B47]'}`}>
                          {event.title}
                        </h3>
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          event.featured ? 'bg-white/20 text-white' : 'bg-[#C5A572] text-white'
                        }`}>
                          {event.type}
                        </div>
                      </div>
                    </div>
                    <p className={`mb-6 leading-relaxed ${event.featured ? 'text-gray-200' : 'text-[#8B8478]'}`}>
                      {event.description}
                    </p>
                    <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 ${event.featured ? 'text-gray-200' : 'text-[#8B8478]'}`}>
                      <div className="flex items-center gap-2">
                        <Clock size={16} className={event.featured ? 'text-[#C5A572]' : 'text-[#1A2B47]'} />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className={event.featured ? 'text-[#C5A572]' : 'text-[#1A2B47]'} />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={16} className={event.featured ? 'text-[#C5A572]' : 'text-[#1A2B47]'} />
                        <span className="text-sm">{event.attendees}</span>
                      </div>
                    </div>
                    <button className={`px-6 py-3 rounded-md transition-all inline-flex items-center gap-2 group ${
                      event.featured
                        ? 'bg-[#C5A572] text-white hover:bg-[#9E7E4A]'
                        : 'bg-[#1A2B47] text-white hover:bg-[#C5A572]'
                    }`}>
                      Register Now
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A2B47] mb-4">
              Past Events
            </h2>
            <p className="text-lg text-[#8B8478] max-w-2xl mx-auto">
              A look back at successful programs and initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-[#C5A572] mb-3">
                    <Calendar size={14} className="mr-2" />
                    {event.date}
                  </div>
                  <h3 className="font-serif text-xl text-[#1A2B47] mb-2">{event.title}</h3>
                  <p className="text-[#8B8478] leading-relaxed">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-[#1A2B47] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Stay Updated on Events
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Subscribe to our newsletter to receive updates on upcoming events, programs, and initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-md text-[#1A2B47] focus:outline-none focus:ring-2 focus:ring-[#C5A572]"
              />
              <button className="px-8 py-4 bg-[#C5A572] text-white rounded-md hover:bg-[#9E7E4A] transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
