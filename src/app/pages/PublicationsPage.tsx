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
      description: 'Judicial address to the Nigerian Bar Association',
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
      description: 'Analysis of nation-building and constitutional challenges in Nigeria, drawing on historical and contemporary examples to illustrate the complexities of governance and unity.',
      pages: '236 pages',
    },
    {
      title: 'Justice and Good Governance: A Challenge for Catholics',
      author: 'Justice Anthony Aniagolu',
      year: '2000',
      description: 'Discussion on governance, ethics, and Catholic social teaching, exploring how religious principles can inform and inspire good governance in a pluralistic society.',
      pages: '456 pages',
    },
    // {
    //   title: 'The Judicial Process: Theory and Practice',
    //   author: 'Justice Anthony Aniagolu',
    //   year: '1980',
    //   description: 'An exploration of the judicial process, covering everything from legal reasoning to the role of precedent in common law systems.',
    //   pages: '328 pages',
    // },
    // {
    //   title: 'Selected Judgments and Opinions',
    //   author: 'Justice Anthony Aniagolu',
    //   year: '1985',
    //   description: 'A collection of significant judgments and legal opinions that shaped Nigerian jurisprudence during a transformative period.',
    //   pages: '512 pages',
    // },
  ];

  const articles = [
    {
      title: 'Ariori v. Elemo (1983) N.S.C.C. 1',
      publication: 'Nigerian Law Review',
      year: '1983',
      abstract: 'A key authority on the right to a fair hearing.',
    },
    {
      title: 'Nasiru Bello v. Attorney-General of Oyo State (1986)',
      publication: 'Nigerian Law Review',
      year: '1986',
      abstract: 'Condemned the execution of a convict during a pending appeal.',
    },
    {
      title: 'Legal Practitioners Disciplinary Committee v. Chief Gani Fawehinmi (1985)',
      publication: 'Journal of Constitutional Law',
      year: '1985',
      abstract: ' Upheld the right to be heard.',
    },
    {
      title: 'Sofekun v. Akinyemi & Ors (1980)',
      publication: 'African Law Journal',
      year: '1980',
      abstract: 'Reinforced fair trial rights in tribunals.',
    },
    {
      title: 'Margaret Chinyere Stitch v. Attorney-General of the Federation (1986)',
      publication: 'Bar Journal',
      year: '1986',
      abstract: 'Established that ministers cannot misuse power.',
    },
    // {
    //   title: 'The Role of Precedent in Common Law Systems',
    //   publication: 'Commonwealth Legal Review',
    //   year: '1982',
    //   abstract: 'Examining how the doctrine of precedent functions in common law jurisdictions and its importance in ensuring consistency.',
    // },
    // {
    //   title: 'Federalism and Constitutional Law',
    //   publication: 'Nigerian Law Review',
    //   year: '1983',
    //   abstract: 'Analysis of federal systems and the distribution of powers between central and state governments.',
    // },
  ];

  const speeches = [
    {
      title: 'Officer of the Federal Republic (OFR)',
      venue: 'Federal Republic of Nigeria',
      year: '1964',
      description: 'The Officer of the Order of the Federal Republic (OFR) is a national honour awarded by the Federal Government of Nigeria. It is one of the ranks within the Order of the Federal Republic, which recognizes individuals who have made significant contributions to Nigeria’s development and progress.',
    },
    {
      title: 'Commander of the Order of the Niger (CON)',
      venue: 'Part of the Order of the Niger',
      year: '1981',
      description: 'The Commander of the Order of the Niger (CON) is a high-ranking national honour in Nigeria. It is part of the Order of the Niger, one of the two main national orders established by the Federal Government of Nigeria.',
    },
    {
      title: 'Knight of St. Sylvester',
      venue: 'The Catholic Diocese of Anambra State',
      year: '1982',
      description: 'Knight-ed by the Catholic Church with papal honors, recognizing his contributions to the Church and society. The Order of St. Sylvester is one of the five orders of knighthood awarded directly by the Pope, and it honors laypeople who have demonstrated outstanding service to the Church.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Publications by Justice Anthony N. Aniagolu"
        subtitle="Scholarly Legacy"
        description="Explore the extensive body of legal scholarship, judicial opinions, and public addresses by Justice Aniagolu."
        image={heroImage}
      />

      {/* Books Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A2B47] mb-4">Publications</h2>
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
              Landmark Judgments (Case Citations)
            </h2>
            <p className="text-lg text-[#8B8478] max-w-2xl mx-auto">
              Notable judicial decisions and case citations that have shaped Nigerian jurisprudence
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
              Awards & Professional Recognition
            </h2>
            <p className="text-lg text-[#8B8478] max-w-2xl mx-auto">
              Notable awards and recognitions received by Justice Aniagolu for his contributions to law and society
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
