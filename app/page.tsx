import HeroSection from "./_components/HeroSection";
import NavBar from "./_components/NavBar";
import Projects from "./_components/Projects"

export default function Home() {
  return (
    <div className="bg-black">
      <NavBar />
      <HeroSection />
      <Projects />
    </div>
  );
}