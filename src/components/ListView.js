import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {fakeApi} from '../fakeApi'

class ListView extends Component {
    state = {
      data: []
    }
    componentWillMount() {
      fakeApi.getList((data) => {
        this.setState({
          data: data
        })
      })
    }
    render() {
      const { data } = this.state
      return (
        <ul className='list'>
          <li className='tiem-title'>为你推荐：</li>
          {
            data.map((v, k) => (
              <li key={v.id} className="itemitem">
                <Link to={`/detail/${v.id}`} className='item'>
                  <img className='item-img' src={v.img} alt="" />
                  <div className='item-wrap'>
                    <p className='item-name'>{v.name}</p>
                    <p className='item-name'>{v.address}</p>
                    <p className='item-price'>{v.price}</p>
                  </div>
                </Link>
              </li>
            ))
          }
        </ul>
      );
    }
  }
export default ListView