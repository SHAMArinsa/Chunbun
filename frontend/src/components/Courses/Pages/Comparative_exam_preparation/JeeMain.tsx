//import React from "react";

const JeeMain = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto bg-white rounded-xl shadow-md space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">All India JEE MAIN Preparation</h1>

      <p className="text-gray-600">
        This intensive course is structured to prepare students for the Joint Entrance Examination (JEE MAIN), covering all core subjects: Mathematics, Physics, and Chemistry. Delivered by experienced educators and IIT alumni, it offers conceptual clarity, strategic problem-solving, and rigorous test practice.
      </p>

      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-700">Course Details</h2>
        <table className="min-w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Course Name</th>
              <th className="p-2 border">Subjects Covered</th>
              <th className="p-2 border">Duration</th>
              <th className="p-2 border">Fees (INR)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">JEE MAIN Preparation</td>
              <td className="p-2 border">Mathematics, Physics, Chemistry</td>
              <td className="p-2 border">1 Year</td>
              <td className="p-2 border">₹35,000 + GST</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-700">Course Modules</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li><strong>Mathematics:</strong> Algebra, Calculus, Coordinate Geometry, Trigonometry, Probability, Matrices & Determinants</li>
          <li><strong>Physics:</strong> Mechanics, Thermodynamics, Waves, Optics, Electrostatics, Magnetism, Modern Physics</li>
          <li><strong>Chemistry:</strong> Physical Chemistry, Organic Chemistry, Inorganic Chemistry</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-700">Additional Features</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Weekly live classes (3 sessions/week)</li>
          <li>Monthly mock tests and detailed performance analytics</li>
          <li>Recorded videos and PDF notes</li>
          <li>Doubt-clearing sessions with subject experts</li>
          <li>Previous year papers and topic-wise quizzes</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-700">Eligibility & Target Audience</h2>
        <p className="text-gray-600">
          Class 11 and 12 students or repeaters aiming to secure a top rank in JEE MAIN. Suitable for CBSE, ISC, and state board students.
        </p>
      </div>
    </div>
  );
};

export default JeeMain;
