import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function LogoutBtn() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    setIsLoading(true);
    try {
      await authService.logout();
      dispatch(logout());
    } catch (error) {
      console.error('Logout failed:', error);
      // Handle error appropriately, e.g., show a notification to the user
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      className='inline-block px-5 py-2 text-white font-semibold rounded-lg bg-red-500 hover:bg-red-600 transition duration-300 disabled:opacity-70'
      onClick={logoutHandler}
      disabled={isLoading}
      aria-busy={isLoading}
      aria-label="Logout"
    >
      {isLoading ? 'Logging out...' : 'Logout'}
    </button>
  );
}

export default LogoutBtn;
