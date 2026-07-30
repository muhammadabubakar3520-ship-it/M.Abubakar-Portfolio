import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiLinkedin, FiSend } from "react-icons/fi";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend is wired up yet — this just confirms the form works.
    // Hook this up to a form service (e.g. Formspree) or your own API
    // to actually receive messages.
    setStatus(`Thanks, ${form.name.split(" ")[0] || "there"}! I'll get back to you soon.`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </motion.h2>

      <div className="contact-wrap">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p>
            Feel free to reach out for collaborations, internship
            opportunities, or just to say hello.
          </p>

          <div className="contact-details">
            <div className="contact-detail-row">
              <FiMail /> muhammad.abubakar3520@gmail.com
            </div>
            <div className="contact-detail-row">
              <FiPhone /> 0326-6966686
            </div>
          </div>

          <div className="social-row">
            <a
              className="social-icon"
              href="https://www.linkedin.com/in/muhammad-abubakar-9699323b4?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button className="btn btn-primary" type="submit">
            <FiSend /> Send Message
          </button>
          <p className="form-status">{status}</p>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
