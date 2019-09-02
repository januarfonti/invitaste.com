import React from 'react'
import { Link } from 'gatsby'

const MobileMenu = () => {
  return (
    <section className='w-full md:hidden bg-teal-900 p-4 pin-b fixed bottom-0 z-50 text-white'>
      <ul className='flex'>
        <li className='flex-1 mr-2'>
          <Link className='text-center block px-4 ' to='/tags/catatan'>Catatan</Link>
        </li>
        <li className='flex-1 mr-2'>
        <Link className='text-center block px-4 ' to='/tags/video'>Video</Link>
        </li>
        <li className='flex-1 mr-2'>
          <Link className='text-center block px-4 ' to='/tags/foto'>Foto</Link>
        </li>
        <li className='text-center flex-1'>
          <Link className='text-center block px-4 ' to='/kontak'>Kontak</Link>
        </li>
      </ul>
    </section>  
  )
}

export default MobileMenu
