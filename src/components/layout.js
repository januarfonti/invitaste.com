import React from 'react'
import Navbar from './navbar'
import MobileMenu from './mobile-menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'

class Layout extends React.Component {
  render () {
    const { children } = this.props
    return (
      <div className='h-full'>
        <Navbar />
        <div className='flex flex-col pt-10 pb-24'>
          <main className='pt-10'>{children}</main>
          <MobileMenu />
        </div>
        <div className='scroll-to-top rounded bg-red-400 fixed px-4 py-2'>
          <FontAwesomeIcon className="text-white" icon={faAngleDoubleUp} />
        </div>
      </div>
    )
  }
}

export default Layout
