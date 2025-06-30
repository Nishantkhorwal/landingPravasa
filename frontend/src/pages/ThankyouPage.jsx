import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYouPage = () => {
    const navigate = useNavigate();

  useEffect(() => {
  const isSubmitted = sessionStorage.getItem('formSubmitted');

  if (!isSubmitted) {
    navigate('/');
    return;
  }

  // Clear it *after* a short delay to avoid double-render issues
  const timeout = setTimeout(() => {
    sessionStorage.removeItem('formSubmitted');
  }, 500); 

  return () => clearTimeout(timeout);
}, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-200 flex items-center justify-center p-6">
      <div className="thank-you-card bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        <div className="text-green-500 text-6xl mb-4">✓</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Thank You!</h1>
        <p className="text-gray-600 text-lg">
          Your response has been successfully received. <br />
          We’ll be in touch with you shortly.
        </p>
        <a
          href="/"
          className="mt-6 inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-colors"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default ThankYouPage;
