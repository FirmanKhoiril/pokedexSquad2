import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'; 

export default function MainLayout() {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
}
