import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import Scroll from 'react-scroll'

var scroll = Scroll.animateScroll

class Layout extends React.Component {
  constructor (props) {
    super(props)
    this.scrollToTop = this.scrollToTop.bind(this)
  }
  scrollToTop () {
    scroll.scrollToTop()
  }
  render () {
    return (
      <div className='scroll-to-top rounded bg-teal-900 fixed px-4 py-2' onClick={this.scrollToTop}>
        <FontAwesomeIcon className='text-white' icon={faAngleDoubleUp} />
      </div>
    )
  }
}

export default Layout
