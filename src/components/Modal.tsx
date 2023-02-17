import React from 'react';

function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-34 w-1/4 p-3 text-lg shadow-lg shadow-gray-400/50 rounded-md bg-white mx-auto border-[1px] border-gray-400">
      {children}
    </div>
  );
}

export default Modal;
