import Image from "next/image";
import Nav from "../components/nav";
import Link from "next/link";

const designsData = [
  {
    title: "Ford",
    link: "/ford",
    description: "An unique approach to assisted highway driving experiences",
    image:
      "/assets/design/cisco/cisc5-85ceefc9d45f0e54aa610edb5bf476cef73edbc291c9b64fae2405da3f1d4820.png",
    skills:
      "PROTOTYPING, INTERACTION DESIGN, WIREFRAMING, VISUAL DESIGN, USABILITY RESEARCH",
  },
  {
    title: "Cisco",
    link: "/cisco",
    description: "Simplifying certificate renewal for on-site server admins",
    image:
      "/assets/design/cisco/cisc5-85ceefc9d45f0e54aa610edb5bf476cef73edbc291c9b64fae2405da3f1d4820.png",
    skills: "VISUAL DESIGN, INTERACTION DESIGN ",
  },
  {
    title: "Blend",
    link: "/blend",

    description:
      "Demystifying intricate compliance and mortgage application processes for new hires | OKR dashboard to help employees align with higher level corporate objectives.",
    image:
      "/assets/design/cisco/cisc5-85ceefc9d45f0e54aa610edb5bf476cef73edbc291c9b64fae2405da3f1d4820.png",
    skills: "PRODUCT DESIGN, UX DESIGN DATA, VISUALIZATION",
  },
  {
    title: "Reduct",
    link: "/reduct",

    description:
      "What could the future of research transcription look like? | Getting to the project page more efficiently",
    image:
      "/assets/design/cisco/cisc5-85ceefc9d45f0e54aa610edb5bf476cef73edbc291c9b64fae2405da3f1d4820.png",
    skills: "VISUAL DESIGN, INTERACTION DESIGN, PRODUCT DESIGN",
  },
  {
    title: "Thesis",
    link: "/thesis",

    description: "Contemporary interface patterns for learning anything online",
    image:
      "/assets/design/cisco/cisc5-85ceefc9d45f0e54aa610edb5bf476cef73edbc291c9b64fae2405da3f1d4820.png",
    skills: "INTERACTION, DESIGN VISUAL, DESIGN RESEARCH, Prototyping",
  },
  {
    title: "fuseproject",
    link: "/fuseproject",
    description:
      "Experience Design internship during the summer of 2017 for the consumer product firm fuseproject. Spent 3 months working on both physical and digital prototypes for a smart home fitness startup in the Bay Area.",
    image:
      "/public/assets/design/cisco/cisc5-85ceefc9d45f0e54aa610edb5bf476cef73edbc291c9b64fae2405da3f1d4820.png",
    skills: "UX DESIGN, VISUAL DESIGN ",
  },
  {
    title: "Infographic",
    link: "/roadtrip",

    description:
      "“What’s interaction design?” “Well, it’s kind of like going on a roadtrip…”",
    image:
      "/public/assets/design/cisco/cisc5-85ceefc9d45f0e54aa610edb5bf476cef73edbc291c9b64fae2405da3f1d4820.png",
    skills: "VISUAL DESIGN, DATA VISUALIZATION, ILLUSTRATION",
  },
];

export default function Home() {
  return (
    <main className="p-20">
      <Nav />{" "}
      <div className="py-20 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="">
          <ul>
            {designsData.map((item, i) => (
              <li
                key={item.i}
                className="text-[#333341] text-opacity-50 hover:text-[#333341]"
              >
                <Link href={`design/${item.link}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          {designsData.map((item, i) => (
            <div key={item.i} className="py-10">
              {" "}
              <div className="rounded">
                <Image
                  src={`${item.image}`}
                  alt={item.title}
                  width={500}
                  height={500}
                />
              </div>
              <div className="text-base">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
