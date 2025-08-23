//import React from "react";

const SATCourse = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">SAT Exam Preparation Course</h1>
      <p>
        Master the SAT with our structured curriculum designed to boost your scores in reading, writing, and math.
      </p>

      <table className="table-auto w-full mt-4 border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Section</th>
            <th className="border p-2">Topics Covered</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Evidence-Based Reading</td>
            <td className="border p-2">Reading Comprehension, Vocabulary</td>
          </tr>
          <tr>
            <td className="border p-2">Writing and Language</td>
            <td className="border p-2">Grammar, Sentence Structure, Punctuation</td>
          </tr>
          <tr>
            <td className="border p-2">Math (No Calculator & Calculator)</td>
            <td className="border p-2">Algebra, Data Analysis, Problem Solving, Geometry</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-xl font-semibold mt-6">Course Details</h2>
      <ul className="list-disc ml-6 mt-2">
        <li>Duration: 6 Months</li>
        <li>Fee: ₹40,000 + GST</li>
        <li>Includes 10+ full-length mock tests and performance analytics</li>
      </ul>
    </div>
  );
};

export default SATCourse;
