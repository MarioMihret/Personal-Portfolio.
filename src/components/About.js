import React from "react";

const About = () => {
  return (
    <div id="about"  className="relative py-32 overflow-hidden bg-blue-600">
      <a >
      <img
        alt=""
        loading="lazy"
        width="2347"
        height="1244"
        decoding="async"
        data-nimg="1"
        className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 max-w-none"
        style={{ color: 'transparent' }}
        src="/_next/static/media/background-call-to-action.6a5a5672.jpg"
      />
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl tracking-tight text-white font-display sm:text-4xl"> Welcome to My Website</h2>
          <p className="mt-4 text-lg tracking-tight text-white">
          Explore my work, learn about my journey, and let's discuss how I can contribute to your next project.
          </p>
          <a
            className="inline-flex items-center justify-center px-4 py-2 mt-10 text-sm font-semibold bg-white rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white"
            color="white"
            variant="solid"
            href="/register"
          >
            Team Mario
          </a>
        </div>
        </div>
        </a>
    </div>
  );
};

export default About;