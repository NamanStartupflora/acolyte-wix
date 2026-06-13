import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MissionSection from "./components/MissionSection";
import VenturesSection from "./components/VenturesSection";
import VisionSection from "./components/VisionSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <VisionSection />
        <MissionSection />
        <VenturesSection />
      </main>
      <Footer />
    </div>
  );
}
