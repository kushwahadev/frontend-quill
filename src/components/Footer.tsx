import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="p-4 bg-blue-900 w-full h-auto text-white  ">
      <div className="p-4 cursor-pointer">
        <Image
          src={`/bluebox/QuillAuditsLogo.png`}
          alt="logo"
          width={300}
          height={300}
        />
        <h6 className="text-xs text-white ml-24">Making Web3 a Safer Place </h6>
      </div>
      <div className="grid sm:grid-cols-5 gap-4 mt-10 p-16 cursor-pointer">
        <div className="grid gap-4 text-xs">
          <h2 className=" underline underline-offset-8 decoration-sky-400 text-base font-semibold decoration-2">
            More About Quill
          </h2>
          <h6>About Us</h6>
          <h6>FAQs</h6>
          <h6>Blockchain We Audit</h6>
          <h6>Contact Us:</h6>
          <h6 className="flex gap-1 flex-auto">
            <Image
              src={`/bluebox/email.png`}
              alt="logo"
              width={40}
              height={10}
              className="-mt-2 -ml-2"
            />
            <span className="underline">audits@quillhash.com</span>{" "}
          </h6>
          <h6 className="flex gap-2">
            <Image
              src={`/bluebox/tele.png`}
              alt="logo"
              width={20}
              height={20}
              className="bg-transparent fill-white "
            />{" "}
            <span className="underline">t.me/quillaudits</span>
          </h6>
          <h6 className="flex gap-2">
            <Image
              src={`/bluebox/location.png`}
              alt="logo"
              width={20}
              height={20}
              className="bg-transparent "
            />
            <span>Our Location:</span>
          </h6>
          <p>
            Office 104/105 Level 1, Emaar Square, Building 4 Sheikh Mohammed Bin
            Rashid Boulevard Downtown Dubai, United Arab Emirates P.O box:
            416654
          </p>
        </div>
        <div className="">
          {" "}
          <h2 className=" underline underline-offset-8 decoration-sky-400 decoration-2">
            Audit Services
          </h2>
          <ol className="grid gap-3 font-medium text-xs mt-4 p-4">
            <li>Ethereum Audit</li>
            <li>Polygon Audit</li>
            <li>BSC Audit</li>
            <li>Solana Audit</li>
            <li>NEAR Audit</li>
            <li>Algorand Audit</li>
            <li>Tezos Audit</li>
            <li>Hyperledger Fabric Audit</li>
            <li>L1 Audit</li>
            <li>Polkadot Audit</li>
            <li>Wallet Audit</li>
            <li>ZkSync Audit</li>
            <li>Starknet Audit</li>
          </ol>
        </div>
        <div>
          {" "}
          <h2 className=" underline underline-offset-8 decoration-sky-400 decoration-2">
            Quill Ecosystem
          </h2>
          <ul className="grid gap-3 font-medium text-xs mt-4 p-4">
            <li>QuillAI</li>
            <li>QuillCheck</li>
            <li>QuillShield</li>
            <li>QuillAcedmy</li>
            <li>QuillMonitor</li>
            <li>Web3Suggest</li>
            <li>Explore All Tools</li>
          </ul>
        </div>
        <div>
          {" "}
          <h2 className=" underline underline-offset-8 decoration-sky-400 decoration-2">
            Other Services
          </h2>
        </div>
        <div>
          {" "}
          <h2 className=" underline underline-offset-8 decoration-sky-400 decoration-2">
            Quill Links
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Footer;
