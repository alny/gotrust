import React, { Component } from 'react'
import actions from '../../actions'
import  { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { TextUtils } from '../../utils'

class Anmeld extends Component {
  constructor(){
    super()
    this.state = {
      verify: {
        name: '',
        email: '',
        steamid: '',
        facebookid: '',
        deposit: ''
      },
        hasAccepted: false,
        iAgree: false
    }
  }


  updateForm(event){
    event.preventDefault()
    let updated = Object.assign({}, this.state.verify)
    updated[event.target.id] = event.target.value
    this.setState({
      verify: updated
    })
    console.log(JSON.stringify(updated))
  }

  submitURL(event){
    event.preventDefault()
    if(this.state.verify.name.length == 0){
      toastr.warning('Please Insert a Name')
      return
    }
    if(this.state.verify.email.length == 0){
      toastr.warning('Please Insert a Email')
      return
    }


    if(this.state.verify.steamid.includes("steamcommunity.com/") == false){
      toastr.warning('Please Insert a valid Steam Link')
      return
    }

    if(this.state.verify.facebookid.includes("facebook.com/") == false){
      toastr.warning('Please Insert a valid Facebook Link')
      return
    }

    if(this.state.verify.deposit.length == 0){
      toastr.warning('Please Insert a Deposit')
      return
    }


    this.props.submitVerify(this.state.verify)
    .then(response => {
      swal({ title: "Tak for din Ansøgning",
      text: "Din ansøgning vil blive vurderet indenfor de næste 24 timer. I mellemtiden kan du sende dit depositum til vores BOT.",
      type: "success",
      showCancelButton: false,
      closeOnConfirm: false,
      showLoaderOnConfirm: true,
    },
    function(){
      setTimeout(function(){
        swal("Thanks for joining our Community");
      }, 3000);
      setTimeout(function(){
        browserHistory.push('/')
        window.location.reload('/')
      }, 2000);

    });
    })
    console.log(JSON.stringify(this.state.verify))
  }

  verifyMe(event){
    event.preventDefault()
    this.setState({
      hasAccepted: true
    })
  }


  componentDidMount(){
    setTimeout(function() {this.setState({iAgree: true});}.bind(this), 5000);
  }

  render(){

    let content = null

    if(this.state.hasAccepted == false){
      content =
      <div>
      <div className="row logoPanel">

        <p style={{marginBottom: '10px'}}>Før du kan ansøge om at blive verificeret, skal du være indforstået med disse betingelser:</p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <span className="num">1</span><h3 className="verify-h3">Alt svindel anmeldes til politiet.</h3>
          <p>Som verificeret bruger følger et ansvar.</p>
          <ul className="verify-text">
            <li>Hvis du som verificeret bruger, er involveret i svindel anmeldes det til politiet.</li>
            <li>Dit depositum vil dermed blive ophævet med øjeblikkelig virkning.</li>
            <li>Permanent udelukkelse fra GoTrust.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <span className="num">2</span><h3 className="verify-h3">Legit Facebook og Steam profil</h3>
            <p>Din Facebook og Steam profil skal være til at stole på.</p>
            <ul className="verify-text">
              <li>Vi godkender ikke nyoprettede profiler.</li>
              <li>Vores MM's og moderators vil gennemgå din profil, og tjekke om den er legit.</li>
              <li>Folk med dårligt ry godkendes ikke.</li>
            </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <span className="num">3</span><h3 className="verify-h3">Depositum er obligatorisk.</h3>
            <p>Et depositum på minimum 500.00 kr i skins/valuta er nødvendigt.</p>
            <ul className="verify-text">
              <li>Som sikkerhed for at en af parterne ikke stikker af med dine skins, er et depositum en god tryghed.</li>
              <li>Præcis som et forsikringsselskab, udligner vi dit økonomiske tab hvis svindel skulle opstå.</li>
              <li>Du kan til hver en tid kræve dit depositum tilbage.</li>
            </ul>
        </div>
        <div className="col-md-6">
          <span className="num">4</span><h3 className="verify-h3">Altid tjek GoTrust før du handler.</h3>
            <p>Dobbelt tjek altid folks profiler på GoTrust.</p>
            <ul className="verify-text">
              <li>Aldrig tjek links folk sender dig.</li>
              <li>Hvis personen du handler med ikke er verificeret, vil vi være råde dig til altid at bruge en MM.</li>
              <li>Hvis du handler med skins/penge over 1000.00 kr, er du forpligtet til at bruge en MM fra listen.</li>

            </ul>
        </div>
      </div>
      {(this.state.iAgree == false) ? null :
        <button onClick={this.verifyMe.bind(this)} style={{backgroundColor: 'rgba(43, 87, 102, 0.6)', marginLeft: '38%'}} className="btn btn-primary">Jeg er enig i overstående og vil ansøge.</button>
      }
      </div>

    }

    if(this.state.hasAccepted == true){
      content =
      <div>
      <div className="row logoPanel">

        <p>Bliv en del af et sikkert Community</p>
      </div>
      <div className="row">
        <div style={{padding: '10px 40px'}} className="main-login main-center">
        <h5 style={{marginLeft: '24%'}}>Alle felter er Obligatoriske</h5>

            <div className="form-group">
              <label htmlFor="name" className="cols-sm-2 control-label">Udfyld Navn</label>
              <div className="cols-sm-10">
                <div className="input-group">
                  <span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
                  <input onChange={this.updateForm.bind(this)} type="text" className="form-control verify-input" name="name" id="name"  placeholder="Tast dit Navn"/>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email" className="cols-sm-2 control-label">Udfyld Email</label>
              <div className="cols-sm-10">
                <div className="input-group">
                  <span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
                  <input onChange={this.updateForm.bind(this)} type="text" className="form-control verify-input" name="email" id="email"  placeholder="Tast din Email"/>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="username" className="cols-sm-2 control-label">Udfyld Steam Link</label>
              <div className="cols-sm-10">
                <div className="input-group">
                  <span className="input-group-addon"><i className="fa fa-steam-square" aria-hidden="true"></i></span>
                  <input onChange={this.updateForm.bind(this)} type="text" className="form-control verify-input" name="steam" id="steamid"  placeholder="Indsæt dit Steam Link"/>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password" className="cols-sm-2 control-label">Udfyld Facebook Link</label>
              <div className="cols-sm-10">
                <div className="input-group">
                  <span className="input-group-addon"><i className="fa fa-facebook-square" aria-hidden="true"></i></span>
                  <input onChange={this.updateForm.bind(this)} type="text" className="form-control verify-input" name="facebook" id="facebookid"  placeholder="Indsæt dit Facebook profil link"/>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="confirm" className="cols-sm-2 control-label">Udfyld Depositum</label>
              <div className="cols-sm-10">
                <div className="input-group">
                  <span className="input-group-addon"><i className="fa fa-money" aria-hidden="true"></i></span>
                  <input onChange={this.updateForm.bind(this)} type="text" className="form-control verify-input" name="confirm" id="deposit"  placeholder="Indtast skins/beløb du ligger i depositum"/>
                </div>
              </div>
            </div>

            <div className="form-group ">
              <a onClick={this.submitURL.bind(this)} href="#" target="_blank" type="button" id="button" className="btn btn-primary btn-lg btn-block login-button">Ansøg</a>
            </div>

        </div>
      </div>
      </div>
    }


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



            {content}



          </div>
        </div>
      </div>

    </div>
    )
  }
}

const stateToProps = (state) => {
  return {

  }
}

const dispatchToProps = (dispatch) => {
  return {
    submitVerify: (params) => dispatch(actions.submitVerify(params))
  }
}

export default connect(stateToProps, dispatchToProps)(Anmeld)
