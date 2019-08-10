import React,{Component} from 'react'
import {fakeApi} from '../fakeApi'

class DetailView extends Component {
    state = {
      data: {}
    }
    componentWillMount() {
      // console.log(this.props.match.params.id)
      var id = this.props.match.params.id
      fakeApi.getDetail(id, (data) => {
        this.setState({
          data: data ? data : {}
        })
      })
    }
    onAddToShoppingCar(id) {
      fakeApi.add(id, () => {
        this.props.history.push('/shopping_car')//相当于link
      })
      // console.log(id)
    }
    render() {
      // console.log(this.props)
      const { data } = this.state
      return (
        <div className='detail-view'>
          <img className='detail-img' src={data.img} alt="" />
          <h4 className='detail-name'>{data.name}</h4>
          <p className='detail-price'>{data.price}</p>
          <div className='bottom-bar'>
            <button className='buttom-button' onClick={() => this.onAddToShoppingCar(data.id)}>加入购物车</button>
            <button className='buttom-button' id='buynow'>立即购买</button>
          </div>
        </div>
      );
    }
  }
export default DetailView