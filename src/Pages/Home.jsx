import HomeHero from "../assets/HomeHero.png";
import HomeHero2 from "../assets/HomeHero2.png";
import HomeHero3 from "../assets/HomeHero3..png";
import HomeHero4 from "../assets/HomeHero4.png";

export default function Home() {
  return (
    <main>
      <div
        className="relative overflow-hidden bg-cover bg-center md:h-[800px] md:bg-top"
        style={{ backgroundImage: `url(${HomeHero})` }}
      >
        <img
          src={HomeHero4}
          className="absolute right-0 bottom-10 left-0 object-cover md:-bottom-50 md:flex"
        />
        <section className="side z-90 container h-[300px] md:h-full">
          {/* Words */}
          <div className="mt-22 flex flex-col items-center justify-center md:mt-20 md:gap-4">
            <h1 className="text-center text-[12px] tracking-wide uppercase md:text-[25px]">
              the <br />
              world’s <br /> most
            </h1>
            <h2 className="relative mt-6 text-center text-[62px] leading-12 font-light text-white uppercase md:mt-0 md:text-[198px] md:leading-34">
              extra <br />
              ordinary
            </h2>

            <img
              src={HomeHero2}
              className="object-fit absolute right-0 bottom-0 left-0 z-20 md:-bottom-50"
            />

            <h3 className="relative z-40 text-center text-[52px] font-light text-white uppercase md:text-[141px]">
              Places
            </h3>

            <img
              src={HomeHero3}
              className="absolute right-0 bottom-0 left-0 z-40 md:-bottom-30"
            />
          </div>
        </section>
      </div>

      <div className="h-screen">
        <h1>Experiences</h1>
      </div>
    </main>
  );
}
