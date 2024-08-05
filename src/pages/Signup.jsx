import React from 'react';
import { Signup as SignupComponent } from '../components';

function Signup() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 py-8">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <SignupComponent />
            </div>
        </div>
    );
}

export default Signup;
