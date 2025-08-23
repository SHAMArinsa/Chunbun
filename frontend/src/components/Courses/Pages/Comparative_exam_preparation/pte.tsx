//import React from "react";

const PTE = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">PTE Academic Preparation Course</h1>
      <p>
        This course helps candidates master the Pearson Test of English (PTE) with guided instruction, mock tests, and performance analysis.
      </p>

      <table className="table-auto w-full mt-4 border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Module</th>
            <th className="border p-2">Topics Covered</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Speaking & Writing</td>
            <td className="border p-2">Describe Image, Essay Writing, Read Aloud</td>
          </tr>
          <tr>
            <td className="border p-2">Reading</td>
            <td className="border p-2">Reorder Paragraphs, Fill in the Blanks</td>
          </tr>
          <tr>
            <td className="border p-2">Listening</td>
            <td className="border p-2">Summarize Spoken Text, Multiple Choice</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-xl font-semibold mt-6">Course Details</h2>
      <ul className="list-disc ml-6 mt-2">
        <li>Duration: 2.5 Months</li>
        <li>Fee: ₹20,000 + GST</li>
        <li>Includes 8 full mock tests and automated scoring analytics</li>
      </ul>
    </div>
  );
};

export default PTE;
