//UI Loader:
import React from 'react';

export const Loader: React.FC = () => {
    return (
        <div className='flex justify-center items-center'>
            <div
                className="animate-spin rounded-full h-8 w-8
                border-t-4 border-r-4 border-b-4 border-l-4
                border-transparent border-t-gray-dark border-r-gray-dark"
            ></div>
        </div>
    );
};