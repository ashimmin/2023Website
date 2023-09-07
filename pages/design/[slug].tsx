import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Nav from "../../app/components/nav";
import Layout from "../../app/components/layout";

// Define your component
export default function BlogPost({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <main className="p-20">
        <Nav />{" "}
        <div className="h-screen flex overflow-hidden">
          {/* Column 1: Full height */}
          <div className="flex flex-col w-1/4">
            <div className="flex h-full">
              <div className="flex flex-wrap">
                <Link href="/design">
                  <div className="pt-20">{post.title}</div>
                </Link>
                <div className="text-[#333341] text-opacity-50 ">
                  {post.description}
                </div>
                <div className="p-0 m-0">
                  {post.skills.map((item, i) => (
                    <div key={item.i} className="">
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Scrollable */}
          <div className="p-20 flex flex-col w-3/4 overflow-y-auto">
            {post.images.map((item, i) => (
              <div
                key={item.i}
                className="flex items-center justify-center h-screen pb-20"
              >
                <div className="">
                  <div className="">
                    <Image
                      src={`${item.source}`}
                      alt={item.alt}
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="inline-block">{item.alt}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}

// Implement getStaticPaths
export const getStaticPaths: GetStaticPaths = async () => {
  const filePath = path.join(
    process.cwd(),
    "public",
    "data",
    "designsData.json"
  );
  const posts = JSON.parse(fs.readFileSync(filePath, "utf8"));

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: true };
};

// Implement getStaticProps
export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params;
  const filePath = path.join(
    process.cwd(),
    "public",
    "data",
    "designsData.json"
  );
  const posts = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const post = posts.find((p) => p.slug === slug);

  return { props: { post } };
};
