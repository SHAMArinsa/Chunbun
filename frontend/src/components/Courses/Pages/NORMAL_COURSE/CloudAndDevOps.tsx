import React from 'react';

const CloudAndDevOps = () => {
  return (
    <div className="course">
      <h1>Cloud & DevOps</h1>

      <h2>Courses Offered</h2>
      <p>Our Cloud & DevOps courses will equip you with the essential skills needed to work with cloud platforms and implement DevOps practices for continuous integration and deployment (CI/CD).</p>

      <h3>1. Cloud Computing</h3>
      <p><b>Platforms:</b> Azure, AWS, GCP</p>
      <p>Learn the fundamentals of cloud computing and how to deploy and manage applications in the cloud. This course covers the major cloud platforms such as Microsoft Azure, Amazon Web Services (AWS), and Google Cloud Platform (GCP), providing you with the skills to work across a wide range of cloud environments.</p>

      <h3>2. DevOps & CI/CD</h3>
      <p><b>Tools:</b> Docker, Kubernetes, Jenkins, GitHub Actions</p>
      <p>DevOps is all about automating and improving the software development lifecycle. In this course, you will learn how to implement continuous integration and continuous deployment (CI/CD) pipelines using tools such as Docker, Kubernetes, Jenkins, and GitHub Actions. You’ll gain hands-on experience in automating the deployment process and improving the efficiency of software development teams.</p>

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
            <td>Cloud Computing</td>
            <td>6 Months</td>
            <td>₹45,000 + GST (For Indian citizens in India) <br/>$700 (For Indian citizens living abroad & non-Indian citizens)</td>
          </tr>
          <tr>
            <td>DevOps & CI/CD</td>
            <td>6 Months</td>
            <td>₹50,000 + GST (For Indian citizens in India) <br/>$750 (For Indian citizens living abroad & non-Indian citizens)</td>
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
            <td>AWS/Azure/GCP cloud costs are additional (not covered in this course fee).</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CloudAndDevOps;
