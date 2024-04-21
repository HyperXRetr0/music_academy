"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { musicSchoolContent } from "../data/music_courses.json";
import Image from "next/image";
const WhyChooseUs = () => {
  return (
    <div>
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
};

export default WhyChooseUs;
