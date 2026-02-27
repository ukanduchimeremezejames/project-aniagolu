import { useState } from 'react';
import { Hero } from '../components/Hero';
import { motion } from 'motion/react';
import { Play, Image as ImageIcon, Film, Mic } from 'lucide-react';
import heroImage from '../../assets/aniagolu.jpg';

export function MediaPage() {
  const [activeTab, setActiveTab] = useState<'videos' | 'photos' | 'audio'>('videos');

  const videos = [
    {
      title: 'Documentary: Life and Legacy',
      description: 'A comprehensive documentary exploring the life, career, and lasting impact of Justice Aniagolu.',
      thumbnail: heroImage,
      duration: '45:30',
      date: 'March 2024',
    },
    {
      title: 'Supreme Court Historical Archive',
      description: 'Rare footage from Supreme Court proceedings featuring Justice Aniagolu.',
      thumbnail: heroImage,
      duration: '28:15',
      date: 'February 2024',
    },
    {
      title: 'Interview with Legal Scholars',
      description: 'Distinguished legal scholars discuss Justice Aniagolu\'s contributions to Nigerian law.',
      thumbnail: heroImage,
      duration: '52:40',
      date: 'January 2024',
    },
    {
      title: 'The Constitutional Cases',
      description: 'Analysis of landmark constitutional cases decided by Justice Aniagolu.',
      thumbnail: heroImage,
      duration: '38:20',
      date: 'December 2023',
    },
    {
      title: 'Ceremony and Honors',
      description: 'Footage from various ceremonies honoring Justice Aniagolu\'s service.',
      thumbnail: heroImage,
      duration: '22:45',
      date: 'November 2023',
    },
    {
      title: 'Legal Education and Mentorship',
      description: 'Stories from students and colleagues about Justice Aniagolu as a mentor.',
      thumbnail: heroImage,
      duration: '35:10',
      date: 'October 2023',
    },
  ];

  const photos = [
    {
      title: 'Supreme Court Portrait',
      description: 'Official portrait from Supreme Court service',
      image: heroImage,
      date: '1975',
    },
    {
      title: 'Legal Documents and Artifacts',
      description: 'Historical legal documents and personal artifacts',
      image: heroImage,
      date: '1970-1985',
    },
    {
      title: 'With Family and Colleagues',
      description: 'Personal moments with family and judicial colleagues',
      image: heroImage,
      date: '1980',
    },
    {
      title: 'Awards Ceremony',
      description: 'Receiving national honors and recognition',
      image: heroImage,
      date: '1982',
    },
    {
      title: 'Court in Session',
      description: 'Supreme Court proceedings and deliberations',
      image: heroImage,
      date: '1978',
    },
    {
      title: 'Public Addresses',
      description: 'Speaking at legal conferences and public events',
      image: heroImage,
      date: '1981',
    },
  ];

  const audioRecordings = [
    {
      title: 'Oral Arguments - Constitutional Case',
      description: 'Audio recording of oral arguments in a landmark constitutional case.',
      duration: '1:15:30',
      date: 'June 1977',
    },
    {
      title: 'Nigerian Bar Association Address',
      description: 'Keynote address at the NBA annual conference.',
      duration: '45:20',
      date: 'August 1980',
    },
    {
      title: 'Interview on Judicial Independence',
      description: 'Radio interview discussing the importance of judicial independence.',
      duration: '32:15',
      date: 'March 1979',
    },
    {
      title: 'Legal Education Lecture Series',
      description: 'Lecture on constitutional law delivered to law students.',
      duration: '58:40',
      date: 'September 1976',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Media Gallery"
        subtitle="Visual & Audio Archives"
        description="Explore our collection of videos, photographs, and audio recordings documenting Justice Aniagolu's life and legacy."
        image={heroImage}
      />

      {/* Media Gallery Section */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-8 py-3 rounded-md transition-all flex items-center gap-2 ${
                activeTab === 'videos'
                  ? 'bg-[#1A2B47] text-white shadow-lg'
                  : 'bg-white text-[#1A2B47] hover:bg-[#E8E2D9]'
              }`}
            >
              <Film size={20} />
              Videos
            </button>
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-8 py-3 rounded-md transition-all flex items-center gap-2 ${
                activeTab === 'photos'
                  ? 'bg-[#1A2B47] text-white shadow-lg'
                  : 'bg-white text-[#1A2B47] hover:bg-[#E8E2D9]'
              }`}
            >
              <ImageIcon size={20} />
              Photographs
            </button>
            <button
              onClick={() => setActiveTab('audio')}
              className={`px-8 py-3 rounded-md transition-all flex items-center gap-2 ${
                activeTab === 'audio'
                  ? 'bg-[#1A2B47] text-white shadow-lg'
                  : 'bg-white text-[#1A2B47] hover:bg-[#E8E2D9]'
              }`}
            >
              <Mic size={20} />
              Audio
            </button>
          </div>

          {/* Videos Tab */}
          {activeTab === 'videos' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative aspect-video">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[#C5A572] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="text-white ml-1" size={28} fill="white" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-lg text-[#1A2B47] mb-2">{video.title}</h3>
                    <p className="text-sm text-[#8B8478] mb-3">{video.description}</p>
                    <p className="text-xs text-[#C5A572]">{video.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Photos Tab */}
          {activeTab === 'photos' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((photo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="aspect-square">
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="font-serif text-lg mb-1">{photo.title}</h3>
                      <p className="text-sm text-gray-300 mb-2">{photo.description}</p>
                      <p className="text-xs text-[#C5A572]">{photo.date}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Audio Tab */}
          {activeTab === 'audio' && (
            <div className="max-w-4xl mx-auto space-y-4">
              {audioRecordings.map((audio, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1A2B47] rounded-lg flex items-center justify-center group-hover:bg-[#C5A572] transition-colors flex-shrink-0">
                      <Mic className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-serif text-lg text-[#1A2B47]">{audio.title}</h3>
                        <span className="text-sm text-[#8B8478] ml-4">{audio.duration}</span>
                      </div>
                      <p className="text-[#8B8478] mb-2">{audio.description}</p>
                      <p className="text-sm text-[#C5A572]">{audio.date}</p>
                    </div>
                    <button className="w-12 h-12 rounded-full bg-[#C5A572] flex items-center justify-center hover:bg-[#9E7E4A] transition-colors flex-shrink-0">
                      <Play className="text-white ml-0.5" size={20} fill="white" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1A2B47] mb-6">
            Contribute to Our Archives
          </h2>
          <p className="text-lg text-[#8B8478] leading-relaxed mb-8">
            Do you have photographs, recordings, or other media related to Justice Aniagolu? 
            We welcome contributions to help preserve and share this important legacy.
          </p>
          <button className="px-8 py-4 bg-[#C5A572] text-white rounded-md hover:bg-[#9E7E4A] transition-all duration-200 shadow-md hover:shadow-lg">
            Submit Media
          </button>
        </div>
      </section>
    </div>
  );
}
