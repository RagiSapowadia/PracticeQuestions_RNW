import React, { useEffect, useState } from 'react';
import {  Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import RoomList from './Components/RoomList';
import ReservationForm from './Components/ReservationForm';
import ReservationList from './Components/ReservationList';
import SignIn from './Components/SignIn';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from './firebase';
import RoomDetails from './Components/RoomDetails';

const auth = getAuth(app);

// ProtectedRoute component that waits for the authentication state to load
const ProtectedRoute = ({ element, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Start with null to wait for auth state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true); // User is signed in
      } else {
        setIsAuthenticated(false); // User is not signed in
      }
    });

    return unsubscribe;
  }, []);

  // If the authentication state is still loading, we return nothing or a loading screen
  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? element : <Navigate to="/signin" />;
};

const App = () => (
  <div>

    <Navbar />
    <Routes>
      <Route path="/" element={<RoomList />}  />
      <Route path="/roomDetails/:id" element={<RoomDetails />} />
      <Route path="/reservations" element={<ReservationList />}  />
      <Route path="/reserve" element={<ReservationForm />}  />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
    </div>

);

export default App;
