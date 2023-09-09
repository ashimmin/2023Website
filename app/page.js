import Image from "next/image";
import Link from "next/link";
import background from "../public/assets/landing-hero-background.jpg";
import as from "../public/assets/as.svg";

const navData = [
  { title: "About", link: "/about" },
  { title: "Design", link: "/design" },
  { title: "Ceramics", link: "/ceramics" },
  { title: "Resume", link: "/resume" },
];

export default function Home() {
  return (
    <div
      className="bg-center bg-cover h-screen text-white"
      style={{ backgroundImage: `url('assets/landing-hero-background.jpg')` }}
    >
      <div className="">
        <div
          className="h-screen bg-origin-content p-4 bg-no-repeat bg-center"
          style={{ backgroundImage: `url('assets/as.svg')` }}
        >
          <div className="flex flex-wrap justify-center items-center h-screen w-screen">
            <div className="uppercase text-center text-[36px] font-[500]">
              Andy Shimmin
            </div>
            <ul className="w-full flex flex-wrap justify-between items-center p-9">
              {/* Note: Fix full width */}
              {navData.map((item, i) => (
                <Link href={item.link}>
                  <li
                    key={item.i}
                    className="uppercase font-bold text-opacity-50 hover:text-[#333341] hover:/public/fonts/Al-Khoud-Regular.otf md:text-nav text-[48px] font-[900]"
                  >
                    {item.title}
                  </li>
                </Link>
              ))}
            </ul>
            <div className="text-center text-[28px] font-[500]">
              Interaction Designer & Ceramicist
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
