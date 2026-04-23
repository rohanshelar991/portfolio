"use client";

import {
  Header,
  ScrollIndicatior,
  WorkExperience,
  MyProjects,
  ContactMe,
  IKnow,
  Footer,
  Extras,
} from "@/components/index.js";
import "@/assets/scss/common.scss";
import LenisScroll from "@/lib/LenisScroll.js";
import { ScrollBasedText } from "@/components/private/ScrollBasedText";
import MaskedAbout from "@/components/MaskedAbout";
import NavigationBar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <LenisScroll />
      <ScrollIndicatior />
      <div className="overflow-x-hidden home_shell">
        <div className="home_ambient home_ambient_one" />
        <div className="home_ambient home_ambient_two" />
        <Header />
        <div className="section_divider section_divider_light" />
        <MaskedAbout />
        <div className="section_divider section_divider_dark" />
        <IKnow />
        <ScrollBasedText />
        <div className="section_divider section_divider_light" />
        <WorkExperience />
        <div className="section_divider section_divider_gold" />
        <MyProjects />
        <div className="section_divider section_divider_light" />
        <Extras />
        <ContactMe />
        <Footer />
      </div>
    </>
  );
}
