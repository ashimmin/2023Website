"use client";
import { useState } from "react";
import Image from "next/image";
import Nav from "../components/nav";
import Link from "next/link";
import { designsData } from "./page";


export default function Home() {
    const [hoveredTeam, setHoveredTeam] = useState(0);
    return (
        <main className="p-20">
            <Nav />{" "}
            <div className="py-20 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="">
                    {designsData.map((item, i) => (
                        <div
                            key={item.i}
                            className="relative group  text-[#333341] text-opacity-50 hover:text-[#333341]"
                            onMouseEnter={() => setHoveredTeam(i)}
                            onMouseLeave={() => setHoveredTeam(0)}
                        >
                            <Link href={`design/${item.link}`}>{item.title}</Link>
                            {hoveredTeam === i && (
                                <div className="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                                    <Image
                                        src={`${item.image}`}
                                        alt={item.title}
                                        width={500}
                                        height={500} />
                                    <div className="text-base">{item.description}</div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
