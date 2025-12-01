import React, { useState } from 'react'
import { travelData } from "../assets/Data/Data.js"
import { MapPin } from 'lucide-react'


export default function NavCountries() {

    const countries = [
        "Africa", "Asia", "Europe", "North America", "South America", "Oceania"
    ]

    const [NavState, setNavState] = useState("North America")

    return (
        <section className="bg-gold-10 py-16">
            <div className="w-full flex flex-col items-center">
                <div className="text-center mb-10">
                    <h1 className="text-[60px] leading-[1.2] text-black">
                        Top Rated <br /> Experiences
                    </h1>
                </div>

                <ul className="flex gap-10 text-[24px] text-gold-20 mb-10">
                    {countries.map((country, e) => (
                        <li key={e} onClick={() => setNavState(country)} className={`transition ${NavState === country ? "underline" : ""
                            }`}>{country}</li>
                    ))}
                </ul>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 container side">
                    {travelData.filter((item) => item.region === NavState).slice(0, 4).map((item) => (
                        <div key={item.id} className="relative w-full h-[570px] rounded-xl overflow-hidden shadow-lg">
                            <img
                                src={item.img}
                                alt={item.place}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-70"></div>
                            <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                                <div>
                                    <p className="flex items-center text-[12px] text-gray-300 gap-1">
                                        <MapPin size={14} /> {item.region}
                                    </p>
                                    <h2 className="text-[24px] md:text-[32px] mt-1 leading-snug">
                                        {item.place}
                                    </h2>
                                    <p className="mt-2 text-lg">FROM € {item.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
