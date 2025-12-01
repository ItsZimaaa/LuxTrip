import { CalendarCheck, MapPin, Plane, Search, Sun, User } from "lucide-react";
import HomeHero from "../assets/HomeHero.png";
import HomeHero2 from "../assets/HomeHero2.png";
import HomeHero3 from "../assets/HomeHero3.png";
import HomeHero4 from "../assets/HomeHero4.png";
import NavCountries from "../Components/NavCountries.jsx";


export default function Home() {
  const JourneyData = [
    {
      id: 1,
      title: "Destination",
      paragraph: "Where are you going?",
      icon: <Plane />,
    },
    {
      id: 2,
      title: "Travel type",
      icon: <Sun />,
      paragraph: "Adventure Travel",
    },
    {
      id: 3,
      title: "When",
      icon: <CalendarCheck />,
      paragraph: "14 Dec 2022",
    },
    {
      id: 4,
      title: "Travelers",
      icon: <User />,
      paragraph: "2 Persons",
    },
  ];



  return (
    <main>
      <section className="relative flex flex-col h-[700px] items-center justify-center overflow-hidden md:h-[960px] ">
        <section className="side container flex flex-col items-center">
          <h1 className="relative md:bottom-10 text-center text-[14px] md:text-[25px]">
            the <br />
            world’s <br /> most
          </h1>
          <h2 className="relative md:bottom-5 leading-12 text-center text-[62px] md:leading-32 text-white uppercase md:text-[197px]">
            extra <br />
            ordinary
          </h2>
          <h3 className="relative md:bottom-5 z-3 text-[52px] text-white uppercase md:text-[141px]">
            Places
          </h3>
        </section>

        <picture>
          <img
            src={HomeHero}
            className="absolute bottom-0 scale-600 object-cover left-0 -z-1  md:w-full md:scale-100"
          />
          <img
            src={HomeHero2}
            className="absolute bottom-0 left-0 -z-1 hidden md:flex  md:w-full md:scale-100"
          />
          <img
            src={HomeHero3}
            className="absolute bottom-0 left-0 z-2 md:w-full hidden md:flex md:scale-100"
          />
          <img
            src={HomeHero4}
            className="absolute bottom-0 left-0 z-4 md:w-full hidden md:flex md:scale-100 w-screen"
          />
          <div className="h-64 bg-linear-to-b from-transparent to-gold-10 absolute z-4 w-full bottom-0 left-0">
          </div>
        </picture>

        <section className="relative z-5 flex flex-col items-center justify-center">
          <h1 className="text-gold-20 relative top-4 rounded-2xl bg-white px-2 text-[25px] uppercase">
            find your journey
          </h1>
          <div className="flex flex-col gap-4 rounded-3xl bg-white p-6 md:flex-row md:items-center md:justify-center">
            <div className="gap-8 md:flex">
              {JourneyData.slice(0, 2).map((item) => (
                <div key={item.id} className="">
                  <span className="flex gap-2">
                    <h1 className="text-[18px] text-gray-400">{item.icon}</h1>
                    <h2 className="text-[18px] text-gray-400">{item.title}</h2>
                  </span>
                  <h2 className="text-[18px] font-bold">{item.paragraph}</h2>
                </div>
              ))}
            </div>
            <div className="flex gap-8">
              {JourneyData.slice(2, 4).map((item) => (
                <div key={item.id} className="">
                  <span className="flex gap-2">
                    <h1 className="text-[18px] text-gray-400">{item.icon}</h1>
                    <h2 className="text-[18px] text-gray-400">{item.title}</h2>
                  </span>
                  <h2 className="text-[18px] font-bold">{item.paragraph}</h2>
                </div>
              ))}
            </div>
            <button className="flex items-center justify-center gap-2 rounded-2xl bg-black px-3 py-2 text-white">
              <Search /> Find
            </button>
          </div>
        </section>
      </section>

      <NavCountries />



    </main>
  );
}
