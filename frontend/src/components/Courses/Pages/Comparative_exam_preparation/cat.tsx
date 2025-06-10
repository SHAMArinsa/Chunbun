import React from "react";

const CATCourse = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">CAT Exam Preparation Course</h1>
      <p>
        A comprehensive course designed to prepare students for the Common Admission Test (CAT),
        covering all required quantitative, verbal, and reasoning sections.
      </p>

      <h2 className="text-xl font-semibold mt-6">Course Structure</h2>
      <table className="table-auto w-full mt-4 border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Subjects</th>
            <th className="border p-2">Topics</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Quantitative Aptitude</td>
            <td className="border p-2">Arithmetic, Algebra, Geometry, Modern Math</td>
          </tr>
          <tr>
            <td className="border p-2">Verbal Ability & Reading Comprehension</td>
            <td className="border p-2">Grammar, Vocabulary, RC, Para Jumbles</td>
          </tr>
          <tr>
            <td className="border p-2">Logical Reasoning & Data Interpretation</td>
            <td className="border p-2">Puzzles, Graphs, Charts, Tables</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-xl font-semibold mt-6">Course Details</h2>
      <ul className="list-disc ml-6 mt-2">
        <li>Duration: 6 Months</li>
        <li>Fee: ₹35,000 + GST</li>
        <li>Includes full-length mock tests and section-wise practice sets</li>
      </ul>
    </div>
  );
};

export default CATCourse;

