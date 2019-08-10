import React, { Component } from 'react'
// import { Route } from 'react-router-dom'

class OutView extends Component {
    componentWillMount() {
        console.log(this.props)
        // var id = this.props.match.params
      }
    render() {
        return (
            
            <div className="OutView"></div>
        //     <Route 
    
        //         children={(routerProps) => {
        //             console.log(routerProps)
             
        //         return(
        //             <div className="OutView">
        //             {/* <frameset cols="100,*">
        //             <frame src="http://www.baidu.com" name="view_frame"></frame>
        //         </frameset> */}
        //         </div> )
        //         }}>
       
        // </Route >
    )
    }
}

export default OutView