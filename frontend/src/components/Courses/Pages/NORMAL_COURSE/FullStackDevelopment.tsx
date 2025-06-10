import React from 'react';

const FullStackDevelopment = () => {
  return (
    <div className="course">
      <h1>Full Stack Development</h1>

      <h2>Courses Offered</h2>
      <p>Our Full Stack Development courses are designed to equip you with the skills needed to build end-to-end web applications. From backend development to frontend design, you'll learn how to use the latest frameworks and technologies to develop dynamic and responsive applications.</p>

      <h3>1. Full Stack (Python)</h3>
      <p><b>Stack:</b> Python, Django/Flask, Frontend (HTML, CSS, JavaScript)</p>
      <p>Master full-stack development with Python! This course covers the fundamentals of Python backend development using Django or Flask, and frontend technologies like HTML, CSS, and JavaScript to create dynamic web applications.</p>

      <h3>2. Full Stack (Node.js + React)</h3>
      <p><b>Stack:</b> MERN (MongoDB, Express.js, React, Node.js)</p>
      <p>Learn the MERN stack (MongoDB, Express.js, React, and Node.js) to build modern, scalable web applications. This course focuses on full-stack JavaScript development, providing you with the skills to work on both frontend and backend development.</p>

      <h3>3. Full Stack (Java)</h3>
      <p><b>Stack:</b> Spring Boot, JSP, Frontend (HTML, CSS, JavaScript)</p>
      <p>Explore full-stack development with Java! This course teaches you to work with Spring Boot for backend development, JSP for frontend rendering, and other web technologies to create dynamic web applications.</p>

      <h2>Course Details</h2>
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Duration</th>
            <th>Fees</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Full Stack (Python)</td>
            <td>6 Months</td>
            <td>₹50,000 + GST (For Indian citizens in India) <br/>$800 (For Indian citizens living abroad & non-Indian citizens)</td>
          </tr>
          <tr>
            <td>Full Stack (Node.js + React)</td>
            <td>6 Months</td>
            <td>₹55,000 + GST (For Indian citizens in India) <br/>$850 (For Indian citizens living abroad & non-Indian citizens)</td>
          </tr>
          <tr>
            <td>Full Stack (Java)</td>
            <td>6 Months</td>
            <td>₹60,000 + GST (For Indian citizens in India) <br/>$900 (For Indian citizens living abroad & non-Indian citizens)</td>
          </tr>
        </tbody>
      </table>

      <h2>Key Information</h2>
      <table>
        <thead>
          <tr>
            <th>Aspect</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Job Support</td>
            <td>Job placement support based on project performance and assessments.</td>
          </tr>
          <tr>
            <td>Cloud Costs</td>
            <td>AWS/Azure costs are additional (not covered in this course fee)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FullStackDevelopment;
