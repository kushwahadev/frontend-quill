"use client";
import React from "react";
import { ButtonsCard } from "@/components/ui/tailwindcss-buttons";
import { cn } from "@/utils/cn";
import Image from "next/image";
import List from "./List";
import Link from "next/link";
import Footer from "./Footer";

function Content() {
  return (
    <div className=" w-full h-auto text-zinc-950">
      {/* difference content  */}
      <div className="flex gap-4 mt-4 justify-center mb-4">
        <div className="w-80 p-4 border-r-gray-300 border-r-2">
          <h2 className="m-2 p-2 bg-rose-400 font-bold">Before QuillAudits</h2>
          <p className="p-4 text-xs">
            Exploits like reentrancy and front-running can let attackers
            withdraw extra funds and manipulate transaction timing for unfair
            gains
          </p>
          <p className="p-4 text-xs">
            Vulnerabilities could allow users to mint CDP tokens or pension
            shares indefinitely, disrupting the system &apos;s economic balance
          </p>
        </div>
        <div className="w-80 p-4">
          <h2 className="m-2 p-2 bg-blue-400 font-bold">After Quill Audits</h2>
          <p className="p-4 text-xs">
            Implementation of reentrancy protection mechanisms.
          </p>
          <p className="p-4 text-xs">
            Ensure precision in decimal handling with standard libraries,
            recalculate accurately, fix logic errors, and secure referral
            systems against exploitation.
          </p>
        </div>
      </div>
      {/* content headline  */}
      <div className=" mt-8 flex justify-center whitespace-pre-wrap ">
        <h1 className="w-1/2 whitespace-pre-wrap text-3xl font-semibold text-blue-600">
          See how QuillAudits is a trusted partner in 1000+ Audit stories
        </h1>
      </div>

      {/* use button  */}
      <div className=" flex justify-center">
        <ButtonsCard className="h-10  w-auto mt-10 p-2 mb-2 inset-0 bg-gradient-to-r from-blue-500 to-teal-300 rounded-lg">
          <button className="p-4 mr-10 text-white font-medium">
            Request An Audit
          </button>
        </ButtonsCard>
      </div>

      {/* paragraphs div started */}

      <div className="grid grid-col-3 justify-items-center mt-8">
        <p className=" w-2/5 text-sm -ml-10">
          Carpe Diem Pension, on Pulse blockchain, redefines retirement with a
          self-managed, inclusive, globally portable fund. Unique for its token
          burn mechanism, it ensures a sustainable 4.32% inflation payout. With
          $143.11k and 41.06% of CDP already burned, it serves 35 users globally
        </p>

        <Image
          src={`/bluebox/div.content.jpg`}
          alt="logo"
          width={300}
          height={450}
          className=" col-end-3 mr-24 relative mt-10
          "
        />
        <h1 className="mt-2 font-bold text-xl -ml-10 w-96">
          CarpeDiem Pension&apos;s Flexible, Blockchain-Enabled Future
        </h1>
      </div>
      <div className="grid justify-items-center mt-8 -ml-48">
        <p className="w-2/5 text-sm ">
          CarpeDiem Pension redefines retirement planning with a unique approach
          that deviates from traditional pension funds. With no minimum age for
          retirement, it offers flexibility and freedom, ensuring all genders
          receive equal treatment. CarpeDiem Pension ensures blockchain
          transparency, anonymity, and global accessibility, safeguarding
          pensions during international relocation. Easily transfer pensions to
          loved ones; share wallet access. Re-deposit payouts for increased
          future benefits. Importantly, CarpeDiem Pension prioritizes deposit
          security by avoiding utilizing client funds for internal investments.
          To become a part of this forward-thinking pension scheme, one simply
          needs to install and configure a blockchain wallet
        </p>
        <Image
          src={`/bluebox/image17.jpg`}
          alt="logo"
          width={670}
          height={500}
          className="mt-8"
        />
        <h1 className="mt-8 font-bold text-xl w-2/5">
          CarpeDiem Pension&apos;s Challenges: Enhancing Security Against
          Reentrancy, Front-Running, and Infinite Minting
        </h1>
        <p className="w-2/5 text-sm mt-10">
          CarpeDiem Pension confronts critical security challenges, including
          the risks of reentrancy and front-running exploits.Malicious actors
          may exploit contract vulnerabilities, withdrawing excess funds or
          manipulating transaction timing for unfair advantages. System faces
          infinite minting threats, risking economic stability with endless
          creation of CDP tokens or pension shares.  Addressing these challenges
          is paramount to safeguarding the integrity and security of CarpeDiem
          Pension.
        </p>
        <Image
          src={`/bluebox/image18.png`}
          alt="logo"
          width={600}
          height={400}
          className="mt-8 -ml-10"
        />
        <h1 className="mt-8 -ml-24 font-bold text-xl w-1/3">
          CarpeDiem Pension&apos;s Journey Through our Audit Process
        </h1>
      </div>
      <List />
      <div className="grid justify-items-center mt-8 -ml-48 relative">
        <h1 className=" mt-8 font-bold text-xl w-2/5">
          QuillAudits&apos; Strategic Approach to CDP Security Audits
        </h1>
        <p className="w-2/5  text-sm mt-8">
          We prioritize threat modeling based on platform-specific risks.
          Security-first, we identify and mitigate vulnerabilities beyond
          functionality testing. Using white-box and black-box tests, we conduct
          thorough vulnerability assessments. Maintaining transparency, we
          communicate openly with the CDP team. Emphasizing clarity, we present
          actionable insights for efficient issue resolution.
        </p>
        <h1 className=" mt-8 font-bold text-xl w-2/5">
          Comprehensive Audit Discoveries and Remediation Strategies
        </h1>
        <p className="w-2/5 text-sm mt-8">
          Throughout the audit process, we unearthed a total of 33 issues,
          spanning from minor concerns to critical vulnerabilities. Among these,
          some of the critical issues identified were: Here&apos;s how we
          remediated them :
        </p>

        <h1 className=" mt-8 font-bold text-lg w-2/5">
          1. Unauthorized Claim/Compound:
        </h1>
        <p className="w-2/5 ml-8 text-sm mt-8">
          <span className="font-curse">a. </span> Users could claim/compound a
          substantial amount without making a deposit or waiting for the
          stipulated time.
        </p>
        <h1 className=" mt-8 font-bold text-lg w-2/5">
          2. Precision Loss in mintCDP():
        </h1>
        <p className="w-2/5 ml-8 text-sm mt-8">
          <span className="font-curse">a. </span> Precision loss and unscaled
          values were identified while calculating rewardPerShare in the
          mintCDP() function.
        </p>
        <h1 className=" mt-8 font-bold text-lg w-2/5">
          3. Multiplication Accuracy:
        </h1>
        <p className="w-2/5 ml-8 text-sm mt-8">
          <span className="font-curse">a. </span> Multiplication operations were
          prone to providing incorrect answers due to unscaled values, posing a
          potential risk to accurate calculations.
        </p>
        <h1 className=" mt-8 font-bold text-lg w-2/5">
          4. Incorrect Share Allocation:
        </h1>
        <p className="w-2/5 ml-8 text-sm mt-8">
          <span className="font-curse">a. </span> The protocol was allocating
          shares for all days, even when there were no corresponding deposits,
          leading to inefficient use of resources.
        </p>
        <h1 className=" mt-8 font-bold text-lg w-2/5">
          5. Logic Error in Referral Handling :
        </h1>
        <p className="w-2/5 ml-8 text-sm mt-8">
          <span className="font-curse">a. </span> A logic error resulted in
          users always having their user.referral set to address(0), which could
          be exploited to trick the referral system
        </p>
        <h1 className=" mt-8 font-bold text-lg w-2/5">
          6. Referral Explanation:
        </h1>
        <p className="w-2/5 ml-8 text-sm mt-8">
          <span className="font-curse">a. </span> Users could exploit the
          referral system to extract more CDP from the protocol, undermining its
          integrity.
        </p>

        <h1 className=" mt-8 font-bold text-xl w-2/5">Remediation & Impact</h1>
        <p className="w-2/5 text-sm mt-8">
          All identified vulnerabilities were addressed by the CDP team,
          significantly enhancing the smart contract&apos;s security posture.
          Key improvements include
        </p>

        <ol className=" grid gap-4 list-disc w-2/5 mt-8 text-sm ml-20">
          <li>Implementation of reentrancy protection mechanisms.</li>
          <li>
            Accurate handling of decimal values using established libraries or
            best practices.
          </li>
          <li>Revised calculations with proper scaling factors</li>
          <li>
            Fixing logic errors to ensure deposits and waiting periods are
            enforced.
          </li>
          <li>Addressing referral system vulnerabilities to prevent abuse.</li>
        </ol>
        <h1 className=" w-2/5 mt-8">
          Embeded this tweet:-
          <Link
            href={`https://x.com/CarpeDiemCDP/status/1742906560794296402?s=20`}
            className="text-blue-500"
          >
            {" "}
            https://x.com/CarpeDiemCDP/status/1742906560794296402?s=20{" "}
          </Link>
        </h1>

        <p className="mt-10 w-2/5 text-xs">
          CDP smart contract audit revealed and fixed critical vulnerabilities,
          safeguarding funds and ensuring platform stability. This underscores
          the need for proactive security in blockchain projects, crucial for
          financial asset management. Through audits and issue resolution, CDP
          reinforces platform security, bolstering user trust.
        </p>
        <Image
          src={`/bluebox/tweet.jpg`}
          alt="tweet"
          width={600}
          height={500}
          className="mt-16 -ml-12"
        />
        <Image
          src={`/bluebox/nws.jpg`}
          alt="tweet"
          width={1500}
          height={200}
          className="mt-16 "
        />
      </div>
      <Footer />
    </div>
  );
}

export default Content;
