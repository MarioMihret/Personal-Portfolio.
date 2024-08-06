import React  from "react";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <header class="py-10">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className= {`fixed top-0 left-0 w-full z-50 flex justify-between  transition-colors duration-300 ${
        scrollPosition > 0
          ? 'bg-slate-200 '
          : 'bg-red text-white'
      }`} > 
          <div class="flex items-center md:gap-x-12">
            <a aria-label="Home" >
            <svg width="100px" height="100px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="24" cy="24" r="20" fill="#1196CC"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M32.5314 16H30.9655H15.262C14.565 16 14 16.565 14 17.262V28.9046C14 30.2985 15.13 31.4286 16.524 31.4286H28.4415C29.8355 31.4286 30.9655 30.2985 30.9655 28.9046V27.2587H32.5314C35.5516 27.2587 38 24.8103 38 21.7901V21.4686C38 18.4484 35.5516 16 32.5314 16ZM30.9655 24.3398V18.9189H32.393C33.89 18.9189 35.1034 20.1324 35.1034 21.6293C35.1034 23.1263 33.89 24.3398 32.393 24.3398H30.9655ZM24.9149 19.4287C23.4568 19.4287 22.5328 19.9991 22.1429 21.1399C21.753 19.9991 20.829 19.4287 19.3708 19.4287C17.1837 19.4287 16.3728 22.1498 17.5193 23.9287C18.2836 25.1147 19.8248 26.6147 22.1429 28.4287C24.4609 26.6147 26.0021 25.1147 26.7664 23.9287C27.9129 22.1498 27.1021 19.4287 24.9149 19.4287Z" fill="white"/>
</svg>
            </a>
            <div class="hidden md:flex md:gap-x-6">
              <a
                class="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                href="#home"
            >
                Home
              </a>
              <a
                class="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                href="#about"
               >
                About
              </a>
              <a
                class="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                href="#contact"
                >
                Contact
              </a>
            </div>
          </div>
          <div class="flex items-center gap-x-5 md:gap-x-8">
            <div class="hidden md:block">
              <a
                class="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                href="/login">
                Sign in
              </a>
            </div>
            <a
              class="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600"
              color="blue"
              variant="solid"
              href="/register">
              <span>
                Get started <span class="hidden lg:inline">today</span>
              </span>
            </a>

            <div class="-mr-1 md:hidden">
  <div data-headlessui-state="">
    <button
      class="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
      aria-label="Toggle Navigation"
      type="button"
      aria-expanded="false"
      data-headlessui-state=""
      id="headlessui-popover-button-:R5v6fja:"
    >
      <svg
        aria-hidden="true"
        class="h-3.5 w-3.5 overflow-visible stroke-slate-700"
        fill="none"
        stroke-width="2"
        stroke-linecap="round"
      >
        <path
          d="M0 1H14M0 7H14M0 13H14"
          class="origin-center transition"
        ></path>
        <path
          d="M2 2L12 12M12 2L2 12"
          class="origin-center transition scale-90 opacity-0"
        ></path>
      </svg>
    </button>
  </div>
  <div
    style={{
      position: 'fixed',
      top: '1px',
      left: '1px',
      width: '1px',
      height: '0',
      padding: '0',
      margin: '-1px',
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      borderWidth: '0',
      display: 'none',
    }}
  ></div>
</div>       </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
