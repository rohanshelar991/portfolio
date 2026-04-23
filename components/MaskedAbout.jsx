"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

export default function MaskedAbout() {
  const container = useRef(null);
  const stickyMask = useRef(null);
  const contentDiv = useRef(null);
  const paragraph1 = useRef(null);
  const paragraph2 = useRef(null);
  const paragraph3 = useRef(null);
  const paragraph4 = useRef(null);
  const paragraph5 = useRef(null);

  gsap.registerPlugin(ScrollToPlugin);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Set initial mask size
    gsap.set(stickyMask.current, {
      maskSize: "80%",
      webkitMaskSize: "80%",
    });

    // Set initial content opacity
    gsap.set(contentDiv.current, {
      opacity: 1,
    });

    // Set initial opacity and position for all paragraphs
    const paragraphs = [paragraph1, paragraph2, paragraph3, paragraph4, paragraph5];
    paragraphs.forEach(paragraph => {
      if (paragraph.current) {
        gsap.set(paragraph.current, {
          opacity: 0,
          y: 30,
        });
      }
    });

    // Create the scroll-triggered animation for mask
    gsap.to(stickyMask.current, {
      maskSize: "9200%",
      webkitMaskSize: "9200%",
      ease: "power2.in",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: stickyMask.current,
        pinSpacing: false,
        markers: false, // Set to true for debugging
      },
    });

    // Calculate timing for each paragraph
    const totalParagraphs = 5;
    const startPercentage = 60;
    const endPercentage = 80;
    const totalRange = endPercentage - startPercentage;
    const stepSize = totalRange / totalParagraphs;

    // Create individual scroll-triggered animations for each paragraph
    paragraphs.forEach((paragraph, index) => {
      if (paragraph.current) {
        const paragraphStart = startPercentage + (index * stepSize);
        const paragraphEnd = startPercentage + ((index + 1) * stepSize);
        
        // Create a timeline for each paragraph with smooth transitions
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: `${paragraphStart}% top`,
            end: `${paragraphEnd}% top`,
            scrub: 1, // Smooth scrubbing
            markers: false, // Set to true for debugging
          },
        });

        // Animate the paragraph with slide-up and fade-in
        tl.to(paragraph.current, {
          opacity: 1,
          display: "block",
          y: 0, // Slide up to final position
          duration: 0.8,
          ease: "power2.out",
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="masked-about" id="aboutme">
      <main className="maskmain">
        <div ref={container} className="maskcontainer">
          <div ref={stickyMask} className="stickyMask relative">
            <video
              src="/assets/about-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              draggable={false}
              preload="metadata"
              poster="/about/about-bg.png"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              ref={contentDiv}
              className="about_story_panel z-1 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex w-full md:w-[80%] lg:w-[70%] gap-[10px] md:gap-[20px] items-center flex-col font-roboto px-4 md:px-0 text-white"
            >
              <div className="about_story_intro">
                <span>About Rohan</span>
              </div>
              <p ref={paragraph1} className="about_story_text w-full text-lg md:text-xl lg:text-2xl font-roboto">
                I&quot;m a <span className="font-orisis">second-year</span> Computer Science and Engineering <span className="font-orisis">(Data Science)</span> student at <span className="font-orisis">A. P. Shah Institute of Technology</span>, focused on building modern web and app experiences.
              </p>
              <p ref={paragraph2} className="about_story_text w-full text-lg md:text-xl lg:text-2xl font-roboto">
                I&quot;m passionate about <span className="font-orisis">building meaningful</span> digital products, <span className="font-orisis">solving real-world problems</span>, and learning through practical projects across frontend, backend, mobile, and AI-assisted systems.
              </p>
              <p ref={paragraph3} className="about_story_text w-full text-lg md:text-xl lg:text-2xl font-roboto">
                I also have a growing interest in <span className="font-orisis">cyber security</span>, and I enjoy combining clean engineering with thoughtful interface experiences that feel polished and recruiter-ready.
              </p>
              <p ref={paragraph4} className="about_story_text w-full text-lg md:text-xl lg:text-2xl">
                Let&quot;s collaborate and turn ambitious ideas into usable products.
              </p>
              <p ref={paragraph5} className="about_story_text about_story_contact w-full text-xl md:text-2xl lg:text-3xl">
                Reach me at: <a href="mailto:rmshelar11@gmail.com" target="_blank">rmshelar11@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
