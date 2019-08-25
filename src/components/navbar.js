import React from "react"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-800 px-10 py-3 border-t-4 border-teal-900">
      <div className="content-center flex items-center flex-shrink-0 text-white lg:mr-6 mx-auto">
        <span className="font-semibold text-xl tracking-tight">Cuticuti.club</span>
      </div>

      <div className="hidden lg:block w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto justify-end">
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-10">
            Catatan
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-10">
            Foto
          </a>
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-10">
            Video
          </a>
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          Kontak
        </a>
      </div>
    </nav>

  )
}

export default Navbar
