import React from 'react';
import { Login as LoginComponent } from '../components';

function Login() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-50 py-8">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8 border border-gray-200">
        <LoginComponent />
      </div>
    </div>
  );
}

export default Login;
