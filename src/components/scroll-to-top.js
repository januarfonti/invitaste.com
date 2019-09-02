import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import Scroll from 'react-scroll'

var scroll = Scroll.animateScroll

class Layout extends React.Component {
  state = {
        thePosition: false
  }
  constructor (props) {
    super(props)
    this.scrollToTop = this.scrollToTop.bind(this)
  }
  componentDidMount () {
    document.addEventListener("scroll", () => { 
        if (window.scrollY > 50) { 
             this.setState({ thePosition: true }) 
        } else { 
            this.setState({ thePosition: false }) 
        } 
    })
  }
  scrollToTop () {
    scroll.scrollToTop()
  }
  render(){ 
    if (this.state.thePosition){ 
        return (
         <div className='scroll-to-top rounded bg-teal-900 fixed px-4 py-2' onClick={this.scrollToTop}>
         <FontAwesomeIcon className='text-white' icon={faAngleDoubleUp} />
       </div>
        )
      } 
    return ( 
        <div></div>
    ) 
  }
}

export default Layout
