import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, ArrowRight } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      role: 'Software Engineer',
      company: 'GitaIT Pvt. Ltd.',
      location: 'Hyderabad, TS',
      period: 'May 2024 – Present',
      type: 'Full-time',
      description: 'Leading development of wealth management platform with focus on scalability and user experience.',
      achievements: [
        'Developed comprehensive Wealth Management Platform with task management, file storage, and client features',
        'Implemented cloud-based file storage using Azure, ensuring security and compliance',
        'Engineered dynamic search and filtering system improving user productivity by 40%',
        'Collaborated in Agile sprints delivering features ahead of schedule',
      ],
      technologies: ['C#', 'ASP.NET Core', 'Azure', 'EF Core', 'SQL Server'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      role: 'Software Engineer',
      company: 'BitApps India Pvt. Ltd.',
      location: 'Hyderabad, TS',
      period: 'June 2021 – May 2024',
      type: 'Full-time',
      description: 'Full-stack development across multiple client projects with focus on healthcare and enterprise solutions.',
      achievements: [
        'Developed Hospital Management System handling 1000+ daily transactions',
        'Built and maintained web applications using Angular 12 and ASP.NET Core',
        'Optimized database queries reducing response time by 60%',
        'Mentored junior developers and conducted code reviews',
      ],
      technologies: ['C#', 'ASP.NET Core', 'Angular 12', 'PostgreSQL', 'JavaScript'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      role: 'Software Engineering Intern',
      company: 'BitApps India Pvt. Ltd.',
      location: 'Hyderabad, TS',
      period: 'March 2021 – June 2021',
      type: 'Internship',
      description: 'Gained hands-on experience in full-stack development and agile methodologies.',
      achievements: [
        'Contributed to client-facing projects using C# and ASP.NET Core',
        'Participated in all phases of SDLC from requirements to deployment',
        'Learned industry best practices and coding standards',
      ],
      technologies: ['C#', 'ASP.NET Core', 'SQL Server'],
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="experience" className="py-32 bg-gradient-to-b from-secondary/20 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full font-semibold mb-4">
            Career Journey
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building enterprise solutions and delivering value at scale
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50">
                {/* Colored top bar */}
                <div className={`h-2 bg-gradient-to-r ${exp.color}`} />

                <div className="p-8 md:p-10">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left side - Icon and Period */}
                    <div className="lg:w-48 flex-shrink-0">
                      <div className="inline-flex lg:flex flex-col gap-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${exp.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                          <Briefcase className="text-white" size={32} />
                        </div>
                        <div className="hidden lg:block">
                          <div className="text-sm text-muted-foreground mb-1">Duration</div>
                          <div className="font-semibold text-foreground text-sm">{exp.period}</div>
                          <div className="inline-block mt-2 px-3 py-1 bg-secondary text-primary text-xs rounded-full font-medium">
                            {exp.type}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right side - Content */}
                    <div className="flex-1 space-y-6">
                      {/* Header */}
                      <div>
                        <h3 className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-foreground/70 mb-3">
                          <span className="text-xl font-semibold text-primary">{exp.company}</span>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                          <div className="lg:hidden flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                        <p className="text-lg text-foreground/70 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground flex items-center gap-2">
                          <ArrowRight size={20} className="text-primary" />
                          Key Achievements
                        </h4>
                        <div className="grid gap-3">
                          {exp.achievements.map((achievement, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: i * 0.1 }}
                              className="flex gap-3 group/item"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                              <p className="text-foreground/80 leading-relaxed group-hover/item:text-foreground transition-colors">
                                {achievement}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                        {exp.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            className="px-4 py-2 bg-secondary/70 text-primary rounded-xl font-medium text-sm hover:bg-primary hover:text-white transition-all duration-300 cursor-default"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="hidden lg:block absolute left-[88px] top-full w-0.5 h-8 bg-gradient-to-b from-primary/50 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
