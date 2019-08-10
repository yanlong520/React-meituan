import React, { Component } from 'react'
import { Route } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <Route
        path="/"
        children={(routerProps) => {
          var isRenderButton = routerProps.location.pathname === "/" ? false : true
          var pathname = routerProps.location.pathname
          var str = (pathname.split('/')[1] === '') ? '/' : '/' + pathname.split('/')[1]
          console.log(str)
          var pageName = ''
          switch (str) {
            case '/':
              pageName = "首页"
              break;
            case '/shopping_car':
              pageName = "购物车"
              break;
            case '/detail':
              pageName = "商品详情"
              break;
            case '/out':
              pageName = "请稍等，页面跳转中......"
              break;
            default:
              pageName = "页面不存在"
              break;
          }
          return (
            <div className="nav">
              {
                isRenderButton ? (
                  <button className="goback" onClick={routerProps.history.goBack}>{"<"}</button>
                ) : ""
              }
              <p className="page-title">{pageName}</p>
            </div>
          )
        }}
      ></Route>
    )
  }
}
export default Nav