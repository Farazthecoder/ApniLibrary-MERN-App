import React from "react";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col-reverse md:flex-row my-6">
        <div className="w-full md:w-1/2 mt-10 md:mt-24 ">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">
              Hello , welcome here to learn something{" "}
              <span className="text-pink-400">new everyday !!!</span>
            </h1>
            <p className="text-xl">
            Discover a world of knowledge and imagination at Apni Library. Our extensive collection includes books, e-books, audiobooks, and more, catering to readers of all ages and interests. Whether you're here to explore new genres, dive into research, or simply find a cozy spot to read, Apni Library is your gateway to endless possibilities. Join us today and start your journey with stories that inspire, inform, and entertain.
            </p>
          <label className="input input-bordered flex items-center gap-2 w-full md:w-3/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="email" className="grow" placeholder="Email" />
          </label>
          </div>
          <button className="btn btn-outline btn-secondary mt-4">Get Started</button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-24  ">
        <img src="/Banner.jpg" className="w-96 h-96 rounded-2xl" alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
