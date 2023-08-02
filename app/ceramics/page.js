import Image from "next/image";
import Nav from "../components/nav";
import Link from "next/link";

const ceramicsData = [
  {
    title: "123123",
    link: "/",
    description:
      "Voluptate excepteur reprehenderit commodo. Minim dolor officia adipisicing minim cillum. Commodo Lorem et quis ipsum. Sit consequat aute duis Lorem commodo nisi elit sint irure. Nisi aliquip commodo elit dolore nostrud esse quis sit ea ea voluptate quis ipsum. Proident eiusmod nostrud fugiat est eiusmod. Ex dolor mollit consequat ut consectetur irure id minim ut sint cillum laborum veniam cupidatat. Excepteur laborum elit deserunt deserunt ullamco aute duis aute dolore.",
    images: [],
    dates: "2022",
  },
  {
    title: "12312412412",
    link: "/",
    description:
      "Voluptate excepteur reprehenderit commodo. Minim dolor officia adipisicing minim cillum. Commodo Lorem et quis ipsum. Sit consequat aute duis Lorem commodo nisi elit sint irure. Nisi aliquip commodo elit dolore nostrud esse quis sit ea ea voluptate quis ipsum. Proident eiusmod nostrud fugiat est eiusmod. Ex dolor mollit consequat ut consectetur irure id minim ut sint cillum laborum veniam cupidatat. Excepteur laborum elit deserunt deserunt ullamco aute duis aute dolore.",
    images: [],
    dates: "2023",
  },
  {
    title: "2342423",
    link: "/",
    description:
      "Voluptate excepteur reprehenderit commodo. Minim dolor officia adipisicing minim cillum. Commodo Lorem et quis ipsum. Sit consequat aute duis Lorem commodo nisi elit sint irure. Nisi aliquip commodo elit dolore nostrud esse quis sit ea ea voluptate quis ipsum. Proident eiusmod nostrud fugiat est eiusmod. Ex dolor mollit consequat ut consectetur irure id minim ut sint cillum laborum veniam cupidatat. Excepteur laborum elit deserunt deserunt ullamco aute duis aute dolore.",
    images: [],
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
            <div key={item.i} className="py-20 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {" "}
              <div className="col-span-1">
              <ul>
             {/* FIX @gndclouds look at focus+group */}
            {ceramicsData.map((item, i) => (
              <Link href={`/ceramics/#${item.title}`}>
                <div key={item.i} className="group relative transition">
                <p className="transition duration-500 opacity-30 group-hover:opacity-100 group-hover:text-[#333341]">{item.title}</p>
                <div className="transition ease-in opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center">
                 <p className="group-hover:text-[#333341]">— {item.dates}</p>
               </div>
           </div>
              </Link>
            ))}
          </ul>
              </div>
              <div id={item.title} className="col-span-1">
              
              {/* <div id={item.title}>{item.title}s</div> */}
              <div className="text-base">{item.description}</div>
              </div>
              <div className="rounded">
                {/* <Image
                  src={`${item.image}`}
                  alt={item.title}
                  width={500}
                  height={500}
                /> */}
                image
              </div>

            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
