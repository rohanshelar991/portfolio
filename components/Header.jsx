"use client";

import { FaEnvelope, FaGithub, FaFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import { gsap } from "gsap";
import dynamic from "next/dynamic";
import { MorphingText } from "@/components/magicui/morphing-text";
import { quickHighlights } from "@/constants";

const ComputersCanvas = dynamic(() => import("./Computers"), {
  ssr: true,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white/40"></div>
    </div>
  ),
});

const Header = () => {
  gsap.registerPlugin(ScrollToPlugin);

  const handleScrollToAbout = () => {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: "#aboutme" },
    });
  };

  return (
    <header id="header" className="header_wrapper flex justify-center w-full items-center relative h-[100svh]">
      <div className="header_fx header_fx_one" />
      <div className="header_fx header_fx_two" />
      <div className="header_fx header_fx_three" />
      <div className="header_main_wrapper max-w-7xl w-full h-[100lvh]">
        <div className="header_model h-[100lvh] ">
            <ComputersCanvas />
        </div>
        <div className="header_textuals_wrapper h-full absolute w-[100vw] top-0 left-0 flex items-center justify-center">
          <div className="header_textual h-full max-w-7xl flex flex-col justify-center pr-[4%] lg:pr-[10%] pl-[4%] lg:pl-[5%]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="header_kicker"
            >
              APSIT | CSE (Data Science) | Open to internships and collaborations
            </motion.div>
            <div className="header_text flex flex-col justify-center">
              <motion.h2
                className="header-h"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.08 }}
              >
                Hii ! 👋
              </motion.h2>
              <motion.h2
                className="header-main-h"
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.16 }}
              >
                I am <span>Rohan Shelar</span>
              </motion.h2>
              <motion.div
                className="flex justify-start items-start gap-4 header-h"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.24 }}
              >
                THE
              <MorphingText texts={["DEVELOPER", "FULL STACK BUILDER", "DATA SCIENCE STUDENT", "CYBER SECURITY LEARNER"]} />
              </motion.div>
            </div>
            <motion.p
              className="header_intro"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.32 }}
            >
              Building polished web and mobile products with strong motion, clean interfaces, and practical engineering depth.
            </motion.p>
            <motion.div
              className="header_cta_row"
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.38 }}
            >
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="header_primary_cta">
                View Resume
              </a>
              <button onClick={() => gsap.to(window, { duration: 1.2, scrollTo: { y: "#myprojects_wrapper" } })} className="header_secondary_cta">
                Explore Projects
              </button>
            </motion.div>
            <motion.div
              className="header_social flex"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.36 } },
              }}
            >
              <motion.a
                className="header_icon"
                href="https://github.com/rohanshelar991"
                target="_blank"
                rel="noreferrer"
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                className="header_icon"
                href="mailto:rmshelar11@gmail.com"
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              >
                <FaEnvelope />
              </motion.a>
              <motion.a
                className="header_icon"
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              >
                <FaFileAlt />
              </motion.a>
            </motion.div>
            <div className="header_stat_row">
              <motion.div
                className="header_stat_card"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.42 }}
              >
                <span>Selected Builds</span>
                <strong>06+</strong>
              </motion.div>
              <motion.div
                className="header_stat_card"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <span>Internships</span>
                <strong>03</strong>
              </motion.div>
              <motion.div
                className="header_stat_card"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.58 }}
              >
                <span>Diploma Score</span>
                <strong>90.47%</strong>
              </motion.div>
            </div>
            <motion.div
              className="header_highlight_strip"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.64 }}
            >
              {quickHighlights.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center">
        <motion.button
          onClick={handleScrollToAbout}
          animate={{ y: [0, 20, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="flex items-center gap-4"
        >
          <div className="w-[26px] h-[55px] lg:w-[35px] lg:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#f4f8fb] mb-1"
            />
          </div>
          Click Me
        </motion.button>
      </div>
    </header>
  );
};

export default Header;
