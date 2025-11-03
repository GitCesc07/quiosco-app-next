"use client";

import "react-toastify/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function ToastNotification() {
  return (
    <ToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
}
