"use client";

import { achievements, certifications, education, faqs, services } from "@/constants";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown, FaMedal, FaRegFileAlt, FaRocket } from "react-icons/fa";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
};

const Extras = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <section id="services_section" className="extras-section extras-section-light">
        <div className="extras-bg-orb extras-bg-orb-one" />
        <div className="extras-shell mx-auto max-w-7xl">
          <div className="text-center extras-header">
            <h1 className="header-h">Services</h1>
            <p className="text-lg md:text-4xl">What I can build and how I like to collaborate.</p>
          </div>
          <div className="extras-marquee">
            <span>Design-led UI</span>
            <span>Full-stack builds</span>
            <span>Student project execution</span>
            <span>Hackathon-ready delivery</span>
          </div>
          <div className="extras-grid mt-10 grid gap-6 md:grid-cols-3">
            {services.map((item, index) => (
              <motion.article
                key={item.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.08 }}
                className="extras-card extras-card-shadow"
                whileHover={{ y: -8, rotate: index % 2 === 0 ? -1 : 1 }}
              >
                <div className="extras-icon mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                  <FaRocket />
                </div>
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-black/75">{item.summary}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements_section" className="extras-section extras-section-white">
        <div className="extras-bg-orb extras-bg-orb-two" />
        <div className="extras-shell mx-auto max-w-7xl">
          <div className="text-center extras-header">
            <h1 className="header-h">Achievements & Credentials</h1>
            <p className="text-lg md:text-4xl">Extra signals that strengthen the portfolio story.</p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="extras-stack grid gap-6">
              {achievements.map((item, index) => (
                <motion.article
                  key={item}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: index * 0.06 }}
                  className="extras-card extras-card-muted"
                  whileHover={{ y: -6 }}
                >
                  <div className="mb-4 flex items-center gap-4">
                    <span className="extras-badge flex h-11 w-11 items-center justify-center rounded-full bg-black text-white">
                      <FaMedal />
                    </span>
                    <span className="text-sm uppercase tracking-[0.25em] text-black/55">Achievement 0{index + 1}</span>
                  </div>
                  <p className="text-lg leading-8">{item}</p>
                </motion.article>
              ))}
            </div>
            <motion.div {...fadeUp} className="extras-dark-panel">
              <div className="extras-icon extras-icon-light mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
                <FaRegFileAlt />
              </div>
              <h3 className="text-3xl font-semibold">Certifications</h3>
              <div className="mt-6 space-y-4">
                {certifications.map((item) => (
                  <div key={item.name} className="extras-dark-card">
                    <p className="text-lg">{item.name}</p>
                    <p className="mt-1 text-sm uppercase tracking-[0.18em] text-white/70">{item.issuer}</p>
                  </div>
                ))}
              </div>
              <div className="extras-dark-card mt-8">
                <p className="text-sm uppercase tracking-[0.18em] text-white/70">Resume</p>
                <p className="mt-2 text-lg text-white/90">The downloadable resume is included in this cloned portfolio too.</p>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="extras-pill-button mt-5 inline-flex rounded-full border border-white px-6 py-3 text-sm uppercase tracking-[0.16em] transition hover:bg-white hover:text-black"
                >
                  Open Resume
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="education_section" className="extras-section extras-section-dark">
        <div className="extras-bg-orb extras-bg-orb-three" />
        <div className="extras-shell mx-auto max-w-7xl">
          <div className="text-center extras-header">
            <h1 className="header-h">Education</h1>
            <p className="text-lg md:text-4xl">The academic path behind the work.</p>
          </div>
          <div className="extras-grid mt-10 grid gap-6 md:grid-cols-3">
            {education.map((item, index) => (
              <motion.article
                key={item.institution}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.07 }}
                className="extras-dark-card extras-education-card"
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <p className="text-sm uppercase tracking-[0.2em] text-white/60">{item.period}</p>
                <h3 className="mt-4 text-2xl font-semibold">{item.institution}</h3>
                <p className="mt-2 text-base text-white/80">{item.degree}</p>
                <p className="mt-4 text-base leading-7 text-white/70">{item.detail}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq_section" className="extras-section extras-section-light">
        <div className="extras-shell mx-auto max-w-6xl">
          <div className="text-center extras-header">
            <h1 className="header-h">FAQ</h1>
            <p className="text-lg md:text-4xl">Quick answers before you reach out.</p>
          </div>
          <div className="mt-10 space-y-4">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <motion.div
                  key={item.question}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: index * 0.05 }}
                  className="extras-faq-item"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="extras-faq-trigger"
                  >
                    <span className="text-xl font-semibold md:text-2xl">{item.question}</span>
                    <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                      <FaChevronDown />
                    </motion.span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.28 }}
                    className="overflow-hidden"
                  >
                    <div className="extras-faq-body">
                      {item.answer}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Extras;
