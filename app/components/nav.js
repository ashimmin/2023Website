import Image from "next/image";
import Link from "next/link";

const navData = [
  { title: "About", link: "about" },
  { title: "Design", link: "design" },
  { title: "Ceramics", link: "ceramics" },
  { title: "Resume", link: "resume" },
];

export default function Home() {
  return (
    <main className="">
      <div className="">
        <Link href="/">
          <div className="uppercase text-[#909199]">Andy Shimmin</div>
        </Link>
      </div>

      <ul className="grid grid-cols-4 ">
        {/* Note: Fix full width */}
        {navData.map((item, i) => (
          <Link href={item.link}>
            <li
              key={item.i}
              className="uppercase font-black text-[#333341] text-opacity-50 hover:text-[#333341] hover:/public/fonts/Al-Khoud-Regular.otf md:text-nav"
            >
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
    </main>
  );
}
