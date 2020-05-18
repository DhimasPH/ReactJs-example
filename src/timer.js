import React, { Component } from 'react';

class Timer  extends Component{

    constructor(props){
      super(props)
      this.state = {
        time : props.start
      }
    }
  
    //Lifecycle
    componentDidMount(){
      this.addInterval = setInterval(() => this.increase(),1000)
    }
  
    componentWillMount(){
      clearInterval(this.addInterval)
    }
  
    increase(){
  
      // update time per detik
      this.setState((state) => ({
        time : parseInt(state.time) + 1
      }))
  
    }
  
    render(){
      return(
      <div>{this.state.time} Detik</div>
      );
    }
  }

  export default Timer;