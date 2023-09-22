import React, { useState } from 'react';

function Forgot() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

   
    setMessage(`A password reset link has been sent to ${email}.`);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Forgot Password</h2>
        {isSubmitted ? (
          <>
            <p className="text-green-600">{message}</p>
            
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4"
              onClick={() => {
                setIsSubmitted(false); // Reset the form
                
                setMessage(''); // Clear the success message
            }}
            >
                
              OK
            </button>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border rounded px-3 py-2 w-full"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full"
              >
                Reset Password
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Forgot;
