import React,{Component}  from 'react'
import {Link} from 'react-router-dom'
import {fakeApi} from '../fakeApi'

class ShoppingCarView extends Component {
    state = {
      data: []
    }
    componentWillMount() {
      fakeApi.getShoppingCar((data) => {
        // console.log(data)
        this.setState({ data: data })
      })
    }
    render() {
      const { data } = this.state
      return (
        <ul className='shopping-view'>
          {
            data.map((v, k) => (
              <Link to={`/detail/${v.id}`} key={v.id + k}>
                <li className='shopping-item'>
                  <img src={v.img} className='item-img' alt="" />
                  <div className='item-wrap'>
                    <p className='item-name'>{v.name}</p>
                    <p className='item-price'>{v.price}</p>
                  </div>
                </li>
              </Link>
            ))
          }
        </ul>
      )
    }
  }

  export default ShoppingCarView