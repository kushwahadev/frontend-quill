import Image from "next/image";
import Header from "@/components/Header";
import Content from "@/components/Content";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-white ">
      <Header />
      <Content />
    </main>
  );
}
