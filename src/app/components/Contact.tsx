import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, User, MessageSquare, Github, Linkedin, Twitter, Calendar, Briefcase } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isFocused, setIsFocused] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rampolineni@outlook.com',
      href: 'mailto:rampolineni@outlook.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9494926274',
      href: 'tel:+919494926274',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, TS, India',
      href: '#',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/polineni7?tab=repositories', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/imrampolineni/', label: 'LinkedIn' }
  ];

  const personalInfo = [
    { label: 'Full Name', value: 'Polineni Ramakrishna', icon: User },
    { label: 'Date of Birth', value: '16-May-1996', icon: Calendar },
    { label: 'Gender', value: 'Male', icon: User },
    { label: 'Marital Status', value: 'Unmarried', icon: Briefcase },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mail service is not implemented please contact to this mailid rampolineni@outlook.com');
    const mailtoLink = `mailto:rampolineni@outlook.com
    ?subject=${encodeURIComponent(formData.subject)}
    &body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-secondary/20 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          {/* Left Side - Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 8 }}
                  className="group block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/30"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                      <info.icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-border/50"
            >
              <h3 className="font-bold text-foreground mb-4">Connect on Social Media</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center hover:from-primary hover:to-accent transition-all duration-300 group border border-primary/20"
                  >
                    <social.icon
                      size={20}
                      className="text-primary group-hover:text-white transition-colors"
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Personal Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-border/50"
            >
              <h3 className="font-bold text-foreground mb-4">Personal Information</h3>
              <div className="space-y-3">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                    className="flex items-center justify-between py-2 border-b border-border/50 last:border-0"
                  >
                    <span className="text-sm text-muted-foreground flex items-center gap-2">
                      <info.icon size={14} className="text-primary" />
                      {info.label}
                    </span>
                    <span className="text-sm font-medium text-foreground">{info.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border border-white/20">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-foreground mb-2">Send a Message</h3>
                <p className="text-muted-foreground">I'll get back to you as soon as possible</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block font-semibold text-foreground mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setIsFocused({ ...isFocused, name: true })}
                      onBlur={() => setIsFocused({ ...isFocused, name: false })}
                      required
                      className={`w-full px-5 py-4 bg-white border-2 rounded-2xl focus:outline-none transition-all duration-300 ${
                        isFocused.name ? 'border-primary shadow-lg' : 'border-border'
                      }`}
                      placeholder="John Doe"
                    />
                    <User 
                      size={20} 
                      className={`absolute right-4 top-1/2 -translate-y-1/2 transition-colors ${
                        isFocused.name ? 'text-primary' : 'text-muted-foreground'
                      }`} 
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block font-semibold text-foreground mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setIsFocused({ ...isFocused, email: true })}
                      onBlur={() => setIsFocused({ ...isFocused, email: false })}
                      required
                      className={`w-full px-5 py-4 bg-white border-2 rounded-2xl focus:outline-none transition-all duration-300 ${
                        isFocused.email ? 'border-primary shadow-lg' : 'border-border'
                      }`}
                      placeholder="john@example.com"
                    />
                    <Mail 
                      size={20} 
                      className={`absolute right-4 top-1/2 -translate-y-1/2 transition-colors ${
                        isFocused.email ? 'text-primary' : 'text-muted-foreground'
                      }`} 
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block font-semibold text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setIsFocused({ ...isFocused, subject: true })}
                    onBlur={() => setIsFocused({ ...isFocused, subject: false })}
                    required
                    className={`w-full px-5 py-4 bg-white border-2 rounded-2xl focus:outline-none transition-all duration-300 ${
                      isFocused.subject ? 'border-primary shadow-lg' : 'border-border'
                    }`}
                    placeholder="Project Collaboration"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block font-semibold text-foreground mb-2">
                    Your Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setIsFocused({ ...isFocused, message: true })}
                      onBlur={() => setIsFocused({ ...isFocused, message: false })}
                      required
                      rows={6}
                      className={`w-full px-5 py-4 bg-white border-2 rounded-2xl focus:outline-none transition-all duration-300 resize-none ${
                        isFocused.message ? 'border-primary shadow-lg' : 'border-border'
                      }`}
                      placeholder="Tell me about your project or how I can help..."
                    />
                    <MessageSquare 
                      size={20} 
                      className={`absolute right-4 top-4 transition-colors ${
                        isFocused.message ? 'text-primary' : 'text-muted-foreground'
                      }`} 
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-5 bg-gradient-to-r from-primary to-accent text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  <span>Send Message</span>
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center pt-12 border-t border-border/50"
        >
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto border border-border/50">
            <p className="text-foreground/80 mb-4">
              © 2025 Polineni Ramakrishna. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground italic">
              I hereby confirm that the information provided above is true to the best of my knowledge and belief.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
