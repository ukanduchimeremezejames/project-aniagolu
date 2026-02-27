import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#FAF8F5] px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="font-serif text-9xl text-[#C5A572] mb-4">404</h1>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1A2B47] mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-[#8B8478] leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#1A2B47] text-white rounded-md hover:bg-[#C5A572] transition-all duration-200 shadow-md hover:shadow-lg group"
          >
            <Home className="mr-2 group-hover:scale-110 transition-transform" size={20} />
            Go to Homepage
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-8 py-4 bg-white border border-[#1A2B47] text-[#1A2B47] rounded-md hover:bg-[#E8E2D9] transition-all duration-200"
          >
            <ArrowLeft className="mr-2" size={20} />
            Go Back
          </button>
        </div>

        <div className="mt-12 pt-12 border-t border-[#E8E2D9]">
          <h3 className="font-serif text-xl text-[#1A2B47] mb-4">Popular Pages</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/about" className="text-[#C5A572] hover:text-[#9E7E4A] transition-colors">
              About
            </Link>
            <span className="text-[#E8E2D9]">•</span>
            <Link to="/archives" className="text-[#C5A572] hover:text-[#9E7E4A] transition-colors">
              Archives
            </Link>
            <span className="text-[#E8E2D9]">•</span>
            <Link to="/history" className="text-[#C5A572] hover:text-[#9E7E4A] transition-colors">
              History
            </Link>
            <span className="text-[#E8E2D9]">•</span>
            <Link to="/contact" className="text-[#C5A572] hover:text-[#9E7E4A] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
