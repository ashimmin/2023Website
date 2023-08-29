import Image from "next/image";
import Nav from "../components/nav";
import Link from "next/link";

const designsData = [
  {
    title: "Ford",
    link: "/ford",
    description:
      "An unique approach to assisted highway driving experiences",
    image:
      "/assets/design/cisco/cisc5-85ceefc9d45f0e54aa610edb5bf476cef73edbc291c9b64fae2405da3f1d4820.png",
    skills:
      "PROTOTYPING, INTERACTION DESIGN, WIREFRAMING, VISUAL DESIGN, USABILITY RESEARCH",
  },
  {
    title: "Cisco",
    link: "/cisco",
<<<<<<< HEAD
    description:
      "Cisco's collaboration design team is tackling the future of business-place communication. Designing for telepresence, conferencing, and phone systems were the primary responsibility of this team at Cisco. We aspired to provide the best experience for enterprise collaboration and making the ease of sharing ideas effortless.",
=======
    description: "Simplifying certificate renewal for on-site server admins",
>>>>>>> main
    image:
      "/assets/design/cisco/cisc5-85ceefc9d45f0e54aa610edb5bf476cef73edbc291c9b64fae2405da3f1d4820.png",
    skills: "VISUAL DESIGN, INTERACTION DESIGN ",
  },
  {
    title: "Blend",
    link: "/blend",
<<<<<<< HEAD
    description:
      "Blend's mission is to bring simplicity and transparency to consumer lending.",
=======
    description: "Demystifying intricate compliance and mortgage application processes for new hires | OKR dashboard to help employees align with higher level corporate objectives.",
>>>>>>> main
    image:
      "/assets/design/cisco/cisc5-85ceefc9d45f0e54aa610edb5bf476cef73edbc291c9b64fae2405da3f1d4820.png",
    skills: "PRODUCT DESIGN, UX DESIGN DATA, VISUALIZATION",
  },
  {
    title: "Reduct",
    link: "/reduct",
<<<<<<< HEAD
    description:
      "Reduct.Video is a video editing & transcription startup in San Francisco. With Reduct, editing video is as easy as writing a text document. Highlight, cut, and edit text to watch as your video automatically does the same to the video.",
=======
    description: "What could the future of research transcription look like? | Getting to the project page more efficiently",
>>>>>>> main
    image:
      "/assets/design/cisco/cisc5-85ceefc9d45f0e54aa610edb5bf476cef73edbc291c9b64fae2405da3f1d4820.png",
    skills: "VISUAL DESIGN, INTERACTION DESIGN, PRODUCT DESIGN",
  },
  {
    title: "Thesis",
    link: "/thesis",
<<<<<<< HEAD
    description:
      "Interfaces For Learning was a year long research project investigating the ways we learn online. There is an abundance of online resources for learning these days, but they often blur between education and entertainment. In this year-long study, I surveyed existing literature on personal knowledge bases, information storage techniques, and learning theory; interviewed potential users and experts on the subject; created numerous prototypes, both physical and digital; and collaborated directly with Alcamy.org, an online learning platform founded in 2016, to improve their system based on my research insights and experiments.",
=======
    description: "Contemporary interface patterns for learning anything online",
>>>>>>> main
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
<<<<<<< HEAD
    description:
      "Week-long project to make an infographic describing what interaction design is to non-interaction designers. Made during my Sophomore year of college.",
=======
    description: "“What’s interaction design?” “Well, it’s kind of like going on a roadtrip…”",
>>>>>>> main
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
