import Image from "next/image";
import Nav from "../components/nav";

const designsData = [
  {
    title: "Ford",
    link: "/",
    description:
      "Voluptate excepteur reprehenderit commodo. Minim dolor officia adipisicing minim cillum. Commodo Lorem et quis ipsum. Sit consequat aute duis Lorem commodo nisi elit sint irure. Nisi aliquip commodo elit dolore nostrud esse quis sit ea ea voluptate quis ipsum. Proident eiusmod nostrud fugiat est eiusmod. Ex dolor mollit consequat ut consectetur irure id minim ut sint cillum laborum veniam cupidatat. Excepteur laborum elit deserunt deserunt ullamco aute duis aute dolore.",
    image:
      "/assets/design/cisco/cisc5-85ceefc9d45f0e54aa610edb5bf476cef73edbc291c9b64fae2405da3f1d4820.png",
    skills: "",
  },
  {
    title: "Cisco",
    link: "/",
    description: "d",
    image:
      "/assets/design/cisco/cisc5-85ceefc9d45f0e54aa610edb5bf476cef73edbc291c9b64fae2405da3f1d4820.png",
    skills: "",
  },
  {
    title: "Blend",
    link: "/",
    description: "d",
    image:
      "/assets/design/cisco/cisc5-85ceefc9d45f0e54aa610edb5bf476cef73edbc291c9b64fae2405da3f1d4820.png",
    skills: "",
  },
  {
    title: "Reduct",
    link: "/",
    description: "d",
    image:
      "/assets/design/cisco/cisc5-85ceefc9d45f0e54aa610edb5bf476cef73edbc291c9b64fae2405da3f1d4820.png",
    skills: "",
  },
  {
    title: "Thesis",
    link: "/",
    description: "d",
    image:
      "/assets/design/cisco/cisc5-85ceefc9d45f0e54aa610edb5bf476cef73edbc291c9b64fae2405da3f1d4820.png",
    skills: "",
  },
  {
    title: "Fuse Project",
    link: "/",
    description: "d",
    image:
      "/public/assets/design/cisco/cisc5-85ceefc9d45f0e54aa610edb5bf476cef73edbc291c9b64fae2405da3f1d4820.png",
    skills: "",
  },
  {
    title: "Infographic",
    link: "/",
    description: "d",
    image:
      "/public/assets/design/cisco/cisc5-85ceefc9d45f0e54aa610edb5bf476cef73edbc291c9b64fae2405da3f1d4820.png",
    skills: "",
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
                {item.title}
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
