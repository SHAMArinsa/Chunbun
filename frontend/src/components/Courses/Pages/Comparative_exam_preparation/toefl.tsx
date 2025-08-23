//import React from "react";

const TOEFL = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">TOEFL Preparation Course</h1>
      <p>
        Focused preparation for all four sections of the TOEFL test, designed for high scores and confidence.
      </p>

      <table className="table-auto w-full mt-4 border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Section</th>
            <th className="border p-2">Skills Developed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Reading</td>
            <td className="border p-2">Comprehension, vocabulary in context</td>
          </tr>
          <tr>
            <td className="border p-2">Listening</td>
            <td className="border p-2">Note-taking, inference, understanding tone</td>
          </tr>
          <tr>
            <td className="border p-2">Speaking</td>
            <td className="border p-2">Task structure, fluency, coherence</td>
          </tr>
          <tr>
            <td className="border p-2">Writing</td>
            <td className="border p-2">Integrated & independent tasks, essay structure</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-xl font-semibold mt-6">Course Details</h2>
      <ul className="list-disc ml-6 mt-2">
        <li>Duration: 3 Months</li>
        <li>Fee: ₹24,000 + GST</li>
        <li>Includes weekly live speaking and writing practice</li>
      </ul>
    </div>
  );
};

export default TOEFL;
