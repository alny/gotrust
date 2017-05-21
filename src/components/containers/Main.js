import React, { Component } from 'react'

class Main extends Component {

  render(){
    return(
      <div>
          <div>
              {this.props.children}
          </div>
      </div>
    )
  }
}

export default Main
