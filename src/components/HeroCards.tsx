import Rain from "../assets/rain.png";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Service */}
        <img 
        src={Rain}
        className="w-[300px] md:w-[900px] lg:w-[900px] object-contain"        
        />
    </div>
  );
};
