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
    dates: "",
  },
  {
    title: "12312412412",
    link: "/",
    description:
      "Voluptate excepteur reprehenderit commodo. Minim dolor officia adipisicing minim cillum. Commodo Lorem et quis ipsum. Sit consequat aute duis Lorem commodo nisi elit sint irure. Nisi aliquip commodo elit dolore nostrud esse quis sit ea ea voluptate quis ipsum. Proident eiusmod nostrud fugiat est eiusmod. Ex dolor mollit consequat ut consectetur irure id minim ut sint cillum laborum veniam cupidatat. Excepteur laborum elit deserunt deserunt ullamco aute duis aute dolore.",
    images: [],
    dates: "",
  },
  {
    title: "2342423",
    link: "/",
    description:
      "Voluptate excepteur reprehenderit commodo. Minim dolor officia adipisicing minim cillum. Commodo Lorem et quis ipsum. Sit consequat aute duis Lorem commodo nisi elit sint irure. Nisi aliquip commodo elit dolore nostrud esse quis sit ea ea voluptate quis ipsum. Proident eiusmod nostrud fugiat est eiusmod. Ex dolor mollit consequat ut consectetur irure id minim ut sint cillum laborum veniam cupidatat. Excepteur laborum elit deserunt deserunt ullamco aute duis aute dolore.",
    images: [],
    dates: "",
  },
];

export default function Home() {
  return (
    <main className="p-20">
      <Nav />{" "}
      <div className="py-20 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="">
          <ul>
            {ceramicsData.map((item, i) => (
              <Link href={`/ceramics/#${item.title}`}>
                <div
                  key={item.i}
                  className="text-[#333341] text-opacity-50 hover:text-[#333341]"
                >
                  {item.title}
                  <span className=""> --- {item.date} </span>
                </div>
              </Link>
            ))}
          </ul>
        </div>
        <div className="">
          {ceramicsData.map((item, i) => (
            <div id={item.title} key={item.i} className="py-10">
              {" "}
              <div id={item.title}>{item.title}s</div>
              <div className="rounded">
                {/* <Image
                  src={`${item.image}`}
                  alt={item.title}
                  width={500}
                  height={500}
                /> */}
                image
              </div>
              <div className="text-base">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
