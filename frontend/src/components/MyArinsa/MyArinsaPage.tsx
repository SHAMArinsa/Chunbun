// src/components/MyArinsa/MyArinsaPage.tsx
import { Link } from 'react-router-dom';

const MyArinsaPage = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/image/contact.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '60vh', // 👈 Restrict height to smaller space
        padding: '60px 20px 20px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'relative',
      }}
    >
      {/* Overlay for better text visibility */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // dark overlay
        }}
      />

      {/* Content on top of the overlay */}
      <div
        style={{
          position: 'relative',
          padding: '2rem',
          borderRadius: '10px',
          textAlign: 'center',
          maxWidth: '600px',
          width: '90%',
          color: 'white', // 👈 Make all text white
        }}
      >
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>
          Welcome to My ARINSA AI MINDS
        </h1>
        <p style={{ marginBottom: '40px' }}>Choose an option below to proceed.</p>

        <Link
          to="/connect"
          style={{
            display: 'inline-block',
            textDecoration: 'none',
            backgroundColor: '#4a5879',
            color: 'white',
            padding: '15px 30px',
            fontSize: '16px',
            width: '90%',
            textAlign: 'center',
            borderRadius: '5px',
          }}
        >
          Learning Corner, Certification, Ideathon, Blogthon
        </Link>
      </div>
    </div>
  );
};

export default MyArinsaPage;
