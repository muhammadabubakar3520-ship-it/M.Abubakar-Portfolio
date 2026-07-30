import { motion } from "framer-motion";

const leadership = [
  {
    role: "Orientation Leader",
    org: "UMT Fall Batch 2024",
    points: [
      "Led campus orientation programs to help new BS students settle into university life.",
      "Organized activities at Juggi Taleem to engage children and promote community participation.",
    ],
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

function Leadership() {
  return (
    <section id="leadership">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Leadership &amp; Activities
      </motion.h2>

      <div className="experience-list">
        {leadership.map((item, index) => (
          <motion.div
            className="card experience-card"
            key={item.role}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariant}
          >
            <div className="experience-header">
              <div>
                <h3>{item.role}</h3>
                <p className="experience-company">{item.org}</p>
              </div>
            </div>

            <ul className="experience-points">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Leadership;
