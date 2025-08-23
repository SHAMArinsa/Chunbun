//import React from "react";

const MATCourse = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">MAT Exam Preparation Course</h1>
      <p>
        Prepare effectively for the Management Aptitude Test (MAT) with focused content tailored to
        the latest exam patterns.
      </p>

      <table className="table-auto w-full mt-4 border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Section</th>
            <th className="border p-2">Topics</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Mathematical Skills</td>
            <td className="border p-2">Arithmetic, Algebra, Geometry</td>
          </tr>
          <tr>
            <td className="border p-2">Language Comprehension</td>
            <td className="border p-2">Reading Comprehension, Grammar, Vocabulary</td>
          </tr>
          <tr>
            <td className="border p-2">Data Analysis & Sufficiency</td>
            <td className="border p-2">Tables, Charts, Graphs</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-xl font-semibold mt-6">Details</h2>
      <ul className="list-disc ml-6 mt-2">
        <li>Duration: 5 Months</li>
        <li>Fee: ₹28,000 + GST</li>
      </ul>
    </div>
  );
};

export default MATCourse;
