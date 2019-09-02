import React from 'react'
import Navbar from './navbar'
import MobileMenu from './mobile-menu'
import ScrollToTop from './scroll-to-top'

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
        <ScrollToTop />
      </div>
    )
  }
}

export default Layout
