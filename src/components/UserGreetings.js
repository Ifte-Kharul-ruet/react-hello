import React, { Component } from 'react'
import GreetChild from './GreetChild'

class UserGreetings extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : false
      }
      this.greedButton = this.greedButton.bind(this)
    }
    greedButton(){
        this.setState({
            isLoggedIn:true
        })
    }

    
  render() {
   return (
    this.state.isLoggedIn?
    <div>Welcome GT</div> :
    <div>Welcome Guest</div>
   )
    // if(this.state.isLoggedIn){
    //     return (
    //         <div>
    //             Welcome Tamim
    //         </div>
    //     )
    // }else{
    //     return (
    //         <div>
              
    //           <h1>Welcome Guest</h1>
    //         </div>
    //       )
    // }

    // let message

    // if(this.state.isLoggedIn){
    //     message = <div>Welcome Tamim</div>
    // }else{
    //     message = <div>
    //         Welcome Guest
    //     </div>
    // }
    // return (
    //     <div>
    //          {message}
    //          <GreetChild greedB = {this.greedButton} />
    //     </div>
       
    // )
    
  }
}

export default UserGreetings
