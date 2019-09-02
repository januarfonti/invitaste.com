import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCampground, faTree, faMountain, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const MobileMenu = () => {
  return (
    <section className='w-full md:hidden bg-teal-900 p-2 pin-b fixed bottom-0 z-50 text-white'>
      <ul className='flex'>
        <li className='flex-1 mr-2 border-r-2 border-teal-800'>
          <Link className='text-center block px-4 ' to='/tags/catatan'>
            <FontAwesomeIcon icon={faCampground} />
            <span className='text-xs block'>Catatan</span>
          </Link>
        </li>
        <li className='flex-1 mr-2 border-r-2 border-teal-800'>
          <Link className='text-center block px-4 ' to='/tags/video'>
            <FontAwesomeIcon icon={faTree} />
            <span className='text-xs block'>Video</span>
          </Link>
        </li>
        <li className='flex-1 mr-2 border-r-2 border-teal-800'>
          <Link className='text-center block px-4 ' to='/tags/foto'>
            <FontAwesomeIcon icon={faMountain} />
            <span className='text-xs block'>Foto</span>
          </Link>
        </li>
        <li className='text-center flex-1'>
          <Link className='text-center block px-4 ' to='/kontak'>
            <FontAwesomeIcon icon={faEnvelope} />
            <span className='text-xs block'>Kontak</span>
          </Link>
        </li>
      </ul>
    </section>  
  )
}

export default MobileMenu
