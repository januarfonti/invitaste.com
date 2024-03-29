import React from 'react'
import { Link } from 'gatsby'
import logo from './images/logo-cuticuticlub.png'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between flex-wrap pt-10 md:pt-24 w-full z-50 border-t-8 border-teal-900'>
      <div className='container mx-auto flex flex-col'>
        <div className='mx-auto'>
          <Link to='/' className='text-xl tracking-tight'>
            <img className='h-24 md:h-32 w-auto hover:opacity-75' src={logo} alt='cuticuticlub' />
          </Link>
          <h1 className='mt-5 uppercase text-center text-gray-800 text-xs'>The Journal of Januar Fonti</h1>
        </div>
        <div className='mx-auto hidden md:block'>
          <ul className='flex mt-16 uppercase mx-auto'>
            <li className="flex-1 mr-20 text-center"><Link className='text-center' to='/tags/catatan'>#Catatan</Link></li>
            <li className="flex-1 mr-20 text-center"><Link className='text-center' to='/tags/foto'>#Foto</Link></li>
            <li className="flex-1 mr-20 text-center"><Link className='text-center' to='/tags/video'>#Video</Link></li>
            <li className="flex-1 text-center"><Link className='text-center' to='/kontak'>Kontak</Link></li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
