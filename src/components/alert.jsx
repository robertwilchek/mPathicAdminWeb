import React, { useState, useEffect } from 'react';

const AlertComponent = ({ errorCode, errorMessage, onClose }) => {
    const isSuccess = errorCode === 0;
    const [showAlert, setShowAlert] = useState(true);
    const [progress, setProgress] = useState(100);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => prevProgress - 20);
        }, 1000);

        const timeOut = setTimeout(() => {
            setShowAlert(false);
            onClose()
        }, 5000);

        return () => {
            clearInterval(timer);
            clearTimeout(timeOut);
        }
    }, [onClose]);

    const containerClass = `fixed top-4 right-4 z-50 rounded-md p-4 ${isSuccess ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`;
    const progressBarClass = `h-1 rounded-full overflow-hidden ${isSuccess ? 'bg-green-500' : 'bg-red-500'}`;

    if (!showAlert) {
        return null;
    }

    return (
        <div className={containerClass}>
            <div className='flex justify-between items-center'>
                <h5 className='font-bold mb-2'>{isSuccess ? 'Operation Success' : 'Operation Failed'}</h5>
                <button onClick={() => setShowAlert(false)} className="text-gray-500 hover:text-gray-700">
                    <svg
                        className="h-5 w-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <p>{errorMessage}</p>
            <div className="bg-gray-200 rounded-full overflow-hidden mt-2">
                <div className={progressBarClass} style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    )
}

export default AlertComponent