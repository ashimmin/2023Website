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
            Cupidatat veniam voluptate laboris Lorem commodo veniam mollit ad
            consectetur officia laborum et laborum. Adipisicing excepteur do
            esse incididunt. Elit ut sit aliqua. Duis eiusmod irure ipsum esse
            commodo duis voluptate non ad minim aliquip do Lorem. Amet tempor
            voluptate aute culpa ipsum voluptate sint duis fugiat nisi amet
            dolor nostrud ea. Velit sunt ipsum officia cupidatat consequat
            excepteur exercitation est aliqua. Duis minim magna in esse laborum
            velit nostrud fugiat. Duis cillum excepteur dolor mollit officia.
          </div>
          <div className="">Work History</div>
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
