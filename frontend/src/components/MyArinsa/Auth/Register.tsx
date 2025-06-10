


// src/components/MyArinsa/Auth/Register.tsx
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock registration logic
    if (email && password) {
      alert('Registration successful! You can now log in.');
      navigate('/my-arinsa/auth/login');
    }
  };

  return (
    <div style={{ padding: '60px 20px', maxWidth: '400px', margin: 'auto' }}>
      <h2 style={{ marginBottom: '20px' }}>Register as Candidate</h2>
      <form onSubmit={handleRegister}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '10px' }} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '20px' }} required />
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#ffce00', border: 'none' }}>Register</button>
      </form>
    </div>
  );
};

export default Register;

