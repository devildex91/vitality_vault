import React, { useEffect, useState } from 'react';

import Footer from '../../components/Footer.jsx';
import Navbar from '../../components/Navbar.jsx';
import AuthForm from './AuthForm.jsx';

// Shared auth screen that swaps between login and register mode.
export default function AuthPage({ initialMethod }) {
  const [method, setMethod] = useState(initialMethod);

  useEffect(() => {
    setMethod(initialMethod);
  }, [initialMethod]);

  const route = method === 'login' ? '/api/token/' : '/api/user/register/';
  const title = method === 'login' ? 'Please login below' : 'Please register below';

  return (
    <div className="flex min-h-screen flex-col text-primary">
      <Navbar />
      <header>
        <h1 className="text-primary font-bold">{title}</h1>
      </header>
      <main className="hero-content flex-col lg:flex-row-reverse grow">
        <AuthForm route={route} method={method} />
      </main>
      <Footer />
    </div>
  );
}

