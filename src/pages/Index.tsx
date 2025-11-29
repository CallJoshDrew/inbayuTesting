import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import ResortSection from "@/components/ResortSection";
import Footer from "@/components/Footer";
import kapalaiResort from "@/assets/sipadan_kapalai.png";
import pearlIsland from "@/assets/pearl_island.png";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#f3eee7] flex flex-col">
      <Navbar />
      {/* Main Content - Split Screen */}
      <main className="flex-1 flex flex-col md:flex-row h-[88vh] mt-[6vh]">
        {/* Sipadan Kapalai */}
        <div className="h-[44vh] md:h-auto md:flex-1">
          <ResortSection
            title="Sipadan Kapalai Dive Resort"
            description="Experience paradise at our exclusive tropical resort. Pristine beaches, crystal-clear waters, and world-class amenities await you in this secluded island sanctuary."
            buttonText="Explore"
            buttonLink="https://www.sipadan-kapalai.com"
            backgroundImage={kapalaiResort}
            position="left"
          />
        </div>

        {/* Pearl Island */}
        <div className="h-[44vh] md:h-auto md:flex-1">
          <ResortSection
            title="Pearl Island Resort"
            description="Located beside Bohey Dulang National Park, this new luxury retreat offers unrivaled access to adventure. Hike for breathtaking panoramic views of the mountains, sea, and sky, then relax in your tropical Semporna haven."
            buttonText="Explore"
            buttonLink="https://www.pearlislandresorts.com"
            backgroundImage={pearlIsland}
            position="right"
          />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
