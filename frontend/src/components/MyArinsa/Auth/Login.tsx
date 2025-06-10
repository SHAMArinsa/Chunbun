


// src/components/MyArinsa/Auth/Login.tsx
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication logic
    if (email && password) {
      navigate('/my-arinsa/dashboard');
    } else {
      alert('Please enter email and password');
    }
  };

  return (
    <div style={{ padding: '60px 20px', maxWidth: '400px', margin: 'auto' }}>
      <h2 style={{ marginBottom: '20px' }}>Candidate Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '10px' }} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '20px' }} required />
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#ffce00', border: 'none' }}>Login</button>
      </form>
      <p style={{ marginTop: '15px' }}>
        New user? <Link to="/my-arinsa/auth/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;
