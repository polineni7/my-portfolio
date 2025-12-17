import { motion } from 'motion/react';
import { ExternalLink, Calendar, Building2, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'Wealth Management Platform',
      client: 'Amplify',
      company: 'GitaIT Pvt. Ltd.',
      period: 'September 2022 – May 2023',
      description: 'Comprehensive wealth management solution with advanced task management, cloud-based file storage, and client-centric features.',
      image: 'https://images.unsplash.com/photo-1764865988393-16d972967594?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWFsdGglMjBtYW5hZ2VtZW50JTIwZmluYW5jZXxlbnwxfHx8fDE3NjU5OTU1Njd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      highlights: [
        'Built scalable task management system',
        'Implemented Azure cloud storage',
        'Dynamic search & filtering',
        'Enhanced team productivity',
      ],
      technologies: ['ASP.NET Core', 'Azure', 'EF Core', 'SQL Server'],
      color: 'from-blue-500 to-purple-500',
    },
    {
      title: 'Hospital Management System',
      client: 'Healthcare Provider',
      company: 'BitApps India Pvt. Ltd.',
      period: 'September 2022 – May 2023',
      description: 'Enterprise-grade HMS computerizing hospital operations including patient management, pharmacy, billing, and medical records.',
      image: 'https://images.unsplash.com/photo-1563233269-7e86880558a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzY1ODk0MjA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      highlights: [
        'Patient information management',
        'Dental & stores modules',
        'Billing & pharmacy integration',
        'Angular 12 frontend',
      ],
      technologies: ['ASP.NET Core', 'Angular 12', 'PostgreSQL', 'TypeScript'],
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'Supply Chain Management',
      client: 'Netherlands Client',
      company: 'BitApps India Pvt. Ltd.',
      period: 'March 2021 – September 2022',
      description: 'Robust order management system for supply chain operations with advanced tracking, administration, and notification features.',
      image: 'https://images.unsplash.com/photo-1573209680076-bd7ec7007616?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwbHklMjBjaGFpbiUyMGxvZ2lzdGljc3xlbnwxfHx8fDE3NjU5ODY5NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      highlights: [
        'Order tracking system',
        'Admin dashboard',
        'Email notification system',
        'Real-time data processing',
      ],
      technologies: ['ASP.NET Core', 'EF Core', 'Angular 12', 'SQL Server'],
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="projects" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-secondary/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full font-semibold mb-4">
            Portfolio
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world solutions that drive business value and user satisfaction
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Image Side */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="lg:w-1/2 relative group"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity z-10`} />
                  
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[400px] object-cover"
                  />

                  {/* Floating badge */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg z-20">
                    <div className="flex items-center gap-2">
                      <Building2 size={16} className="text-primary" />
                      <span className="font-semibold text-sm">{project.client}</span>
                    </div>
                  </div>
                </div>

                {/* Decorative element */}
                <div className={`absolute -bottom-4 ${index % 2 === 0 ? '-right-4' : '-left-4'} w-32 h-32 bg-gradient-to-br ${project.color} rounded-3xl opacity-20 -z-10`} />
              </motion.div>

              {/* Content Side */}
              <div className="lg:w-1/2 space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar size={18} className="text-primary" />
                    <span className="text-sm text-muted-foreground font-medium">{project.period}</span>
                  </div>

                  <h3 className="text-4xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-2 text-primary font-semibold mb-4">
                    <span>{project.company}</span>
                  </div>

                  <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                        className="flex items-center gap-3 group/item"
                      >
                        <CheckCircle2 size={20} className="text-primary flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span className="text-foreground/80 group-hover/item:text-foreground transition-colors">
                          {highlight}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                        className="px-4 py-2 bg-secondary/70 text-primary rounded-xl font-medium text-sm hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.color} text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <span>View Details</span>
                    <ExternalLink size={18} />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
