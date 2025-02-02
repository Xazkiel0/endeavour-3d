import AboutSection from "@/components/custom/AboutSection";
import { HeroSection } from "@/components/custom/HeroSection";
import { Spotlight } from "@/components/ui/spotlight-new";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-items-center w-full overflow-hidden">
      <Spotlight />
      <main className="max-w-7xl flex flex-col gap-8 items-center sm:items-start w-full relative">
        <HeroSection />
        <AboutSection />
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          Footer
        </footer>
      </main>
    </div>
  );
}
