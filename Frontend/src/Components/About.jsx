import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 sm:p-8 md:p-10">
      <div className="max-w-4xl mx-auto py-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center sm:text-left">About Apni Library</h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-4 text-justify">
          Welcome to <strong>Apni Library</strong>, your number one source for all kinds of books. We're dedicated to providing you the very best of literary resources, with an emphasis on variety, accessibility, and quality.
        </p>
        <p className="text-lg sm:text-xl md:text-2xl mb-4 text-justify">
          Our website offers a vast collection of books across different genres and categories. Whether you're into fiction, non-fiction, science, history, or any other subject, we have something for every reader.
        </p>
        <p className="text-lg sm:text-xl md:text-2xl mb-4 text-justify">
          Founded in [2022], Apni Library has come a long way from its beginnings. When we first started out, our passion for making books accessible to everyone drove us to start our own business.
        </p>
        <p className="text-lg sm:text-xl md:text-2xl text-justify">
          We hope you enjoy our collection as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
        </p>
        <div className="mt-10 border-t pt-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Apni Library. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
