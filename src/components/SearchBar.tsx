import React from 'react'

const SearchBar = () => {
  return (
    <div className="flex items-center">
            <div className="flex ">
                <input
                    type="text"
                    className="font-sans block w-full px-4 py-2 text-black bg-white border rounded-l-2xl focus:border-a-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search username..."
                />
                <button className="px-4 text-white bg-blue-600 rounded-r-full ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
        </div>);
}

export default SearchBar