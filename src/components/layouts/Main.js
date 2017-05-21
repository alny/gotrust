import React, { Component } from 'react'
import {Footer} from './index'

class Main extends Component {

  render(){
    return(
      <div>
          <div>
              {this.props.children}
          </div>
        <Footer/>
      </div>
    )
  }
}

export default Main
