//import React from "react";

const Gate = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto bg-white rounded-xl shadow-md space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">GATE Exam Preparation</h1>

      <p className="text-gray-600">
        This course is tailored for aspirants preparing for the Graduate Aptitude Test in Engineering (GATE). It includes detailed lectures, mock tests, and subject-specific strategies for scoring high across multiple streams.
      </p>

      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-700">Course Details</h2>
        <table className="min-w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Course Name</th>
              <th className="p-2 border">Streams</th>
              <th className="p-2 border">Duration</th>
              <th className="p-2 border">Fees (INR)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">GATE Preparation</td>
              <td className="p-2 border">
                CS, EC, EE, IN, MA, CY, BT, PH, ME, CE, ST
              </td>
              <td className="p-2 border">10 Months</td>
              <td className="p-2 border">₹45,000 + GST</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-700">Streams Covered</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li><strong>CS:</strong> Algorithms, DBMS, OS, CN, TOC</li>
          <li><strong>EC:</strong> Signals, Networks, EDC, Communications</li>
          <li><strong>EE:</strong> Power Systems, Machines, Control Systems</li>
          <li><strong>IN:</strong> Sensors, Instrumentation, Systems</li>
          <li><strong>MA:</strong> Calculus, Algebra, Probability</li>
          <li><strong>CY:</strong> Organic, Inorganic, Physical Chemistry</li>
          <li><strong>BT:</strong> Molecular Biology, Genetics, Bioprocess</li>
          <li><strong>PH:</strong> Quantum, Solid State, Nuclear Physics</li>
          <li><strong>ME:</strong> Thermodynamics, Mechanics, Design</li>
          <li><strong>CE:</strong> Structures, Geo-tech, Environment</li>
          <li><strong>ST:</strong> Probability, Statistical Inference</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-700">Key Features</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Live classes 3 days/week + recordings</li>
          <li>Topic-wise assignments and quizzes</li>
          <li>All India test series & performance analytics</li>
          <li>Detailed syllabus coverage per stream</li>
          <li>Previous year paper analysis</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-700">Eligibility</h2>
        <p className="text-gray-600">
          Final year students and graduates in respective engineering/science fields aiming to appear for GATE.
        </p>
      </div>
    </div>
  );
};

export default Gate;
