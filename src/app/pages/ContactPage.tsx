import { Hero } from '../components/Hero';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Heart, Users, Book } from 'lucide-react';
import { useState } from 'react';
import heroImage from '../../assets/aniagolu.jpg';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const supportOptions = [
    {
      icon: Heart,
      title: 'Make a Donation',
      description: 'Support our mission to preserve and promote Justice Aniagolu\'s legacy through financial contributions.',
      action: 'Donate Now',
    },
    {
      icon: Users,
      title: 'Volunteer',
      description: 'Join our team of volunteers helping with archives, events, and educational programs.',
      action: 'Join Us',
    },
    {
      icon: Book,
      title: 'Research Access',
      description: 'Request access to our archives for academic research and scholarly projects.',
      action: 'Apply',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Contact & Support"
        subtitle="Get in Touch"
        description="Reach out to learn more about our work, get involved, or support the preservation of this important legacy."
        image={heroImage}
      />

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl text-[#1A2B47] mb-6">Send Us a Message</h2>
              <p className="text-[#8B8478] mb-8 leading-relaxed">
                Have a question or want to learn more? Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#1A2B47] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#E8E2D9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#C5A572] focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1A2B47] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#E8E2D9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#C5A572] focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#1A2B47] mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#E8E2D9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#C5A572] focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="research">Research Access</option>
                    <option value="donation">Donation</option>
                    <option value="volunteer">Volunteer Opportunity</option>
                    <option value="events">Events Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1A2B47] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#E8E2D9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#C5A572] focus:border-transparent resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#1A2B47] text-white rounded-md hover:bg-[#C5A572] transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-serif text-3xl text-[#1A2B47] mb-6">Contact Information</h2>
                <p className="text-[#8B8478] mb-8 leading-relaxed">
                  You can also reach us directly using any of the methods below. We look forward to hearing from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-[#FAF8F5] rounded-lg">
                  <div className="w-12 h-12 bg-[#1A2B47] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1A2B47] mb-2">Address</h3>
                    <p className="text-[#8B8478] leading-relaxed">
                      Aniagolu Legacy Foundation<br />
                      123 Legal Avenue<br />
                      Abuja, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-[#FAF8F5] rounded-lg">
                  <div className="w-12 h-12 bg-[#1A2B47] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1A2B47] mb-2">Email</h3>
                    <a
                      href="mailto:info@aniagolu.org"
                      className="text-[#C5A572] hover:text-[#9E7E4A] transition-colors"
                    >
                      info@aniagolu.org
                    </a>
                    <br />
                    <a
                      href="mailto:archives@aniagolu.org"
                      className="text-[#C5A572] hover:text-[#9E7E4A] transition-colors"
                    >
                      archives@aniagolu.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-[#FAF8F5] rounded-lg">
                  <div className="w-12 h-12 bg-[#1A2B47] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1A2B47] mb-2">Phone</h3>
                    <a
                      href="tel:+234"
                      className="text-[#C5A572] hover:text-[#9E7E4A] transition-colors"
                    >
                      +234 XXX XXX XXXX
                    </a>
                    <p className="text-sm text-[#8B8478] mt-1">Mon-Fri, 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-[#E8E2D9] rounded-lg h-64 flex items-center justify-center">
                <p className="text-[#8B8478]">Map Location</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A2B47] mb-4">
              Ways to Support Our Mission
            </h2>
            <p className="text-lg text-[#8B8478] max-w-2xl mx-auto">
              There are many ways you can help preserve and promote the legacy of Justice Aniagolu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center group"
                >
                  <div className="w-16 h-16 bg-[#C5A572] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1A2B47] transition-colors">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="font-serif text-xl text-[#1A2B47] mb-4">{option.title}</h3>
                  <p className="text-[#8B8478] leading-relaxed mb-6">{option.description}</p>
                  <button className="px-6 py-3 bg-[#1A2B47] text-white rounded-md hover:bg-[#C5A572] transition-all duration-200 w-full">
                    {option.action}
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A2B47] mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-[#FAF8F5] rounded-lg p-6">
              <h3 className="font-medium text-[#1A2B47] mb-3">
                How can I access the archives for research?
              </h3>
              <p className="text-[#8B8478] leading-relaxed">
                Researchers can request access by filling out the contact form above with the subject "Research Access." 
                Please provide details about your research project and what materials you're interested in accessing.
              </p>
            </div>

            <div className="bg-[#FAF8F5] rounded-lg p-6">
              <h3 className="font-medium text-[#1A2B47] mb-3">
                Are donations tax-deductible?
              </h3>
              <p className="text-[#8B8478] leading-relaxed">
                The Aniagolu Legacy Foundation is a registered non-profit organization. Donations may be tax-deductible 
                according to local tax laws. Please consult with a tax professional for specific guidance.
              </p>
            </div>

            <div className="bg-[#FAF8F5] rounded-lg p-6">
              <h3 className="font-medium text-[#1A2B47] mb-3">
                Can I contribute materials to the archives?
              </h3>
              <p className="text-[#8B8478] leading-relaxed">
                Yes! We welcome contributions of photographs, documents, or other materials related to Justice Aniagolu. 
                Please contact us to discuss potential donations to our collection.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
