import React from 'react';

const LoadingPage: React.FC = () => {
    return (
        <div className="loader">
            <style>
                {`
                    .loader {
                        border: 16px solid #f3f3f3;
                        border-top: 16px solid #3498db;
                        border-radius: 50%;
                        width: 100px;
                        height: 100px;
                        animation: spin 2s linear infinite;
                        margin: 0 auto;
                        margin-top: 200px;
                    }

                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}
            </style>
        </div>
    );
};

export default LoadingPage;