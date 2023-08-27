import "../../app/globals.css";
import { Inter } from "next/font/google";

export default function Layout({ children }) {
  return (
    <div className="flex flex-wrap">
      <div className="w-100">{children}</div>
    </div>
  );
}
