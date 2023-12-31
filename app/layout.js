import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <div className="p-10 sm:p-20 p">
        <Link href="/">
          <div className="uppercase text-[#909199]">Andy Shimmin</div>
        </Link>
      </div> */}

      <div className="flex flex-wrap">
        <body className="w-100">{children}</body>{" "}
      </div>
    </html>
  );
}
