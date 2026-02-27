import { Hero } from '../components/Hero';
import { motion } from 'motion/react';
import { BookOpen, Download, ExternalLink } from 'lucide-react';
import heroImage from '../../assets/aniagolu.jpg';

export function PublicationsPage() {
  const books = [
    {
      title: 'An address by the Hon. the Chief Judge of Anambra State, the Honourable Mr Justice A.N. Aniagolu to the Nigerian Bar Association at the Hotel Presidential, Enugu, Tuesday 24 August 1976',
      author: 'Justice Anthony Aniagolu',
      year: '1976',
      description: 'Judicial address to the Nigerian Bar Association.',
      pages: '356 pages',
    },
    {
      title: 'The Making of the 1989 Constitution of Nigeria',
      author: 'Justice Anthony Aniagolu',
      year: '1993',
      description: 'Detailed account of the drafting of the 1989 Constitution, including the challenges faced and the principles that guided its creation. A comprehensive overview of the state of the legal profession and the judiciary in Nigeria at the time.',
      pages: '467 pages',
    },
    {
      title: 'The Travails of Nigeria in Binding Herself into a Nation under the Constitution',
      author: 'Justice Anthony Aniagolu',
      year: '1991',
      description: 'A comprehensive treatise on constitutional law, examining the Nigerian Constitution and its interpretationAnalysis of nation-building and constitutional challenges through landmark cases.',
      pages: '236 pages',
    },
    {
      title: 'Constitutional Law in Nigeria: Principles and Practice',
      author: 'Justice Anthony Aniagolu',
      year: '1978',
      description: 'A comprehensive treatise on constitutional law, examining the Nigerian Constitution and its interpretation through landmark cases.',
      pages: '456 pages',
    },
    {
      title: 'The Judicial Process: Theory and Practice',
      author: 'Justice Anthony Aniagolu',
      year: '1980',
      description: 'An exploration of the judicial process, covering everything from legal reasoning to the role of precedent in common law systems.',
      pages: '328 pages',
    },
    {
      title: 'Selected Judgments and Opinions',
      author: 'Justice Anthony Aniagolu',
      year: '1985',
      description: 'A collection of significant judgments and legal opinions that shaped Nigerian jurisprudence during a transformative period.',
      pages: '512 pages',
    },
  ];

  const articles = [
    {
      title: 'Justice and Good Governance: A Challenge for Catholics',
      publication: 'Nigerian Law Review',
      year: '2000',
      abstract: 'Discussion on governance, ethics, and Catholic social teaching.',
    },
    {
      title: 'The Independence of the Judiciary in a Democratic Society',
      publication: 'Nigerian Law Review',
      year: '1976',
      abstract: 'An examination of the essential role of judicial independence in maintaining the rule of law and protecting democratic values.',
    },
    {
      title: 'Constitutional Interpretation and the Living Document',
      publication: 'Journal of Constitutional Law',
      year: '1977',
      abstract: 'Exploring how constitutions must be interpreted in light of evolving social circumstances while remaining true to fundamental principles.',
    },
    {
      title: 'Human Rights and the Nigerian Constitution',
      publication: 'African Law Journal',
      year: '1979',
      abstract: 'Analysis of human rights protections in the Nigerian Constitution and their application in judicial decisions.',
    },
    {
      title: 'Legal Ethics and Professional Responsibility',
      publication: 'Bar Journal',
      year: '1981',
      abstract: 'A comprehensive discussion of ethical obligations and professional standards for legal practitioners.',
    },
    {
      title: 'The Role of Precedent in Common Law Systems',
      publication: 'Commonwealth Legal Review',
      year: '1982',
      abstract: 'Examining how the doctrine of precedent functions in common law jurisdictions and its importance in ensuring consistency.',
    },
    {
      title: 'Federalism and Constitutional Law',
      publication: 'Nigerian Law Review',
      year: '1983',
      abstract: 'Analysis of federal systems and the distribution of powers between central and state governments.',
    },
  ];

  const speeches = [
    {
      title: 'Address to Graduating Law Students',
      venue: 'University of Nigeria, Nsukka',
      year: '1980',
      description: 'Inspiring words to new lawyers about the responsibilities and opportunities of the legal profession.',
    },
    {
      title: 'The Future of Nigerian Jurisprudence',
      venue: 'Nigerian Bar Association Annual Conference',
      year: '1981',
      description: 'Vision for the development of Nigerian law and the role of lawyers in nation-building.',
    },
    {
      title: 'Justice and Social Change',
      venue: 'Supreme Court Symposium',
      year: '1982',
      description: 'Reflections on how the legal system can respond to and facilitate positive social transformation.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Publications & Writings"
        subtitle="Scholarly Legacy"
        description="Explore the extensive body of legal scholarship, judicial opinions, and public addresses by Justice Aniagolu."
        image={heroImage}
      />

      {/* Books Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A2B47] mb-4">Books</h2>
            <p className="text-lg text-[#8B8478] max-w-2xl mx-auto">
              Comprehensive legal treatises that continue to be cited by scholars and practitioners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#FAF8F5] rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-[#1A2B47] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#C5A572] transition-colors">
                  <BookOpen className="text-white" size={32} />
                </div>
                <h3 className="font-serif text-xl text-[#1A2B47] mb-2">{book.title}</h3>
                <p className="text-sm text-[#C5A572] mb-3">{book.author} • {book.year}</p>
                <p className="text-[#8B8478] leading-relaxed mb-4">{book.description}</p>
                <p className="text-sm text-[#8B8478] mb-4">{book.pages}</p>
                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-[#1A2B47] text-white rounded-md hover:bg-[#C5A572] transition-colors text-sm flex items-center justify-center gap-2">
                    <Download size={16} />
                    Download
                  </button>
                  <button className="px-4 py-2 border border-[#1A2B47] text-[#1A2B47] rounded-md hover:bg-[#E8E2D9] transition-colors">
                    <ExternalLink size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A2B47] mb-4">
              Journal Articles & Essays
            </h2>
            <p className="text-lg text-[#8B8478] max-w-2xl mx-auto">
              Scholarly articles published in prestigious legal journals
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-serif text-xl text-[#1A2B47] mb-2 group-hover:text-[#C5A572] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-[#C5A572] mb-3">
                      {article.publication} • {article.year}
                    </p>
                    <p className="text-[#8B8478] leading-relaxed">{article.abstract}</p>
                  </div>
                  <div className="flex md:flex-col gap-2">
                    <button className="px-4 py-2 bg-[#1A2B47] text-white rounded-md hover:bg-[#C5A572] transition-colors text-sm whitespace-nowrap">
                      <Download size={16} className="inline mr-2" />
                      PDF
                    </button>
                    <button className="px-4 py-2 border border-[#1A2B47] text-[#1A2B47] rounded-md hover:bg-[#E8E2D9] transition-colors">
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speeches Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A2B47] mb-4">
              Public Addresses & Speeches
            </h2>
            <p className="text-lg text-[#8B8478] max-w-2xl mx-auto">
              Notable speeches and public addresses on law, justice, and society
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speeches.map((speech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#FAF8F5] rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-[#C5A572] text-white text-xs font-medium rounded-full">
                    {speech.year}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-[#1A2B47] mb-2">{speech.title}</h3>
                <p className="text-sm text-[#C5A572] mb-3">{speech.venue}</p>
                <p className="text-[#8B8478] leading-relaxed mb-4">{speech.description}</p>
                <button className="w-full px-4 py-2 bg-[#1A2B47] text-white rounded-md hover:bg-[#C5A572] transition-colors text-sm flex items-center justify-center gap-2">
                  <Download size={16} />
                  Read Full Text
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#1A2B47] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Access the Complete Collection
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Researchers and scholars can request access to the complete archive of Justice Aniagolu's 
              published works, including rare editions and unpublished manuscripts.
            </p>
            <button className="px-8 py-4 bg-[#C5A572] text-white rounded-md hover:bg-[#9E7E4A] transition-all duration-200 shadow-lg hover:shadow-xl">
              Request Research Access
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
