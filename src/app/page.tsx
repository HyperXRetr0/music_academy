import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Instructors from "@/components/Instructors";
import Testimonial from "@/components/Testimonial";
import Upcoming from "@/components/Upcoming";
import WhyChooseUs from "@/components/WhyChooseUs";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Hero />
      <Featured />
      <WhyChooseUs />
      <Testimonial />
      <Upcoming />
      <Instructors />
    </main>
  );
}
