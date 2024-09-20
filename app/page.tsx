import HeroSection from "./_components/HeroSection";
import NavBar from "./_components/NavBar";

export default function Home() {
  return (
    <div className="bg-black">
      <NavBar />
      <HeroSection />
    </div>
  );
}