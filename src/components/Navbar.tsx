import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import inbayuLogo from "@/assets/an_Inbayu_collection.png";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  
  const { t, i18n } = useTranslation();
   const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
  };

  const isEnglish = i18n.language === 'en';

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#f3eee7] backdrop-blur-sm border-b border-primary-foreground/10 h-[6vh] flex items-center">
      <div className="max-w-8xl mx-auto px-6 w-full">
        <div className="flex justify-between items-center">
          <div className="flex-1" />
          <div className="relative rounded-2xl overflow-hidden">
            <img src={inbayuLogo} alt="an INBAYU Collection logo" className="h-5 md:h-6 object-cover" />
          </div>
          {/* <div className="text-[#313131] font-cormorant text-xl md:text-2xl font-medium tracking-wide text-center">An INBAYU Collection</div> */}
          <div className="flex-1 flex justify-end">
            <button onClick={toggleLanguage} className="px-4 py-2 md:text-base text-xs">
              {isEnglish ? "ENG" : "中文"}
            </button>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button className="text-[#313131]">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent className="bg-[#f3eee7] border-[#313131]">
                <SheetHeader>
                  <SheetTitle className="text-[#313131] font-cormorant text-xl text-left">{t("ourResorts")}</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 mt-8">
                  <a href="https://kapalai-testing.vercel.app" rel="noopener noreferrer" onClick={() => setOpen(false)} className="text-[#313131] opacity-90 hover:opacity-100 transition-colors text-lg font-normal">
                    {t("sipadan.title")}
                  </a>
                  <a href="https://pearl-testing.vercel.app" rel="noopener noreferrer" onClick={() => setOpen(false)} className="text-[#313131] opacity-90 hover:opacity-100  transition-colors text-lg font-normal">
                    {t("pearl.title")}
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
