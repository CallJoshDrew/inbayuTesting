interface ResortSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
  position: "left" | "right" | "top" | "bottom";
}

const ResortSection = ({ title, description, buttonText, buttonLink, backgroundImage }: ResortSectionProps) => {
  return (
    <div className="relative h-full w-full resort-overlay bg-cover bg-center flex items-center justify-center p-8 md:p-12" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="relative z-10 text-center max-w-xl space-y-6 fade-enter">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-resort leading-tight">{title}</h1>
        <p className="text-sm md:text-lg  lg:text-xl text-[#f3eee7] leading-relaxed">{description}</p>
        <div className="pt-4">
          <a href={buttonLink} rel="noopener noreferrer" className="bg-[#e8e0d5] text-[#313131] px-6 py-3 rounded-lg font-medium hover:bg-[#f3eee7] transition-colors inline-block text-xs md:text-sm">
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResortSection;
