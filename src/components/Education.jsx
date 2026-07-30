import { motion } from "framer-motion";

const education = [
  {
    degree: "BS in Computer Science",
    school: "University of Management and Technology (UMT), Lahore",
    period: "2022 – 2026",
    detail:
      "Relevant coursework: Programming Fundamentals, Object-Oriented Programming, Data Structures & Algorithms, Databases, Operating Systems, Artificial Intelligence, Data Science.",
  },
  {
    degree: "Intermediate (FSc. Pre-Engineering)",
    school: "Board of Intermediate and Secondary Education, Lahore",
    period: "2020 – 2022",
    detail: "Marks obtained: 916.",
  },
  {
    degree: "Matriculation (Science)",
    school: "The New School, Lahore",
    period: "2018 – 2020",
    detail: "Marks obtained: 965.",
  },
];

const itemVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

function Education() {
  return (
    <section id="education">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h2>

      <div className="experience-list">
        {education.map((item, index) => (
          <motion.div
            className="card experience-card"
            key={item.degree}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariant}
          >
            <div className="experience-header">
              <div>
                <h3>{item.degree}</h3>
                <p className="experience-company">{item.school}</p>
              </div>
              <span className="experience-period">{item.period}</span>
            </div>

            <ul className="experience-points">
              <li>{item.detail}</li>
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;
