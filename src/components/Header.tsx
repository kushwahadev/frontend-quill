import React from "react";
import Navbar from "./Navbar";
import { Container } from "postcss";
import Details from "./Details";

function Header() {
  return (
    //  blue box Container
    <div className="w-full h-auto bg-indigo-700">
      {/* nav bar */}
      <Navbar />
      {/* draw horizontal line  */}
      <hr className="mt-0 mx-10 dark:bg-slate-800 relative" />

      {/* blue box content  */}
      <Details />
      <div className="flex gap-2 ml-80 mt-4 mb-4">
        <h2 className="text-xs text-slate-400">QuillAudits &rarr;</h2>
        <h2 className="text-xs text-slate-400">Resources &rarr;</h2>
        <h2 className="text-xs text-white">Case Studies</h2>
      </div>
    </div>
  );
}

export default Header;
