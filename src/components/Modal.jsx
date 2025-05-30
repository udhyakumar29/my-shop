import React from 'react';
import { IoClose } from 'react-icons/io5'; // install react-icons if not already

const Modal = ({ isModalOpen, setIsModalOpen, children }) => {
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white p-6 rounded-lg w-full max-w-md">
        {/* Close Button at top-right */}
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-xl"
        >
          <IoClose />
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
