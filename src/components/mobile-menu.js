import React from "react"

const MobileMenu = () => {
  return (
    <ul className="flex absolute inset-x-0 bottom-0 lg:hidden bg-teal-800 text-white border-b-4 border-teal-900">
      <li className="flex-1 mr-2">
        <a className="text-center block py-4 px-4 " href="#">Catatan</a>
      </li>
      <li className="flex-1 mr-2">
        <a className="text-center block py-4 px-4 " href="#">Foto</a>
      </li>
      <li className="text-center flex-1">
        <a className="text-center block py-4 px-4 " href="#">Video</a>
      </li>
      <li className="text-center flex-1">
        <a className="text-center block py-4 px-4 " href="#">Kontak</a>
      </li>
    </ul>
  )
}

export default MobileMenu
