import { Button } from "./ui/button";
import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
            Nggak Galau Karena Hujan
            </span>{" "}
            Prediksi cuaca  
          </h2>{" "}
          Real-Time{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
            dari gadget kamu 
            </span>{" "}
            
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        Stay dry and plan your day with confidence, karena kamu bisa tahu hujan bakal turun dalam beberapa jam lagi dengan prediksi cuaca real-time dari gadget kamu. Jangan basahin badanmu, kuy cek cuaca dulu biar nggak kehujanan!
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <a href="#pricing">
            <Button className="w-full md:w-1/3">Get Started</Button>
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>
    </section>
  );
};
