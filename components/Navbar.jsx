"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

const NavigationBar = () => {
  gsap.registerPlugin(ScrollToPlugin);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: sectionId },
      ease: "power2.inOut",
    });
  };

  const navItems = [
    {
      id: "home",
      name: "Home",
      link: "#",
      onClick: () => scrollToSection("#header"),
    },
    {
      id: "about",
      name: "About",
      link: "#",
      onClick: () => scrollToSection("#aboutme"),
    },
    {
      id: "skills",
      name: "Skills",
      link: "#",
      onClick: () => scrollToSection("#iknow"),
    },
    {
      id: "experience",
      name: "Experience",
      link: "#",
      onClick: () => scrollToSection("#workexperience"),
    },
    {
      id: "works",
      name: "Works",
      link: "#",
      onClick: () => scrollToSection("#myprojects_wrapper"),
    },
    {
      id: "services",
      name: "Services",
      link: "#",
      onClick: () => scrollToSection("#services_section"),
    },
    {
      id: "education",
      name: "Education",
      link: "#",
      onClick: () => scrollToSection("#education_section"),
    },
    {
      id: "faq",
      name: "FAQ",
      link: "#",
      onClick: () => scrollToSection("#faq_section"),
    },
  ];

  useEffect(() => {
    const sections = [
      ["home", "header"],
      ["about", "aboutme"],
      ["skills", "iknow"],
      ["experience", "workexperience"],
      ["works", "myprojects_wrapper"],
      ["services", "services_section"],
      ["education", "education_section"],
      ["faq", "faq_section"],
      ["contact", "contactme_wrapper"],
    ];

    const observers = sections
      .map(([id, elementId]) => {
        const element = document.getElementById(elementId);
        if (!element) return null;

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          },
          {
            threshold: 0.35,
            rootMargin: "-20% 0px -35% 0px",
          }
        );

        observer.observe(element);
        return observer;
      })
      .filter(Boolean);

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <header className="flex justify-center items-center">
      <div className="relative w-full">
        <Navbar>
          {/* Desktop Navigation */}
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} activeItem={activeSection} />
            <NavbarButton 
              variant="outline"
              className={activeSection === "contact" ? "navbar_contact_active" : ""}
              onClick={() => scrollToSection("#contactme_wrapper")}
            >
              Contact
            </NavbarButton>
          </NavBody>

          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <button
                  key={`mobile-link-${idx}`}
                  onClick={() => {
                    item.onClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className={`relative transition-colors duration-200 ${activeSection === item.id ? "text-black" : "text-neutral-600 hover:text-black"}`}
                >
                  <span className="block">{item.name}</span>
                </button>
              ))}
              <div className="flex w-full flex-col gap-4">
                <NavbarButton
                  onClick={() => {
                    scrollToSection("#contactme_wrapper");
                    setIsMobileMenuOpen(false);
                  }}
                  variant="outline"
                  className="w-full"
                >
                  Contact
                </NavbarButton>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </div>
    </header>
  );
};

export default NavigationBar;
