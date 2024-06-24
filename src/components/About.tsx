import { Statistics } from "./Statistics";
import pilot from "../assets/company.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[400px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Company
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                SmartWeather Tech adalah inovator dalam teknologi prediksi cuaca berbasis IoT yang bertujuan untuk memudahkan hidup kamu. Berdiri pada tahun 2024, kami memiliki visi untuk menyediakan informasi cuaca yang akurat dan real-time langsung di genggaman kamu.

                Dengan alat IoT canggih yang kami kembangkan, kamu bisa mengetahui kapan hujan akan turun dengan tepat, hingga beberapa jam sebelumnya. Kami percaya bahwa dengan prediksi cuaca yang akurat, kamu bisa merencanakan aktivitas sehari-hari dengan lebih baik dan tanpa rasa khawatir.

                Tim kami terdiri dari para ahli di bidang teknologi IoT, data science, dan meteorologi yang berdedikasi untuk memberikan solusi terbaik dan inovatif bagi kebutuhan kamu. Kami bangga bisa menjadi bagian dari gaya hidup modern yang lebih cerdas dan terencana.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
