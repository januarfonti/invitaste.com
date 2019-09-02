import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'

class Layout extends React.Component {
  render () {
    return (
      <div className='scroll-to-top rounded bg-teal-900 fixed px-4 py-2'>
        <FontAwesomeIcon className='text-white' icon={faAngleDoubleUp} />
      </div>
    )
  }
}

export default Layout
