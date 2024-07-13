import React from 'react';

const FeedbackPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex items-center justify-center p-4">
      <div className="max-w-xl w-full mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Apni Library</h1>
        <p className="text-lg mb-8">
          Thank you for using Apni Library! We value your feedback.
        </p>
        <div className="bg-gray-200 dark:bg-gray-800 rounded-lg p-4 shadow-lg">
          <p className="mb-4">We are continuously working to improve your experience. Please share your thoughts and suggestions.</p>
          <p className="italic">"Your feedback matters!"</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;