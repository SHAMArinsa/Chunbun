import React from 'react';

const DesignAndFrontend = () => {
  return (
    <div className="course">
      <h1>Design & Frontend</h1>

      <h2>Courses Offered</h2>
      <p>Our Design & Frontend courses will help you master the art of building beautiful and responsive web and mobile applications. These courses are perfect for individuals looking to start a career in UI/UX design or mobile app development.</p>

      <h3>1. UI/UX Design (Frontend Only)</h3>
      <p><b>Tools:</b> Figma, HTML/CSS, React Basics</p>
      <p>In this course, you will learn how to design user-friendly and visually appealing user interfaces (UI) and user experiences (UX). Using Figma for prototyping and wireframing, you will get hands-on experience in creating responsive designs with HTML/CSS, along with the fundamentals of React to bring your designs to life.</p>

      <h3>2. Mobile App Development</h3>
      <p><b>Tools:</b> Flutter or React Native</p>
      <p>This course will teach you how to develop mobile applications for both Android and iOS. You will learn to use either Flutter or React Native, two popular frameworks for cross-platform app development. By the end of the course, you will be able to build your own fully-functional mobile apps.</p>

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
            <td>UI/UX Design (Frontend Only)</td>
            <td>4 Months</td>
            <td>₹30,000 + GST (For Indian citizens in India) <br/>$500 (For Indian citizens living abroad & non-Indian citizens)</td>
          </tr>
          <tr>
            <td>Mobile App Development</td>
            <td>5 Months</td>
            <td>₹40,000 + GST (For Indian citizens in India) <br/>$600 (For Indian citizens living abroad & non-Indian citizens)</td>
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
            <td>Job placement support available based on project performance.</td>
          </tr>
          <tr>
            <td>Tools Required</td>
            <td>Figma, HTML/CSS, React, Flutter or React Native.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DesignAndFrontend;
