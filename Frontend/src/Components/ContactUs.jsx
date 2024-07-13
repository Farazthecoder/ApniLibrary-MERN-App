import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
   const navigate = useNavigate()
  const onSubmit = data => {
       toast.success("Thanks for your feedback.")
       navigate("/feedback");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200">Name</label>
            <input
              {...register('name', { required: 'Name is required' })}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
              type="text"
            />
            {errors.name && <p className="text-red-600">{errors.name.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200">Email</label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: 'Invalid email address'
                }
              })}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
              type="email"
            />
            {errors.email && <p className="text-red-600">{errors.email.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200">Message</label>
            <textarea
              {...register('message', { required: 'Message is required' })}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
              rows="4"
            ></textarea>
            {errors.message && <p className="text-red-600">{errors.message.message}</p>}
          </div>
          <div className="flex justify-center">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 dark:focus:ring-blue-800"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
