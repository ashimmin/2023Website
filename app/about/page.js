import Image from "next/image";
import Nav from "../components/nav";

const timelineData = [
  { company: "Company", jobTitle: "Desiner", date: "/" },
  { company: "Company", jobTitle: "Desiner", date: "/" },
  { company: "Company", jobTitle: "Desiner", date: "/" },
  { company: "Company", jobTitle: "Desiner", date: "/" },
];

export default function Home() {
  return (
    <main className="p-20">
      <Nav />{" "}
      <div className="py-20 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="">Image</div>
        <div className="">
          <div className="">
          I feel most creative when using design as the foundation to build, explore, and experiment with other unrelated domains. I am influenced by aspects of play, craftsmanship, and inspiring wonder when creating, and actively try to embody those traits in myself.
          </div>
          <div className="">Work History!</div>
          <div className="">
            <ul>
              {timelineData.map((item, i) => (
                <li key={item.i} className="">
                  <div> {item.date}</div>

                  <div> {item.company}</div>
                  <div> {item.jobTitle}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
