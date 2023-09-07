import Image from "next/image";
import Nav from "../components/nav";
import Link from "next/link";

const ceramicsData = [
  {
    title: "Waterfall Series",
    link: "/",
    description:
      "Voluptate excepteur reprehenderit commodo. Minim dolor officia adipisicing minim cillum. Commodo Lorem et quis ipsum. Sit consequat aute duis Lorem commodo nisi elit sint irure. Nisi aliquip commodo elit dolore nostrud esse quis sit ea ea voluptate quis ipsum. Proident eiusmod nostrud fugiat est eiusmod. Ex dolor mollit consequat ut consectetur irure id minim ut sint cillum laborum veniam cupidatat. Excepteur laborum elit deserunt deserunt ullamco aute duis aute dolore.",
    images: [
      {
        source:
          "/assets/design/blend/beforeafter-ac4cf88d6f18658613278f8387ddd3f15483b6f63622126ec48547e697c68901.png",
        alt: "Example Alt Text",
      },
      {
        source:
          "/assets/design/cisco/disclosures-a3ebe0ab7ba59f4056b1b5ff19e3b607fd5856c7912eb22e33a3f7462ece7c2a.png",
        alt: "Example Alt Text",
      },
      {
        source:
          "/assets/design/cisco/disclosurespaper-08121542382032718c23886236600d646a529cdb5efaafe833d1b7f5b22293d3.jpg",
        alt: "Example Alt Text",
      },
    ],
    dates: "2022",
  },
  {
    title: "Until I Can't See The Surface",
    link: "/",
    description:
      "Voluptate excepteur reprehenderit commodo. Minim dolor officia adipisicing minim cillum. Commodo Lorem et quis ipsum. Sit consequat aute duis Lorem commodo nisi elit sint irure. Nisi aliquip commodo elit dolore nostrud esse quis sit ea ea voluptate quis ipsum. Proident eiusmod nostrud fugiat est eiusmod. Ex dolor mollit consequat ut consectetur irure id minim ut sint cillum laborum veniam cupidatat. Excepteur laborum elit deserunt deserunt ullamco aute duis aute dolore.",
    images: [
      {
        source:
          "/assets/design/blend/beforeafter-ac4cf88d6f18658613278f8387ddd3f15483b6f63622126ec48547e697c68901.png",
        alt: "Example Alt Text",
      },
      {
        source:
          "/assets/design/cisco/disclosures-a3ebe0ab7ba59f4056b1b5ff19e3b607fd5856c7912eb22e33a3f7462ece7c2a.png",
        alt: "Example Alt Text",
      },
      {
        source:
          "/assets/design/cisco/disclosurespaper-08121542382032718c23886236600d646a529cdb5efaafe833d1b7f5b22293d3.jpg",
        alt: "Example Alt Text",
      },
    ],
    dates: "2023",
  },
  {
    title: "Tiled Coffee Table with Speakers",
    link: "/",
    description:
      "Voluptate excepteur reprehenderit commodo. Minim dolor officia adipisicing minim cillum. Commodo Lorem et quis ipsum. Sit consequat aute duis Lorem commodo nisi elit sint irure. Nisi aliquip commodo elit dolore nostrud esse quis sit ea ea voluptate quis ipsum. Proident eiusmod nostrud fugiat est eiusmod. Ex dolor mollit consequat ut consectetur irure id minim ut sint cillum laborum veniam cupidatat. Excepteur laborum elit deserunt deserunt ullamco aute duis aute dolore.",
    images: [],
    dates: "2000",
  },
  {
    title: "Gloop Playground",
    link: "/",
    description:
      "Voluptate excepteur reprehenderit commodo. Minim dolor officia adipisicing minim cillum. Commodo Lorem et quis ipsum. Sit consequat aute duis Lorem commodo nisi elit sint irure. Nisi aliquip commodo elit dolore nostrud esse quis sit ea ea voluptate quis ipsum. Proident eiusmod nostrud fugiat est eiusmod. Ex dolor mollit consequat ut consectetur irure id minim ut sint cillum laborum veniam cupidatat. Excepteur laborum elit deserunt deserunt ullamco aute duis aute dolore.",
    images: [],
    dates: "2000",
  },
  {
    title: "Miscellaneous",
    link: "/",
    description:
      "Voluptate excepteur reprehenderit commodo. Minim dolor officia adipisicing minim cillum. Commodo Lorem et quis ipsum. Sit consequat aute duis Lorem commodo nisi elit sint irure. Nisi aliquip commodo elit dolore nostrud esse quis sit ea ea voluptate quis ipsum. Proident eiusmod nostrud fugiat est eiusmod. Ex dolor mollit consequat ut consectetur irure id minim ut sint cillum laborum veniam cupidatat. Excepteur laborum elit deserunt deserunt ullamco aute duis aute dolore.",
    images: [
      {
        source:
          "/assets/design/blend/beforeafter-ac4cf88d6f18658613278f8387ddd3f15483b6f63622126ec48547e697c68901.png",
        alt: "Example Alt Text",
      },
      {
        source:
          "/assets/design/cisco/disclosures-a3ebe0ab7ba59f4056b1b5ff19e3b607fd5856c7912eb22e33a3f7462ece7c2a.png",
        alt: "Example Alt Text",
      },
      {
        source:
          "/assets/design/cisco/disclosurespaper-08121542382032718c23886236600d646a529cdb5efaafe833d1b7f5b22293d3.jpg",
        alt: "Example Alt Text",
      },
    ],
    dates: "2000",
  },
];

export default function Home() {
  return (
    <main className="p-20">
      <Nav />{" "}
      <div className="">
        <div className="">
          {ceramicsData.map((item, i) => (
            <div
              key={item.i}
              className="py-20 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {" "}
              <div className="col-span-1">
                {/* FIX @gndclouds look at focus+group */}
                {ceramicsData.map((item, i) => (
                  <Link href={`/ceramics/#${item.title}`}>
                    <div key={item.i} className="group relative transition">
                      <p className="transition duration-500 opacity-30 group-hover:opacity-100 group-hover:text-[#333341]">
                        {item.title}
                      </p>
                      <div className="transition ease-in opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center">
                        <p className="group-hover:text-[#333341]">
                          — {item.dates}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div id={item.title} className="col-span-1">
                {/* <div id={item.title}>{item.title}s</div> */}
                <div className="text-base">{item.description}</div>
              </div>
              {/*  <div className="rounded">
              //   {ceramicsData.images.map((item, i) => (
              //     <div
              //       key={item.i}
              //       className="flex items-center justify-center h-screen pb-20"
              //     >
              //       <div className="">
              //         <div className="">
              //           <Image
              //             src={`${item.source}`}
              //             alt={item.alt}
              //             width={500}
              //             height={500}
              //           />
              //         </div>
              //         <div className="inline-block">{item.alt}</div>
              //       </div>
              //     </div>
              //   ))}
              
            </div> */}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
