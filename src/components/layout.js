import React from "react"
import { Link } from "gatsby"
import Navbar from "./navbar"
import MobileMenu from "./mobile-menu"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <Navbar/>
        <div className="flex flex-col h-full">
          {/*<header>Header</header>*/}
          <main>{children}</main>
          {/*<footer className='w-full text-center border-t border-grey p-4 pin-b'>*/}
          {/*  This is our footer*/}
          {/*</footer>*/}
          <MobileMenu/>
        </div>
      </div>
    )
  }
}

export default Layout
