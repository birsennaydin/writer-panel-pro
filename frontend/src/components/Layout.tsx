import React from 'react';
import { Link } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <header style={{ padding: '1rem', background: '#f5f5f5', borderBottom: '1px solid #ccc' }}>
        <h2 style={{ marginBottom: '0.5rem' }}>Writer Panel</h2>
        <nav style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>
      <main style={{ padding: '2rem' }}>
        {children}
      </main>
    </>
  );
};

export default Layout;
