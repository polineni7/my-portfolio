import { motion } from 'motion/react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: 'Master of Computer Applications',
      shortDegree: 'MCA',
      institution: "Vignan's Foundation for Science, Technology & Research",
      location: 'Guntur, Andhra Pradesh',
      year: '2021',
      score: '83%',
      description: 'Advanced coursework in software engineering, algorithms, and system design',
      color: 'from-purple-500 to-pink-500',
    },
    {
      degree: 'Bachelor of Computer Applications',
      shortDegree: 'BCA',
      institution: 'PNC & KR Degree College',
      university: 'Acharya Nagarjuna University',
      location: 'Narasaraopet, Andhra Pradesh',
      year: '2019',
      score: '70%',
      description: 'Foundation in programming, databases, and web technologies',
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  return (
    <section id="education" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full font-semibold mb-4">
            Academic Background
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            <span className="text-primary">Education</span> & Qualifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strong academic foundation in computer science and software engineering
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 h-full">
                  {/* Colored top bar */}
                  <div className={`h-2 bg-gradient-to-r ${edu.color}`} />
                  
                  <div className="p-8 space-y-6">
                    {/* Icon and Degree Badge */}
                    <div className="flex items-start justify-between">
                      <div className={`w-16 h-16 bg-gradient-to-br ${edu.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <GraduationCap className="text-white" size={32} />
                      </div>
                      <div className="px-4 py-2 bg-secondary rounded-xl">
                        <span className="font-bold text-primary text-lg">{edu.shortDegree}</span>
                      </div>
                    </div>

                    {/* Degree Title */}
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-foreground/80 leading-relaxed">
                        {edu.institution}
                      </p>
                      {edu.university && (
                        <p className="text-sm text-foreground/60 mt-1">
                          {edu.university}
                        </p>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-foreground/70 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-between pt-6 border-t border-border/50">
                      <div className="flex items-center gap-2">
                        <Calendar size={18} className="text-primary" />
                        <span className="text-sm font-medium text-foreground/70">{edu.year}</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl">
                        <Award size={18} className="text-primary" />
                        <span className="font-bold text-primary text-lg">{edu.score}</span>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="pt-4 border-t border-border/50">
                      <p className="text-sm text-muted-foreground">{edu.location}</p>
                    </div>
                  </div>
                </div>

                {/* Decorative element */}
                <div className={`absolute -bottom-4 ${index % 2 === 0 ? '-right-4' : '-left-4'} w-24 h-24 bg-gradient-to-br ${edu.color} rounded-2xl opacity-20 -z-10`} />
              </motion.div>
            ))}
          </div>

          {/* Academic Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-white to-secondary/50 rounded-3xl p-10 shadow-lg border border-border/50"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                <BookOpen className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Academic Highlights</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Strong Foundation',
                  description: 'Comprehensive education in computer science fundamentals and software engineering principles',
                },
                {
                  title: 'Practical Learning',
                  description: 'Hands-on experience with modern programming languages, frameworks, and development tools',
                },
                {
                  title: 'Research & Innovation',
                  description: 'Exposure to cutting-edge technologies and software development methodologies',
                },
                {
                  title: 'Academic Excellence',
                  description: 'Consistently demonstrated strong performance and dedication to learning',
                },
              ].map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{highlight.title}</h4>
                    <p className="text-sm text-foreground/70 leading-relaxed">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
