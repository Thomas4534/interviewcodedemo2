export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Demos from "@/components/demos";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import SuccessStories from "@/components/success-stories"; // 👈 new import

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      <Demos />
      <Testimonials />
      <SuccessStories /> {/* 👈 placeholder for your future code */}
      <Cta />
    </>
  );
}
