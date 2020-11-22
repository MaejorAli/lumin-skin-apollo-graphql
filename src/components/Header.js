import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

const Header = () =>
  <header>
    <div className="navbar">
      <div className="navbar_title navbar_item">
        <Link to="/" >
          LUMIN
        </Link>
      </div>
      <div className="navbar_item">
        <Link to="/" >
          Shop
        </Link>
      </div>
      <div className="navbar_item">
        <Link to="/" >
          Help
        </Link>
      </div>
      <div className="navbar_item">
        <Link to="/" >
          Blog
        </Link>
      </div>
      <div className="navbar_right navbar_item">
        <Link to="/" >
          Account
        </Link>
      </div>
      <div className="navbar_item">
        <img className="nav__img" src="https://cdn.shopify.com/s/files/1/0044/1237/5107/files/Image_1_2x_5f1251f7-a674-4496-92be-9cca5561534e.png?v=1581352198"/>
      </div>
    </div>
  </header>

export default withRouter(Header)
