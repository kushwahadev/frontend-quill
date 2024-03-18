import React from "react";
import Image from "next/image";
import quillData from "@/data/picsdata.json";

function Details() {
  return (
    <div className="mt-16 relative flex justify-center">
      <div className=" h-96 w-96">
        <Image
          src={quillData.quill[0].image}
          alt="logo"
          width={500}
          height={600}
        />
        <Image
          src={quillData.quill[1].image}
          alt="logo"
          width={100}
          height={100}
          className=" -mt-80 ml-80"
        />
      </div>
      <div className="mt-8">
        <h1 className="mt-10 p-4 w-72 text-2xl ">
          Securing Trust : Boosting Security and Strengthening Trust at Carpe
          Diem Pension
        </h1>
        <p className="p-4 mt-4 w-96 text-sm">
          QuillAudits enhances Carpe Diem Pension by addressing 33
          vulnerabilities on the Pulse blockchain, boosting security and user
          trust in digital pensions.
        </p>
      </div>
    </div>
  );
}

export default Details;
