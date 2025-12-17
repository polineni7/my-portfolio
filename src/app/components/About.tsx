import { motion } from 'motion/react';
import { Code2, Users, Target, Zap, Award, Heart } from 'lucide-react';

export function About() {
  const stats = [
    { value: '4.5+', label: 'Years Experience' },
    { value: '5+', label: 'Projects Delivered' },
    { value: '5+', label: 'Technologies' },
    { value: '100%', label: 'Client Satisfaction' },
  ];

  const values = [
    {
      icon: Code2,
      title: 'Problem Solving',
      description: 'Strong analytical abilities to tackle complex challenges with innovative solutions',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Effective communication and seamless teamwork in agile environments',
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Committed to delivering high-impact solutions that exceed expectations',
    },
    {
      icon: Zap,
      title: 'Continuous Learning',
      description: 'Always exploring new technologies and enhancing technical expertise',
    },
    {
      icon: Award,
      title: 'Quality Focus',
      description: 'Dedicated to writing clean, maintainable, and scalable code',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Genuine enthusiasm for creating software that makes a difference',
    },
  ];

  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
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
            About Me
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Passionate About <span className="text-primary">Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building the future, one line of code at a time
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white to-secondary/50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I am a passionate and results-driven <strong className="text-primary">Software Engineer</strong> with over 4.5 years of experience in building scalable, efficient software solutions. My journey in technology has been driven by curiosity, dedication, and a commitment to excellence.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Known for my strong problem-solving abilities, effective communication, and ability to thrive under pressure, I excel in collaborative environments. I'm committed to delivering innovative solutions that create significant impact while continuously enhancing my skills.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm eager to contribute to a culture of excellence where creativity, teamwork, and self-motivation drive success. Let's build something amazing together.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 border border-primary/10"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Core Expertise</h3>
            <div className="space-y-4">
              {[
                'Full-Stack Web Development',
                'RESTful API Design & Development',
                'Cloud Architecture (Azure)',
                'Database Design & Optimization',
                'Agile Development Methodologies',
                'System Integration & Migration',
              ].map((expertise, index) => (
                <motion.div
                  key={expertise}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform" />
                  <span className="text-foreground/80 group-hover:text-primary transition-colors">
                    {expertise}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Drives Me
            </h3>
            <p className="text-muted-foreground">
              The values that shape my approach to software engineering
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-primary/30"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="text-primary" size={28} />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h4>
                <p className="text-foreground/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
