import { useState } from "react";
import { useTranslation } from "react-i18next";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import ResortSection from "@/components/ResortSection";
import Footer from "@/components/Footer";
import kapalaiResort from "@/assets/sipadan_kapalai.png";
import pearlIsland from "@/assets/pearl_island.png";
import "@/i18n/config";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();

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
            title={t("sipadan.title")}
            description={t("sipadan.description")}
            buttonText={t("sipadan.explore")}
            buttonLink="https://kapalai-testing.vercel.app"
            backgroundImage={kapalaiResort}
            position="left"
          />
        </div>

        {/* Pearl Island */}
        <div className="h-[44vh] md:h-auto md:flex-1">
          <ResortSection
            title={t("pearl.title")}
            description={t("pearl.description")}
            buttonText={t("pearl.explore")}
            buttonLink="https://pearl-testing.vercel.app"
            backgroundImage={pearlIsland}
            position="right"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;