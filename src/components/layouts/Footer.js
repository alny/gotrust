import React, { Component } from 'react'

class Footer extends Component {
  render(){
    return(
      <div>
        <footer>
          <div className="container text-center">
            <hr/>
            <p><a href="#">Social Media</a></p>
            <p>
              <a href="#"><i className="fa fa-facebook-square fa-3x"></i></a>
              <a href="#"><i className="fa fa-twitter-square fa-3x"></i></a>
              <a href="#"><i className="fa fa-steam-square"></i></a>
            </p>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer
