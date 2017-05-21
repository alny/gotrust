import React, { Component } from 'react'
import actions from '../../actions'
import  { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { TextUtils } from '../../utils'

class List extends Component {
  constructor(){
    super()
    this.state = {

    }
  }


  componentDidMount(){
  this.props.getMiddlemen()
  }

  render(){
    return(
      <div>
        <div className="bodyGradient">
          <Link to={'/'}><img style={{width: '6%', left: '46%'}} className="logo-img" src="images/lion_logo2.png" alt=""/></Link>

          <div className="main" style={{paddingTop: '160px'}}>
            <div className="container" style={{width: '1300px'}}>
              <Link to={'/'}><button className="btn btn-primary fixed-verify">Tilbage</button></Link>

              <div className="dropdown fixed-menu">
                <button className="btn btn-primary dropdown-toggle fixed-button" type="button" data-toggle="dropdown"><i className="fa fa-bars" aria-hidden="true"></i></button>
                <ul className="dropdown-menu dropdown-menu-right">
                  <li><a href="#"><i style={{marginRight: '5px'}} className="fa fa-chevron-right" aria-hidden="true"></i> Om</a></li>
                  <li><a href="#"><i style={{marginRight: '5px'}} className="fa fa-chevron-right" aria-hidden="true"></i> MM Liste</a></li>
                  <li><a href="#"><i style={{marginRight: '5px'}} className="fa fa-chevron-right" aria-hidden="true"></i> FAQ</a></li>
                  <li><a href="#"><i style={{marginRight: '5px'}} className="fa fa-chevron-right" aria-hidden="true"></i> Kontakt</a></li>

                  <li><a href="#"><i style={{marginRight: '5px'}} className="fa fa-chevron-right" aria-hidden="true"></i> Bliv Verificeret</a></li>
                  <li><a href="#"><i style={{marginRight: '5px'}} className="fa fa-chevron-right" aria-hidden="true"></i> Anmeld Person</a></li>

                </ul>
              </div>


              <div className="row logoPanel">

                <p style={{marginBottom: '10px'}}>Her finder du alle verificerede MM's.</p>
              </div>
              <div className="row">

                    <div style={{marginTop: '-55px'}} className="col-lg-12">

                        <h2  className="page-header"></h2>

                    </div>
                    {(this.props.verify == null) ? null :
                      this.props.verify.map((oneFrag, i) => {
                        return (
                      <div key={i} style={{width: '13%'}} className="col-lg-2 col-sm-3 text-center">
                          <img style={{marginBottom: '10px'}} className="img-circle img-responsive img-center" src={oneFrag.image} alt=""/>
                          <h3 style={{fontSize: '14px'}}>{oneFrag.name}</h3>
                          <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
                      </div>
                    )
                    })
                    }

                </div>


          </div>

          </div>
        </div>

      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    verify: state.verify.allprofiles
  }
}

const dispatchToProps = (dispatch) => {
  return {
    getMiddlemen: (params) => dispatch(actions.getMiddlemen(params))
  }
}

export default connect(stateToProps, dispatchToProps)(List)
