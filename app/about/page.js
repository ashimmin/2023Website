import Image from "next/image";
import Nav from "../components/nav";

const timelineData = [
  { company: "", jobTitle: "I was born", date: "Some time in the 90's" },
  {
    company: "fuseproject",
    jobTitle: "Desiner",
    date: "2017",
  },
  {
    company: "California College of the Arts",
    jobTitle: "BFA Interaction Design Minor in Visual & Critical Studies",
    date: "2018",
  },
  { company: "Blend", jobTitle: "Product Design Intern", date: "2018" },
  { company: "Cisco Systems", jobTitle: "Visual Designer", date: "2019" },

  { company: "Reduct. Video", jobTitle: "Product Desianer", date: "2019" },
  {
    company: "Ford Motor Company",
    jobTitle: "Digital Product Desianer",
    date: "2021",
  },
];

export default function Home() {
  return (
    <main className="p-20 bg-[#e35d61] text-white">
      <Nav />{" "}
      <div className="py-20 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="">
          <Image src="/assets/about.png" alt="" width={500} height={500} />
        </div>
        <div className="">
          <div className="">
            I feel most creative when using design as the foundation to build,
            explore, and experiment with other unrelated domains. I am
            influenced by aspects of play, craftsmanship, and inspiring wonder
            when creating, and actively try to embody those traits in myself.
          </div>
          <div className="">Work History!</div>
          <div className="">
            {timelineData.map((item, i) => (
              <div key={item.i} className="pt-9">
                <div className="opacity-30"> {item.date}</div>

                <div className=""> {item.company}</div>
                <div className="font-bold"> {item.jobTitle}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
