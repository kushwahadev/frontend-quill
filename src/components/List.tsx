import React from "react";

function List() {
  return (
    <div className=" mt-10 ml-72  w-1/3">
      {/* // point 1 */}
      <h1 className="text-lg  font-bold">1. Information Gathering</h1>
      <ul className="list-disc ">
        <li className="text-sm m-4">
          Collected and reviewed all relevant documentation, including
          whitepaper, technical specifications, and design documents.
        </li>
        <li className="text-sm m-4">
          Obtained a clear understanding of the CDP platform&apos;s
          functionality, economic model, and intended user interactions.
        </li>
        <li className="text-sm m-4">
          Discussed client concerns and specific areas of focus for the audit.
        </li>
      </ul>
      {/* // point 2 */}
      <h1 className="text-lg  font-bold">2. Manual Code Review</h1>
      <ul className="list-disc ">
        <li className="text-sm m-4">
          Conducted a line-by-line review of the smart contract code, focusing
          on:
        </li>
        <li className="text-sm m-4">
          Vulnerability identification: Searching for known vulnerabilities like
          reentrancy, front-running, integer overflows, and access control
          issues etc.
        </li>
        <li className="text-sm m-4">
          Logic flaws: Identifying inconsistencies or unintended behaviors in
          the code logic.
        </li>
        <li className="text-sm m-4">
          Tokenomics correctness: Verifying if the code accurately implements
          the intended economic model and token distribution mechanisms.
        </li>
        <li className="text-sm m-4">
          Solidity best practices: Compliance with secure coding standards and
          adherence to established guidelines.
        </li>
      </ul>
      {/* // point 3 */}
      <h1 className="text-lg  font-bold">3. Functional Testing </h1>
      <ul className="list-disc ">
        <li className="text-sm m-4">
          Developed and executed a comprehensive set of test cases covering
          various user interactions and edge cases.
        </li>
        <li className="text-sm m-4">
          Simulated different deposit, claim, and referral scenarios to assess
          functionality and uncover potential exploits.
        </li>
        <li className="text-sm m-4">
          Focused on scenarios identified during the manual review and client
          concerns (e.g., infinite minting, reward calculation errors).
        </li>
        <li className="text-sm m-4">
          Leveraged tools like Hardhat and Ganache to deploy and test the smart
          contract locally.
        </li>
      </ul>
      {/* // point 4 */}
      <h1 className="text-lg  font-bold">4. Automated Testing </h1>
      <ul className="list-disc ">
        <li className="text-sm m-4">
          Employed static analysis tools like Slither to identify
          vulnerabilities through automated code scanning.
        </li>
        <li className="text-sm m-4">
          Utilized symbolic execution tools like Mythril to explore various code
          execution paths and uncover potential attack vectors.
        </li>
        <li className="text-sm m-4">
          Integrated unit tests are written by the CDP team to verify specific
          contract functions and their behaviour.
        </li>
      </ul>

      {/* // poitn 5 */}

      <h1 className="text-lg  font-bold">5. Reporting & Remediation </h1>
      <ul className="list-disc ">
        <li className="text-sm m-4">
          Prepared a detailed report outlining all identified vulnerabilities,
          categorized by severity and potential impact.
        </li>
        <li className="text-sm m-4">
          Provided clear recommendations for fixing each vulnerability,
          including code snippets and best practices.
        </li>
        <li className="text-sm m-4">
          Collaborated with the CDP team to prioritize and address the
          identified issues
        </li>
        <li className="text-sm m-4">
          Conducted additional verification testing after vulnerability fixes
          were implemented.
        </li>
      </ul>
    </div>
  );
}

export default List;
