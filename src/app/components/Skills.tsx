import { motion } from 'motion/react';
import { Code, Database, Cloud, Wrench, GitBranch, Sparkles } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Languages & Frameworks',
      skills: [
        { name: 'C# / .NET Core', level: 90, color: 'bg-purple-500' },
        { name: 'ASP.NET Web API', level: 90, color: 'bg-blue-500' },
        { name: 'Angular', level: 80, color: 'bg-red-500' },
        { name: 'JavaScript/TypeScript', level: 80, color: 'bg-yellow-500' },
        { name: 'LINQ', level: 85, color: 'bg-indigo-500' },
      ],
    },
    {
      icon: Database,
      title: 'Databases & ORM',
      skills: [
        { name: 'SQL Server', level: 85, color: 'bg-orange-500' },
        { name: 'PostgreSQL', level: 80, color: 'bg-blue-600' },
        { name: 'Entity Framework Core', level: 85, color: 'bg-purple-600' },
        { name: 'ADO.NET', level: 80, color: 'bg-teal-500' },
      ],
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: [
        { name: 'Microsoft Azure', level: 75, color: 'bg-blue-400' },
        { name: 'Azure Storage', level: 80, color: 'bg-cyan-500' },
        { name: 'CI/CD', level: 70, color: 'bg-green-500' },
      ],
    },
    {
      icon: Wrench,
      title: 'Tools & Practices',
      skills: [
        { name: 'Postman / API Testing', level: 85, color: 'bg-orange-400' },
        { name: 'Git / GitHub', level: 80, color: 'bg-gray-700' },
        { name: 'RESTful API Design', level: 90, color: 'bg-green-600' },
        { name: 'Unit Testing', level: 75, color: 'bg-pink-500' },
      ],
    },
  ];

  const additionalSkills = [
    'Agile Development',
    'Microservices Architecture',
    'Problem Solving',
    'Code Review',
    'System Design',
    'Performance Optimization',
    'Database Design',
    'Technical Documentation',
    'Team Collaboration',
    'API Integration',
    'Security Best Practices',
    'Debugging & Troubleshooting',
  ];

  return (
    <section id="skills" className="py-32 bg-gradient-to-b from-secondary/20 to-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
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
            Technical Expertise
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        {/* Main Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <category.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-foreground">{skill.name}</span>
                      <span className="text-sm font-bold text-primary">{skill.level}%</span>
                    </div>
                    <div className="relative h-3 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05, ease: "easeOut" }}
                        className={`h-full ${skill.color} rounded-full relative overflow-hidden`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-white to-secondary/50 rounded-3xl p-10 shadow-lg border border-border/50"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
              <Sparkles className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Additional Expertise</h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {additionalSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-5 py-3 bg-white border-2 border-primary/20 text-foreground rounded-2xl font-medium hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 cursor-default shadow-sm hover:shadow-md"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            {
              title: 'Frontend',
              technologies: ['Angular', 'TypeScript', 'HTML/CSS', 'JavaScript', 'jQuery'],
              icon: Code,
            },
            {
              title: 'Backend',
              technologies: ['C#', '.NET Core', 'Web API', 'LINQ', 'Entity Framework'],
              icon: GitBranch,
            },
            {
              title: 'Infrastructure',
              technologies: ['Azure', 'SQL Server', 'PostgreSQL', 'Git', 'Postman'],
              icon: Database,
            },
          ].map((stack, index) => (
            <motion.div
              key={stack.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <stack.icon className="text-primary" size={20} />
                </div>
                <h4 className="font-bold text-foreground">{stack.title}</h4>
              </div>
              <div className="space-y-2">
                {stack.technologies.map((tech, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-foreground/70">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
