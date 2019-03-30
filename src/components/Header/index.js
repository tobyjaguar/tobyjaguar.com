import React, { Component } from 'react'

import { Link } from 'gatsby'

class Header extends Component {
  constructor(props, context) {
    super(props)

    this.state = {
      route: '/'
    }
  }

  render() {
    return(
      <div className='header'>
          <Link className='link' to='/'>
            TobyJaguar
          </Link>
        <div className='header-right'>
          <Link className='link' to='/blog/'>
            Blog
          </Link>
          <Link className='link' to='/projects/'>
            Projects
          </Link>
          <Link className='link' to='/about/'>
            About
          </Link>
          <Link className='link' to='/contact/'>
            Contact
          </Link>
          </div>
      </div>
    )
  }

}

export default Header
