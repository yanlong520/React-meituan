import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class BottomBar extends Component {
    render() {
      return (
        <div className="bottom-bar">
          <Link className='bottom-bar-button' to="/">首页</Link>
          <Link className='bottom-bar-button' to="/shopping_car">购物车</Link>
        </div>
      )
    }
  }

export default BottomBar