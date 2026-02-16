import ContentSection from "@/components/content-1";
import Features from "@/components/features-1";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <ContentSection />
      <FooterSection />
    </>
  );
}
