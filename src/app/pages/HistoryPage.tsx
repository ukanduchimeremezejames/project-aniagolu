import { Hero } from '../components/Hero';
import { Timeline } from '../components/Timeline';
import { StoryCard } from '../components/StoryCard';
import { motion } from 'motion/react';
import heroImage from '../../assets/aniagolu.png';
import aniagolu1 from '../../assets/aniagolu1.png';
import aniagolu2 from '../../assets/aniagolu2.png';
import aniagolu3 from '../../assets/aniagolu3.png';
import aniagolu4 from '../../assets/aniagolu4.png';
import aniagolu5 from '../../assets/aniagolu5.png';
import aniagolu6 from '../../assets/aniagolu6.png';
import aniagolu7 from '../../assets/aniagolu7.png';
import aniagolu8 from '../../assets/aniagolu8.png';
import aniagolu9 from '../../assets/aniagolu9.png';
import aniagolu10 from '../../assets/aniagolu10.png';

export function HistoryPage() {
  const timelineEvents = [
    {
      year: '1922',
      title: 'Anthony Nnaemezie Aniagolu is Born',
      description: 'Justice Anthony Nnaemezie Aniagolu was one of Nigeria’s most distinguished jurists, whose judicial and constitutional career spanned more than four decades. Renowned for intellectual rigor, institutional discipline, and uncompromising fidelity to the rule of law, he played a foundational role in shaping Nigeria’s post-independence jurisprudence and constitutional development.',
      image: heroImage,
    },
    {
      year: '1922-1952',
      title: 'Educational Journey',
      description: 'Born on 22 October 1922 in Eke, Udi (present-day Enugu State), he demonstrated academic excellence from an early age. After studies at Government College, Umuahia and Christ the King College, Onitsha, he pursued legal education in the United Kingdom, earning his LL.B from the University of Bristol and being called to the Bar at Gray’s Inn, London, in July 1952. He was subsequently enrolled as a Barrister and Solicitor of the Supreme Court of Nigeria the same year.',
      image: aniagolu4,
    },
    {
      year: '1952–1965',
      title: 'Early Legal Practice and Public Services',
      description: 'Justice Aniagolu began his professional career in private legal practice (1952–1965), during which he established a reputation for competence and ethical firmness. He also held important public and professional roles, including: 1. Chairman, Nigerian Bar Association (Enugu Branch) (1962–1965): 2. Member, Disciplinary Committee, Bar Council of Nigeria (1962–1965) 3. Member, Federal Electoral Commission (1958–1965) 4. Member, Federal Nigerian Delimitation Commission (1963–1964) * These early engagements reflected his growing influence within Nigeria’s legal and institutional landscape.',
      image: aniagolu9,
    },
    {
      year: '1965-1987',
      title: 'Judicial Career',
      description: 'Justice Aniagolu was appointed a Judge of the High Court of Eastern Nigeria in 1965, marking the beginning of a distinguished judicial tenure. His rise through the judicial hierarchy was steady and merit-based: 1. High Court Judge, Eastern Nigeria (from 1965) 2. Acting Chief Judge, East Central State (1973) 3. Chief Judge, Anambra State (1976) 4. Justice, Supreme Court of Nigeria (1978–1987) * At the Supreme Court, he delivered numerous landmark judgments that contributed significantly to Nigerian constitutional law, procedural jurisprudence, and the doctrine of judicial independence. His decisions were widely respected for clarity of reasoning and doctrinal precision, and they continue to serve as authoritative reference points in Nigerian legal practice.',
      image: aniagolu1,
    },
    {
      year: '1988–1989',
      title: 'Constitutional Leadership',
      description: 'One of Justice Aniagolu’s most consequential national assignments was his appointment as Chairman of the 567-member Constituent Assembly (1988–1989), which drafted the 1989 Constitution of Nigeria. Under his leadership, the Assembly navigated complex and contentious issues—including debates around federalism and Shari’a jurisdiction—demonstrating his capacity for consensus building, procedural order, and constitutional statesmanship. His intellectual reflections on that process were later captured in his publication The Making of the 1989 Constitution of Nigeria, which remains an important source for scholars of Nigerian constitutional history.',
      image: heroImage,
    },
    {
      year: '1966–1969',
      title: 'Commissions and National Assignments',
      description: 'Justice Aniagolu chaired several important commissions of inquiry, including: 1. Eastern Nigeria Development Corporation Commission of Enquiry (1966–1969) 2. Tribunal of Enquiry into the Kano Religious Disturbances (Maitatsine Riots) (1981) * In these roles, he was noted for fairness, independence, and principled adjudication in politically sensitive contexts.',
      image: aniagolu7,

    },
    {
      year: '1983',
      title: 'Judicial Philosophy and Ethical Legacy',
      description: 'Justice Aniagolu was widely regarded as a fearless and incorruptible jurist. A defining episode of his career was his principled refusal, following the 1983 military coup, to assume the office of Chief Justice of Nigeria out of constitutional order of seniority. His stance reflected deep institutional loyalty to judicial hierarchy, constitutional protocol, and the separation of powers. He consistently articulated that judicial authority derives from moral responsibility and fidelity to justice. His published works and judicial pronouncements emphasize: 1. Judicial independence as the bedrock of the rule of law 2. Constitutionalism as a binding national covenant 3. Integrity and discipline as essential virtues of the Bench',
      image: aniagolu10,
    },
    {
      year: 'To Date',
      title: 'Enduring Significance',
      description: 'Justice Anthony N. Aniagolu stands among the titans of Nigeria’s judicial history. His career represents a synthesis of scholarship, administrative leadership, constitutional stewardship, and ethical courage. His judgments, writings, and public service continue to inform legal discourse and serve as a model for judicial integrity within Nigeria\’s evolving constitutional democracy.This overview is suitable for placement within a digital memorial library as a concise yet authoritative account of his professional life and enduring institutional legacy.',
      image: aniagolu9,
    },
  ];

  const stories = [
    {
      title: 'The Constitutional Guardian',
      excerpt: 'How Justice Aniagolu\'s interpretations of constitutional law helped establish fundamental principles that protect individual rights and limit governmental power in Nigeria.',
      image: aniagolu7,
      date: 'February 20, 2026',
      category: 'Legal Legacy',
      link: '#',
    },
    {
      title: 'A Voice for the Voiceless',
      excerpt: 'Stories of how Justice Aniagolu used his position to ensure that even the most vulnerable members of society had access to justice and fair treatment under the law.',
      image: aniagolu5,
      date: 'February 18, 2026',
      category: 'Human Rights',
      link: '#',
    },
    {
      title: 'Mentor to Generations',
      excerpt: 'The lasting impact of Justice Aniagolu\'s mentorship on countless lawyers, judges, and legal scholars who went on to distinguished careers of their own.',
      image: aniagolu6,
      date: 'February 15, 2026',
      category: 'Education',
      link: '#',
    },
    {
      title: 'Scholarly Contributions',
      excerpt: 'An overview of Justice Aniagolu\'s extensive writings on legal theory, constitutional law, and judicial ethics that continue to influence legal thought.',
      image: aniagolu8,
      date: 'February 12, 2026',
      category: 'Scholarship',
      link: '#',
    },
    {
      title: 'The Independence of the Judiciary',
      excerpt: 'How Justice Aniagolu stood firm in defending judicial independence during challenging political times, ensuring the courts remained true to their constitutional role.',
      image: aniagolu4,
      date: 'February 10, 2026',
      category: 'Judicial Philosophy',
      link: '#',
    },
    {
      title: 'Personal Character and Integrity',
      excerpt: 'Colleagues and contemporaries remember Justice Aniagolu not just for his legal brilliance, but for his unwavering integrity and personal kindness.',
      image: aniagolu2,
      date: 'February 8, 2026',
      category: 'Biography',
      link: '#',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="History & Stories"
        subtitle="A Remarkable Journey"
        description="Explore the life, career, and enduring impact of Justice Anthony Aniagolu through historical records and personal accounts."
        image={heroImage}
      />

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A2B47] mb-4">
              Life & Career Timeline
            </h2>
            <p className="text-lg text-[#8B8478] max-w-2xl mx-auto">
              Follow the remarkable journey from early beginnings to becoming one of Nigeria's most respected jurists
            </p>
          </div>
          <Timeline events={timelineEvents} />
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A2B47] mb-4">
              Featured Stories
            </h2>
            <p className="text-lg text-[#8B8478] max-w-2xl mx-auto">
              Discover the stories that define a legacy of justice, integrity, and service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <StoryCard key={index} {...story} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-[#1A2B47] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-6xl text-[#C5A572] mb-6">"</div>
            <blockquote className="font-serif text-2xl md:text-3xl text-white mb-6 leading-relaxed">
              The law must be a shield for the weak and a restraint upon the powerful. 
              Justice delayed is justice denied, and justice denied anywhere is a threat to justice everywhere.
            </blockquote>
            <p className="text-gray-300">— Justice Anthony Aniagolu</p>
          </motion.div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A2B47] mb-4">
              A Legacy in Numbers
            </h2>
            <p className="text-lg text-[#8B8478]">
              The measurable impact of a lifetime of service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="text-5xl font-serif text-[#C5A572] mb-2">13+</div>
              <p className="text-[#8B8478] text-lg">Years on Supreme Court</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="text-5xl font-serif text-[#C5A572] mb-2">200+</div>
              <p className="text-[#8B8478] text-lg">Landmark Judgments</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="text-5xl font-serif text-[#C5A572] mb-2">50+</div>
              <p className="text-[#8B8478] text-lg">Scholarly Publications</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center p-6"
            >
              <div className="text-5xl font-serif text-[#C5A572] mb-2">1000+</div>
              <p className="text-[#8B8478] text-lg">Lives Impacted</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
