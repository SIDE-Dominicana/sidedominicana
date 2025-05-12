import React from 'react';

/**
 * A simple modal component using Tailwind CSS v2.2.19 utility classes.
 * Drops into any React app. Controls visibility via `isOpen` prop,
 * emits via `onClose` and `onConfirm` callbacks.
 */
export default function Modal({ isOpen, title, children, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40"
        onClick={onClose}
      />

      {/* Modal container */}
      <div
        className="fixed inset-0 flex items-center justify-center z-50 px-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="bg-white rounded-2xl shadow-lg max-w-lg w-full overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h3 id="modal-title" className="text-xl font-semibold">
              {title}
            </h3>
            <button
              type="button"
              className="text-gray-400 hover:text-gray-600"
              onClick={onClose}
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="p-6">
            {children}
          </div>

          {/* Footer */}
          <div className="flex justify-end p-4 border-t">
            <button
              type="button"
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              onClick={onConfirm}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
