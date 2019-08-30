import React from "react"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap px-10 py-3 border-t-4 border-red-400 bg-gray-100 shadow-md fixed w-full z-50">
      <div className="container mx-auto flex">

        <div className="content-center flex items-center flex-shrink-0 lg:mr-6 mx-auto">
          <span className="font-semibold text-xl tracking-tight">Cuticuti.club</span>
        </div>

        <div className="hidden lg:block w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto justify-end text-gray-600">
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-10">
              Catatan
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-10">
              Foto
            </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-10">
              Video
            </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0  hover:text-white">
            Kontak
          </a>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
