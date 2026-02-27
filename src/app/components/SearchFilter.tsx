import { Search, Filter, X } from 'lucide-react';
import { useState } from 'react';

interface SearchFilterProps {
  onSearch: (query: string) => void;
  onFilter: (filters: string[]) => void;
  categories: string[];
  placeholder?: string;
}

export function SearchFilter({ onSearch, onFilter, categories, placeholder = "Search..." }: SearchFilterProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    onSearch(query);
  };

  const toggleFilter = (category: string) => {
    const newFilters = selectedFilters.includes(category)
      ? selectedFilters.filter((f) => f !== category)
      : [...selectedFilters, category];
    setSelectedFilters(newFilters);
    onFilter(newFilters);
  };

  const clearFilters = () => {
    setSelectedFilters([]);
    onFilter([]);
  };

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8B8478]" size={20} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder={placeholder}
            className="w-full pl-12 pr-4 py-3 border border-[#E8E2D9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#C5A572] focus:border-transparent"
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`px-6 py-3 rounded-md transition-colors flex items-center justify-center gap-2 ${
            showFilters || selectedFilters.length > 0
              ? 'bg-[#1A2B47] text-white'
              : 'bg-white border border-[#E8E2D9] text-[#1A2B47] hover:bg-[#E8E2D9]'
          }`}
        >
          <Filter size={20} />
          <span className="hidden sm:inline">Filters</span>
          {selectedFilters.length > 0 && (
            <span className="bg-[#C5A572] text-white text-xs rounded-full px-2 py-0.5">
              {selectedFilters.length}
            </span>
          )}
        </button>
      </div>

      {/* Filter Tags */}
      {showFilters && (
        <div className="bg-white border border-[#E8E2D9] rounded-md p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium text-[#1A2B47]">Filter by Category</h3>
            {selectedFilters.length > 0 && (
              <button
                onClick={clearFilters}
                className="text-sm text-[#8B8478] hover:text-[#C5A572] transition-colors"
              >
                Clear all
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => toggleFilter(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  selectedFilters.includes(category)
                    ? 'bg-[#1A2B47] text-white'
                    : 'bg-[#E8E2D9] text-[#1A2B47] hover:bg-[#C5A572] hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Selected Filters Display */}
      {selectedFilters.length > 0 && !showFilters && (
        <div className="flex flex-wrap gap-2">
          {selectedFilters.map((filter) => (
            <span
              key={filter}
              className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A2B47] text-white rounded-full text-sm"
            >
              {filter}
              <button
                onClick={() => toggleFilter(filter)}
                className="hover:text-[#C5A572] transition-colors"
              >
                <X size={14} />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
