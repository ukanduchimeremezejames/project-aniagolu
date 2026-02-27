import { useState } from 'react';
import { Hero } from '../components/Hero';
import { SearchFilter } from '../components/SearchFilter';
import { motion } from 'motion/react';
import { FileText, Download, ExternalLink, Calendar } from 'lucide-react';
import heroImage from '../../assets/aniagolu.jpg';

interface ArchiveItem {
  title: string;
  description: string;
  category: string;
  date: string;
  fileType: string;
}

export function ArchivesPage() {
  const allArchives: ArchiveItem[] = [
    {
      title: 'Constitutional Law and Human Rights',
      description: 'A comprehensive analysis of constitutional principles and their application to human rights cases.',
      category: 'Legal Writing',
      date: 'March 1975',
      fileType: 'PDF',
    },
    {
      title: 'Supreme Court Judgment - Constitutional Matter',
      description: 'Landmark judgment on constitutional interpretation and federalism.',
      category: 'Court Judgments',
      date: 'June 1978',
      fileType: 'PDF',
    },
    {
      title: 'The Role of the Judiciary in a Democracy',
      description: 'Speech delivered at the Nigerian Bar Association annual conference.',
      category: 'Speeches',
      date: 'August 1980',
      fileType: 'PDF',
    },
    {
      title: 'Legal Ethics and Professional Responsibility',
      description: 'Essay on the ethical obligations of legal practitioners.',
      category: 'Legal Writing',
      date: 'January 1976',
      fileType: 'PDF',
    },
    {
      title: 'Criminal Law and Due Process',
      description: 'Supreme Court decision establishing important precedents in criminal procedure.',
      category: 'Court Judgments',
      date: 'November 1979',
      fileType: 'PDF',
    },
    {
      title: 'Address to Law Students',
      description: 'Inspiring speech to graduating law students on the responsibilities of the legal profession.',
      category: 'Speeches',
      date: 'May 1981',
      fileType: 'PDF',
    },
    {
      title: 'Personal Correspondence Collection',
      description: 'Letters and correspondence relating to legal and personal matters.',
      category: 'Personal Papers',
      date: '1970-1985',
      fileType: 'PDF',
    },
    {
      title: 'Judicial Independence and the Rule of Law',
      description: 'Seminal paper on maintaining judicial independence in challenging times.',
      category: 'Legal Writing',
      date: 'February 1977',
      fileType: 'PDF',
    },
    {
      title: 'Photographs from Supreme Court Era',
      description: 'Historical photographs documenting important moments and ceremonies.',
      category: 'Photographs',
      date: '1972-1985',
      fileType: 'JPG',
    },
  ];

  const categories = ['All', 'Legal Writing', 'Court Judgments', 'Speeches', 'Personal Papers', 'Photographs'];

  const [filteredArchives, setFilteredArchives] = useState(allArchives);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterArchives(query, selectedFilters);
  };

  const handleFilter = (filters: string[]) => {
    setSelectedFilters(filters);
    filterArchives(searchQuery, filters);
  };

  const filterArchives = (query: string, filters: string[]) => {
    let filtered = allArchives;

    // Apply search query
    if (query) {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Apply category filters
    if (filters.length > 0) {
      filtered = filtered.filter((item) => filters.includes(item.category));
    }

    setFilteredArchives(filtered);
  };

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Archives & Collections"
        subtitle="Digital Repository"
        description="Access our comprehensive collection of legal documents, speeches, personal papers, and historical records."
        image={heroImage}
      />

      {/* Archives Section */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter */}
          <div className="mb-12">
            <SearchFilter
              onSearch={handleSearch}
              onFilter={handleFilter}
              categories={categories.filter((c) => c !== 'All')}
              placeholder="Search archives by title or description..."
            />
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-[#8B8478]">
              Showing <span className="font-medium text-[#1A2B47]">{filteredArchives.length}</span> of{' '}
              <span className="font-medium text-[#1A2B47]">{allArchives.length}</span> items
            </p>
          </div>

          {/* Archives Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArchives.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-[#1A2B47] rounded-lg flex items-center justify-center group-hover:bg-[#C5A572] transition-colors">
                    <FileText className="text-white" size={24} />
                  </div>
                  <span className="text-xs font-medium px-3 py-1 bg-[#E8E2D9] text-[#1A2B47] rounded-full">
                    {item.fileType}
                  </span>
                </div>

                <h3 className="font-serif text-lg text-[#1A2B47] mb-2 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-sm text-[#8B8478] mb-4 line-clamp-3">{item.description}</p>

                <div className="flex items-center text-xs text-[#8B8478] mb-4">
                  <Calendar size={14} className="mr-2" />
                  {item.date}
                </div>

                <div className="pt-4 border-t border-[#E8E2D9] flex items-center justify-between">
                  <span className="text-xs font-medium text-[#C5A572]">{item.category}</span>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-md bg-[#E8E2D9] hover:bg-[#1A2B47] text-[#1A2B47] hover:text-white transition-all group/btn">
                      <Download size={16} className="group-hover/btn:animate-bounce" />
                    </button>
                    <button className="p-2 rounded-md bg-[#E8E2D9] hover:bg-[#C5A572] text-[#1A2B47] hover:text-white transition-all">
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredArchives.length === 0 && (
            <div className="text-center py-16">
              <FileText className="mx-auto mb-4 text-[#8B8478]" size={48} />
              <h3 className="font-serif text-2xl text-[#1A2B47] mb-2">No Archives Found</h3>
              <p className="text-[#8B8478]">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Archive Info */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1A2B47] mb-6">
            About Our Archives
          </h2>
          <p className="text-lg text-[#8B8478] leading-relaxed mb-8">
            Our digital archive contains a comprehensive collection of Justice Aniagolu's legal writings, 
            court judgments, speeches, and personal papers. These materials provide invaluable insights 
            into his judicial philosophy and the legal landscape of Nigeria during a transformative period. 
            All materials are digitized and available for research and educational purposes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-serif text-[#C5A572] mb-2">500+</div>
              <p className="text-[#8B8478]">Documents</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif text-[#C5A572] mb-2">50+</div>
              <p className="text-[#8B8478]">Court Judgments</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif text-[#C5A572] mb-2">100+</div>
              <p className="text-[#8B8478]">Photographs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
