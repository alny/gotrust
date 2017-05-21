import React, { Component } from 'react'
import actions from '../../actions'
import  { Link } from 'react-router'
import { connect } from 'react-redux'
import { TextUtils } from '../../utils'

class Home extends Component {
  constructor(){
    super()
    this.state = {
      facebook: {
        url: ''
      },
      badDisplay: 'none',
      goodDisplay: 'none',
      name: '',
      isDisabled: false
    }
  }
  disabled(event){
    event.preventDefault()
    this.setState({
      isDisabled: false,
      badDisplay: 'none',
      goodDisplay: 'none'
    })
  }

  updateURL(event){
    event.preventDefault()
    let updated = Object.assign({}, this.state.facebook.url)
    updated[event.target.id] = event.target.value
    this.setState({
      facebook: updated
    })
  }

  submitURL(event){
      if(this.state.facebook.url.length == 0){
        toastr.warning('Please Insert a Link')
        return
      }

      if(this.state.facebook.url.includes("steamcommunity.com/") == true){
        event.preventDefault()
        console.log(JSON.stringify(this.state.facebook.url))
        var uId = TextUtils.getFacebookID(this.state.facebook.url)
        this.props.checkSteam(uId)
        .then(response => {

          if(response.result != null){
            this.setState({
              goodDisplay: 'block',
              badDisplay: 'none',
              isDisabled: true,
              name: (response.result.name == null) ? null : response.result.name
            })
          } else {
            this.setState({
              badDisplay: 'block',
              goodDisplay: 'none',
              isDisabled: true
            })
          }
          console.log(JSON.stringify(response))
        })
        console.log(JSON.stringify(uId))
      }

      if(this.state.facebook.url.includes("facebook.com/") == true){
        event.preventDefault()
        console.log(JSON.stringify(this.state.facebook.url))
        var uId = TextUtils.getFacebookID(this.state.facebook.url)
        this.props.checkFacebook(uId)
        .then(response => {

          if(response.result != null){
            this.setState({
              goodDisplay: 'block',
              badDisplay: 'none',
              isDisabled: true,
              name: (response.result.name == null) ? null : response.result.name
            })
          } else {
            this.setState({
              badDisplay: 'block',
              goodDisplay: 'none',
              isDisabled: true
            })
          }
          console.log(JSON.stringify(response))
        })
        console.log(JSON.stringify(uId))
      }

  }

  componentDidMount(){

  }

  render(){
    return(
    <div>
      <div className="bodyGradient">

        <Link to={'/'}><img className="logo-img" src="images/logo_ny.png" alt=""/></Link>

        <div className="main">
          <div className="container" style={{marginTop: '120px'}}>
          <Link to={'/verify'}><button className="btn btn-primary fixed-verify">Bliv Verificeret</button></Link>
            <Link to={'/list'}><button className="btn btn-primary fixed-anmeld">MM Liste</button></Link>

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
              <div className="main-logo">
                <span className="logo">GoTrust - Stay True</span>
              </div>
              <p>Tjek om du handler med en troværdig person eller MM.</p>
            </div>
          </div>
        </div>
        <div id="searchContainer" className="secondaryHeader">
          <div className="container">

              <div className="input-group">
                <input onChange={this.updateURL.bind(this)} autoCapitalize="off" autoCorrect="off" className="form-control" id="url" maxLength="255" name="Account" placeholder="Indsæt Facebook eller Steam Link..." spellCheck="false" type="email"/>
                <span className="input-group-btn">
              <button style={{backgroundColor: '#514e46'}} onClick={this.submitURL.bind(this)} className="btn btn-primary btn-lg" disabled={this.state.isDisabled} type="submit" id="searchPwnage">Verify</button>
              {(this.state.isDisabled == false) ? null :
                <button onClick={this.disabled.bind(this)} style={{marginLeft: '5px', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px', fontSize: '18px'}} className="btn btn-primary btn-lg" type="submit" id="searchPwnage">Ny søgning</button>
              }

                </span>
              </div>


          </div>
        </div>
      </div>


      <div id="invalidAccount" className="pwnedSearchResult pwnedRow panel-collapse" style={{display: this.state.badDisplay}}>
        <div className="container">
          <div className="row pwnResultBanner">
          <div className="pwnTitle">
            <h2>
              Ikke verficeret — Brug din sunde fornuft og vær kritisk når du handler med denne bruger!
              </h2>
            <p id="pwnCount">Hvis handlen er over 500.00 kr, vil vi råde dig til at bruge en af de mange MM's fra vores liste.</p>
          </div>
          <p className="actionsBar text-center">
          <a href="#" className="pwnResultLink notifyOfPwning"><i className="fa fa-check-circle" aria-hidden="true"></i>Tryk her for at blive Verificeret</a>
          </p>
          <p className="socialLinks">
          <a className="socialLink" href="#"><i className="fa fa-facebook-square fa-3x"></i></a>
          <a className="socialLink" href="#"><i className="fa fa-twitter-square fa-3x"></i></a>
          </p>
          </div>
        </div>
      </div>
      <div id="noPwnage" className="pwnedSearchResult panel-collapse" style={{display: this.state.goodDisplay}}>
        <div className="container">
          <div className="row pwnResultBanner">
            <div className="pwnTitle">
              <h2>Gode Nyheder &mdash; {this.state.name} er verficeret!</h2>
              <p>
                Du kan derfor trygt handle med personen.
              </p>
            </div>
            <p className="actionsBar text-center">
              <a href="#" className="pwnResultLink notifyOfPwning"><i className="fa fa-envelope fa-lg"></i> Notify me when I get pwned</a>
              <a href="#" className="pwnResultLink"><i className="fa fa-bitcoin fa-lg"></i><i className="fa fa-paypal fa-lg payPalLogo"></i> Donate</a>
            </p>
            <p className="socialLinks">
              <a className="socialLink" href="#"><i className="fa fa-facebook-square fa-3x"></i></a>
              <a className="socialLink" href="#"><i className="fa fa-twitter-square fa-3x"></i></a>
            </p>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row pwnedSummaryRow">
          <div className="col-sm-3"><span className="pwnSummaryCount">46</span><br/>Verficerede MM's</div>
          <div className="col-sm-3"><span className="pwnSummaryCount">214</span><br/>Verficerede brugere</div>
          <div className="col-sm-3"><span className="pwnSummaryCount">334</span><br/>Antal anmeldelser</div>
          <div className="col-sm-3"><span className="pwnSummaryCount">65</span><br/>Scammere</div>
        </div>
        <hr/>
        <div className="row">
          <h3>Top MM's:</h3>
          <div className="row pwnedCompanyList">
            <a href="#">
              <span className="pwnLogoContainer"><img className="pwnLogo tiny" src="#" alt=""/></span>
              <span className="pwnCount">593,427,119</span>
              <span className="pwnCompany">
          <i className="pwnCompanyName">Exploit.In</i> accounts
          <i className="fa fa-question-circle-o sensitive" title=""></i>
          </span>
            </a>

            <br/>
          </div>

          <p><Link to={'/list'} className="btn btn-primary" href="#" id="viewAllBreaches">Se hele listen</Link></p>
        </div>
      </div>
    </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    middleman: state.middleman.all
  }
}

const dispatchToProps = (dispatch) => {
  return {
    checkSteam: (id, params) => dispatch(actions.checkSteam(id, params)),
    checkFacebook: (id, params) => dispatch(actions.checkFacebook(id, params))

  }
}

export default connect(stateToProps, dispatchToProps)(Home)
