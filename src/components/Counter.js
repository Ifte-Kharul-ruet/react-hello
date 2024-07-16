import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count :0
      }
    }
    increament (){
        // this.setState({count: this.state.count +1},()=>{console.log('Callback Value',this.state.count)})
        // console.log(this.state.count)

        this.setState((previousState)=>{count: previousState+1});
    }
    increamentFive(){
      this.increament();
      this.increament();
      this.increament();
      this.increament();
      this.increament();
    }
  render() {
    return (
<div>
      <div>
        Count - {this.state.count}
      </div>
      <button onClick={()=>this.increamentFive()}>Increament</button>
</div>
    )
  }
}

export default Counter
