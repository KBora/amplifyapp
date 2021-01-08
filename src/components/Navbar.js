import React from 'react';

function Navbar(props) {
    return (
<nav className="bg-white shadow">
  <div className="max-w-7xl mx-auto px-2 sm:px-6">
    <div className="relative flex justify-between h-16">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-900" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
                   <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-start w-full">
        <div className="flex-shrink-0 flex items-center ml-12 sm:ml-0">
          <div className="font-bold text-xl text-yellow-900">Repertoire Select</div>
        </div>
        <div className="hidden sm:ml-6 sm:flex sm:space-x-8 flex-grow justify-end">          
          <a href="#" className="border-yellow-900 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            Repertoire Lists
          </a>
          <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            About
          </a>
          <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            Home
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
)
}

export default Navbar;