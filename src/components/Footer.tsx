import inbayuRightReserved from "@/assets/All_right_reserved_Black_Font.png";
const Footer = () => {
  return (
    <footer className="bg-[#f3eee7] h-[6vh] flex items-center justify-center">
     
      <div className="text-center text-[#313131] text-xs md:text-xs mr-2">
        © 2025
      </div>
            <img src={inbayuRightReserved} alt="an INBAYU Collection logo" className="h-3 md:h-5 object-cover" />
     
    </footer>
  );
};

export default Footer;
