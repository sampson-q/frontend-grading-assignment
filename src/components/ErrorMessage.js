import React, { useState } from 'react';
import Button from './Button';

const ErrorMessage = ({ errorMessage }) => {
    const [showMessageBox, setShowMessageBox] = useState(true);

    function handleClose() {
        setShowMessageBox(false);
    }

    return (
        <>
            {showMessageBox && (
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 border border-red-200 px-2 py-1 rounded">
                    <div className="sm:col-span-5">
                        {errorMessage}
                    </div>

                    <div className="sm:col-span-1 text-center rounded border border-grey-200 w-6 cursor-pointer" onClick={handleClose}>
                        X
                    </div>
                </div>
            )}
        </>
    );
};

export default ErrorMessage;