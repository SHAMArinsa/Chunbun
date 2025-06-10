import React from "react";

const IELTS = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">IELTS Preparation Course</h1>
      <p>
        Prepare for the IELTS Academic or General Training exam with comprehensive practice and expert guidance.
      </p>

      <table className="table-auto w-full mt-4 border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Module</th>
            <th className="border p-2">Focus Areas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Listening</td>
            <td className="border p-2">Audio strategies, question types, practice sets</td>
          </tr>
          <tr>
            <td className="border p-2">Reading</td>
            <td className="border p-2">Skimming, scanning, time management</td>
          </tr>
          <tr>
            <td className="border p-2">Writing</td>
            <td className="border p-2">Task 1 & Task 2 practice, grammar tips</td>
          </tr>
          <tr>
            <td className="border p-2">Speaking</td>
            <td className="border p-2">Interview techniques, fluency drills</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-xl font-semibold mt-6">Course Details</h2>
      <ul className="list-disc ml-6 mt-2">
        <li>Duration: 3 Months</li>
        <li>Fee: ₹22,000 + GST</li>
        <li>Mock tests and speaking feedback included</li>
      </ul>
    </div>
  );
};

export default IELTS;
