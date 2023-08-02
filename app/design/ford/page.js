import Image from "next/image";
import Link from "next/link";

const pageData = [
  {
    alt: "Ford",
    image:
      "/assets/design/cisco/cisc5-85ceefc9d45f0e54aa610edb5bf476cef73edbc291c9b64fae2405da3f1d4820.png",
  },
  {
    alt: "Ford",
    image:
      "/assets/design/cisco/cisc5-85ceefc9d45f0e54aa610edb5bf476cef73edbc291c9b64fae2405da3f1d4820.png",
  },

  {
    alt: "Ford",
    image:
      "/assets/design/cisco/cisc5-85ceefc9d45f0e54aa610edb5bf476cef73edbc291c9b64fae2405da3f1d4820.png",
  },

  {
    alt: "Ford",
    image:
      "/assets/design/cisco/cisc5-85ceefc9d45f0e54aa610edb5bf476cef73edbc291c9b64fae2405da3f1d4820.png",
  },
];

export default function Home() {
  return (
    <main className="p-20">
      <div>
        <div>andy</div>
        <div>
          <Link href="/design">← Ford</Link>
        </div>
      </div>{" "}
      <div className="py-20 grid grid-cols-1 sm:grid-cols-2 gap-4">
        Add overflow Auto
        <div className="">
          Elit mollit voluptate qui aute. Nisi nulla proident ad fugiat. Magna
          eu aliquip anim magna laboris dolore reprehenderit sunt ex ad sit
          proident. Laborum cillum ea esse dolore elit amet irure Lorem officia
          reprehenderit cillum quis est duis mollit. Labore pariatur cillum ex
          aliqua fugiat cupidatat consequat excepteur exercitation dolor esse
          nostrud eu.
        </div>
        <div className="">
          {pageData.map((item, i) => (
            <div key={item.i} className="pb-5">
              {" "}
              <div className="rounded">
                <Image
                  src={`${item.image}`}
                  alt={item.alt}
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
