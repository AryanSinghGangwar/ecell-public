"use client";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Providers = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <>
      <ToastContainer />
      {children}
    </>
  )
}

export default Providers