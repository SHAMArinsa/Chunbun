//frontend\src\components\AboutUs\Pages\ExploreAbout.tsx

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ExploreAbout: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div style={{ backgroundColor: '#000', color: '#fff' }}>
      {/* Intro Banner with Background Image */}
      <div
        style={{
          backgroundImage: 'url("/image/about2.jpg")', // replace with actual image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '600px',
          width: '100%',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '30px',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '8px',
            fontSize: '2rem',
            fontWeight: 'bold',
          }}
        >
          About ARINSA AI MINDS
        </div>
      </div>

      {/* Our Purpose Section */}
      <section id="our-purpose" style={{ marginBottom: '80px' }}>
        <div
          style={{
            backgroundColor: '#4B4B4B', // Ash color background
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '50vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '20px',
            padding: '40px 0',
          }}
        >
          <div
            style={{
              color: '#fff',
              borderRadius: '16px',
              padding: '24px',
              flex: 1,
              maxWidth: '400px',
              minHeight: '250px',
              backgroundColor: 'transparent', // Background now transparent
              textShadow: '1px 1px 3px rgba(255, 255, 255, 0.2)', // Keep text shadow for contrast
            }}
          >
            <h1 style={{ fontSize: '2.5rem' }}>Our Purpose</h1>
            <p style={{ fontSize: '1.25rem' }}>
              At ARINSA AI MINDS, our purpose is to build a better, smarter world through the power of AI.
              We strive to solve complex problems, create sustainable value, and empower innovation across industries.
              Our vision is to leverage cutting-edge AI technology to shape a future where intelligent solutions
              improve lives, drive business success, and contribute to a sustainable planet.
            </p>
          </div>

          <div
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              borderRadius: '16px',
              padding: '40px',
              color: '#fff',
              flex: 1,
              maxWidth: '700px',
              position: 'relative',
            }}
          >
            <h2 style={{ fontSize: '2rem' }}>Our Vision</h2>
            <p>
              We envision a world where artificial intelligence enhances every aspect of human life improving industries,
              advancing healthcare, protecting the environment, and making cities smarter. Our goal is to be at the
              forefront of this transformation, pushing boundaries, and bringing revolutionary ideas to life.
            </p>

            <h2 style={{ fontSize: '2rem', marginTop: '30px' }}>Our Mission</h2>
            <p>
              Our mission is simple yet impactful: to use AI to solve today’s most pressing challenges and create lasting
              value for businesses and society. Whether it's optimizing operations, enhancing customer experiences, or
              developing smarter systems, we’re committed to providing innovative, AI-driven solutions that deliver tangible results.
            </p>
            <p>
              We work with organizations across sectors—healthcare, education, finance, and more to harness the power
              of AI in ways that are ethical, responsible, and beneficial for all.
            </p>
          </div>
        </div>
      </section>


      {/* Our People Section */}
<section
  id="our-people"
  style={{
    padding: '0px',
    marginBottom: '10px',
    marginTop: '-60px',
    backgroundImage: 'url("/image/about4.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: '#fff',
    position: 'relative',
  }}
>
  <div
    style={{
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: '40px',
      borderRadius: '16px',
      display: 'flex', // Flexbox for layout
      justifyContent: 'space-between', // Space between left and right sections
      flexWrap: 'wrap', // Allow wrapping for responsiveness
    }}
  >
    {/* Left Section (Our People) */}
    <div style={{ flex: 1, maxWidth: '48%', marginRight: '20px' }}>
      <h1>Our People</h1>
      <p>
        Our strength lies in our people. We are a team of passionate, innovative, and diverse professionals committed to excellence and collaboration. Our culture fosters growth, curiosity, and mutual respect.
      </p>
    </div>
  </div>
</section>


      <div
  style={{
    backgroundImage: 'url("/image/about3.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
  }}
>
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
    {/* Core Values */}
    <div
      style={{
        flex: '1 1 300px',
        backgroundColor: '#f2f6fc80',
        borderRadius: '12px',
        padding: '20px',
        color: '#000',
        minWidth: '300px',
      }}
    >
      <h2>Our Core Values</h2>
      <p>We believe that our values define who we are and how we work. These values guide us in everything we do:</p>
      <ul>
        <li><strong>Integrity:</strong> We operate with honesty and transparency in all our interactions.</li>
        <li><strong>Innovation:</strong> We constantly push the boundaries of creativity and technology.</li>
        <li><strong>Collaboration:</strong> We believe that the best results come from working together.</li>
        <li><strong>Respect:</strong> We value diversity and treat each other with kindness and respect.</li>
        <li><strong>Excellence:</strong> We strive for the highest standards in everything we do.</li>
      </ul>
    </div>

    {/* Diversity & Inclusion + Join Our Team */}
    <div
      style={{
        flex: '1 1 300px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        minWidth: '300px',
      }}
    >
      <div
        style={{
          backgroundColor: '#f2f6fc80',
          borderRadius: '12px',
          padding: '30px',
          color: '#000',
        }}
      >
        <h2>Our Diversity & Inclusion</h2>
        <p>
          We are proud of the diverse team we have built. We actively seek to create an inclusive environment where every individual feels valued and empowered to contribute their best work.
        </p>
      </div>

      <div
        style={{
          backgroundColor: '#f2f6fc80',
          borderRadius: '12px',
          padding: '20px',
          color: '#000',
        }}
      >
        <h2>Join Our Team</h2>
        <p>
          We are always on the lookout for talented individuals who share our values and passion for innovation.
          Check out our open positions!
        </p>
      </div>
    </div>
  </div>
</div>

   


      {/* Our Values */}
<section
  id="our-values"
  style={{
    padding: '40px',
    marginBottom: '80px',
    backgroundColor: '#333',  // Deep ash color background for the entire section
    color: '#fff',  // Text color for better readability
    borderRadius: '16px',  // Rounded corners for the overall section
  }}
>
  <h1>Our Values</h1>
  <p>
    Integrity, innovation, inclusion, and impact are the core values that guide everything we do at ARINSA AI MINDS. These values are at the heart of our culture and drive us to create meaningful solutions with honesty, creativity, and a sense of purpose. We are committed to making a positive impact on the world through the responsible use of AI and fostering an environment where everyone is empowered to thrive.
  </p>

  {/* 3x3 Grid for the Individual Values Sections */}
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',  // 3 columns
      gap: '20px',  // Space between grid items
    }}
  >
    <section
      style={{
        backgroundImage: 'url("/image/integrity.jpg")',  // Background image for Integrity
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
        borderRadius: '8px',
      }}
    >
      <h2>Integrity</h2>
      <p>
        Integrity is the foundation of everything we do. We believe in being transparent, ethical, and accountable in all our interactions, whether with clients, partners, or within our own team. Integrity means delivering on our promises, ensuring trust in our solutions, and maintaining the highest ethical standards as we create innovative AI technologies.
      </p>
      <p>
        Example: We maintain strict data privacy and security practices, ensuring that our AI solutions are always deployed with the utmost respect for user privacy and regulatory compliance.
      </p>
    </section>

    <section
      style={{
        backgroundImage: 'url("/image/innovation.jpg")',  // Background image for Innovation
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
        borderRadius: '8px',
      }}
    >
      <h2>Innovation</h2>
      <p>
        Innovation is at the core of our mission. We are constantly pushing the boundaries of what’s possible with AI, exploring new technologies, methodologies, and creative solutions. We encourage our team to think outside the box and challenge the status quo, believing that real innovation comes from daring to dream big and taking risks.
      </p>
      <p>
        Example: Our research and development teams are always exploring cutting-edge AI models and algorithms to solve real-world problems in industries like healthcare, finance, and logistics.
      </p>
    </section>

    <section
      style={{
        backgroundImage: 'url("/image/inclusion.jpg")',  // Background image for Inclusion
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
        borderRadius: '8px',
      }}
    >
      <h2>Inclusion</h2>
      <p>
        Inclusion is central to our company culture. We believe that diverse perspectives and experiences lead to better ideas, stronger collaboration, and more impactful solutions. We are committed to creating an environment where everyone feels valued, respected, and empowered to contribute their unique talents and perspectives.
      </p>
      <p>
        Example: We actively promote diversity in our hiring practices and create programs to support the growth and development of underrepresented groups in tech, ensuring equal opportunities for all.
      </p>
    </section>

    <section
      style={{
        backgroundImage: 'url("/image/impact.jpg")',  // Background image for Impact
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
        borderRadius: '8px',
      }}
    >
      <h2>Impact</h2>
      <p>
        We are driven by the desire to make a positive impact on the world. Whether through creating solutions that drive business success, improving lives, or contributing to sustainability efforts, our goal is to create lasting value. We believe AI can solve some of the world’s most pressing challenges, and we aim to use our expertise to help our clients and communities thrive.
      </p>
      <p>
        Example: Our AI-driven sustainability solutions help companies reduce their carbon footprints and optimize resource management, making a real difference in protecting the environment for future generations.
      </p>
    </section>

    <section
      style={{
        backgroundImage: 'url("/image/excellence.jpg")',  // Background image for Excellence
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
        borderRadius: '8px',
      }}
    >
      <h2>Excellence</h2>
      <p>
        We are committed to excellence in everything we do. From the quality of our AI solutions to our customer service and internal processes, we aim to deliver the highest standards. Excellence means constantly striving to improve and ensuring that every solution we create is of the highest quality and delivers measurable results.
      </p>
      <p>
        Example: We follow best practices in AI development, including rigorous testing and quality assurance processes to ensure that our solutions are reliable, efficient, and scalable.
      </p>
    </section>

    <section
      style={{
        backgroundImage: 'url("/image/collaboration.jpg")',  // Background image for Collaboration
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
        borderRadius: '8px',
      }}
    >
      <h2>Collaboration</h2>
      <p>
        Collaboration is key to our success. We believe that the best results come from working together—whether it’s between team members, clients, or external partners. We foster a collaborative environment where open communication, mutual respect, and shared goals help us achieve outstanding outcomes.
      </p>
      <p>
        Example: We regularly work alongside clients to co-create AI solutions that are tailored to their unique needs, ensuring that our technologies truly add value and solve their specific challenges.
      </p>
    </section>
  </div>
</section>


      {/* Locations */}
<section id="locations" style={{ padding: '40px', marginBottom: '80px' }}>
  <h1 style={{ marginBottom: '20px', fontSize: '2.5rem' }}>Our Ethics and Locations</h1>
  <p style={{ marginBottom: '40px', fontSize: '1.25rem', lineHeight: '1.6'  }}>
    ARINSA AI MINDS operates fully remotely across continents, supported by a global team that values flexibility, efficiency, and well-being. While we maintain an office in India for official purposes, we believe our talent shouldn’t lose precious time in traffic—they deserve the freedom to work efficiently and enjoy meaningful time with friends and family. That’s why we prioritise remote work, empowering our people to make an impact from wherever they are.
  </p>

  {/* Centered background image block */}
  <div
    style={{
      position: 'relative',
      backgroundImage: `url('/image/global.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '300px',
      borderRadius: '16px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '20px',
    }}
  >
    {/* Overlay */}
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      }}
    />
    {/* Centered text */}
    <div
      style={{
        position: 'relative',
        color: '#fff',
        textAlign: 'center',
        padding: '0 20px',
        zIndex: 1,
      }}
    >
      <h2 style={{ fontSize: '2rem' }}>Connecting Innovation Across The World</h2>
      <p>
        Our global presence empowers us to blend diverse perspectives with worldwide expertise to drive impactful results.
      </p>
    </div>
  </div>

  
</section>

    </div>
  );
};

export default ExploreAbout;
