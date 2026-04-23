import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site_footer">
      <div className="site_footer_inner">
        <div className="site_footer_top">
          <div className="site_footer_brand">
            <span className="site_footer_mark">RS</span>
            <div>
              <h2>Rohan Shelar</h2>
              <p>Design-led web, mobile, and product-focused software experiences.</p>
            </div>
          </div>
          <div className="site_footer_links">
            <a href="mailto:rmshelar11@gmail.com" target="_blank" rel="noreferrer">
              Email
            </a>
            <a href="https://github.com/rohanshelar991" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
        </div>

        <div className="site_footer_grid">
          <div className="site_footer_card">
            <span className="site_footer_label">Email</span>
            <a href="mailto:rmshelar11@gmail.com" target="_blank" rel="noreferrer">
              rmshelar11@gmail.com
            </a>
          </div>
          <div className="site_footer_card">
            <span className="site_footer_label">GitHub</span>
            <a href="https://github.com/rohanshelar991" target="_blank" rel="noreferrer">
              github.com/rohanshelar991
            </a>
          </div>
          <div className="site_footer_card">
            <span className="site_footer_label">Location</span>
            <span>Mumbai, Maharashtra, India</span>
          </div>
        </div>

        <div className="site_footer_divider">
          <motion.div
            className="site_footer_divider_bar"
            initial={{ width: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            whileInView={{ width: "100%" }}
            exit={{ width: 0 }}
          />
        </div>

        <div className="site_footer_bottom">
          <div className="site_footer_copy">
            <span>© {year} Rohan Shelar. Crafted with motion and intention.</span>
          </div>
          <div className="site_footer_legal">
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/refund-policy">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
