"use client";
import reactElementToJSXString from "react-element-to-jsx-string";
import { ButtonsCard } from "@/components/ui/tailwindcss-buttons";
import { cn } from "@/utils/cn";
import Seminav from "./Seminav";
import Image from "next/image";

function Navbar() {
  return (
    <div className="relative grid grid-cols-12 p-4">
      <div className="grid col-span-2 relative">
        <h2 className="text-2xl font-bold ml-4 pl-4 pt-2 relative">
          <Image
            src={`/bluebox/QuillAuditsLogo.png`}
            alt="logo"
            width={500}
            height={500}
          />
        </h2>
      </div>
      <div className="grid col-span-8 relative">
        <Seminav />
      </div>
      <div className="grid col-span-2 relative">
        <ButtonsCard className="h-10 w-auto p-4 inset-0 bg-gradient-to-r from-indigo-600 to-indigo-300 rounded-lg">
          <button className="p-4 mr-10 relative transition duration-1000 text-sm">
            Request An Audit
          </button>
        </ButtonsCard>
      </div>
    </div>
  );
}

export default Navbar;
