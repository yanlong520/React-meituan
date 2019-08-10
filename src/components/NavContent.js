import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavItem } from '../fakeApi'
class NavContent extends Component {
  state = {
    data: []
  }
  componentWillMount() {
    NavItem.getItem((data) => {
      this.setState({
        data: data
      })
    })
  }
  goto(data) {
    console.log('data:-'+data)
    window.location.href = data
  }
  render() {
    const { data } = this.state
    // console.log(data)
    
    return (
      <div className="NavWontentWrap">
        <ul className="NavWrap">
          {
            data.map((v, k) => (
              //  `/out/${v.url}`  target="view-frame" 
              <Link to={'/out'} url={v.url} key={k} onClick ={()=>{this.goto(v.url)}} target="_self" >
                <li className="NavItem" key={k}>
                  <div className="NavImg">
                    <img className="NavImgImg" src={v.img} alt="1215" />
                  </div>
                  <div className="NavContent">{v.content}</div>
                </li>
              </Link>
            ))
          }


        </ul>
      </div>
    )
  }
}

export default NavContent