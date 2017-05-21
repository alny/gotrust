<div id="noPwnage" className="pwnedSearchResult panel-collapse  collapse">
  <div className="container">
    <div className="row pwnResultBanner">
      <div className="pwnTitle">
        <h2>Good news &mdash; no pwnage found!</h2>
        <p>
          No <a href="/FAQs#DataSource">breached accounts</a>
          <span id="noPastesFound">and no <a href="/FAQs#Pastes">pastes</a> (<a href="/NotifyMe" className="notifyOfPwning subscribe" data-toggle="modal" data-target="#notifyMeModal" data-remote="false">subscribe</a> to search sensitive breaches)</span>
        </p>
      </div>
      <p className="actionsBar text-center">
        <a href="/NotifyMe" className="pwnResultLink notifyOfPwning" data-toggle="modal" data-target="#notifyMeModal" data-remote="false"><i className="fa fa-envelope fa-lg"></i> Notify me when I get pwned</a>
        <a href="/Donate" className="pwnResultLink"><i className="fa fa-bitcoin fa-lg"></i><i className="fa fa-paypal fa-lg payPalLogo"></i> Donate</a>
      </p>
      <p className="socialLinks">
        <a className="socialLink" href="https://www.facebook.com/sharer/sharer.php?u=https%3a%2f%2fhaveibeenpwned.com"><i className="fa fa-facebook-square fa-3x"></i></a>
        <a className="socialLink" href="https://twitter.com/intent/tweet?url=https%3a%2f%2fhaveibeenpwned.com&amp;text=Good+news+%e2%80%94+I+haven%27t+been+pwned!+%40haveibeenpwned"><i className="fa fa-twitter-square fa-3x"></i></a>
      </p>
    </div>
  </div>
</div>

<div id="pwnedWebsiteBanner" className="pwnedSearchResult pwnedRow panel-collapse collapse">
<div className="container">
<div className="row pwnResultBanner">
<div className="pwnTitle">
<h2>
Oh no — pwned!
</h2>
<p id="pwnCount"></p>
</div>
<p className="actionsBar text-center">
<a href="/NotifyMe" className="pwnResultLink notifyOfPwning" data-toggle="modal" data-target="#notifyMeModal" data-remote="false"><i className="fa fa-envelope fa-lg"></i> Notify me when I get pwned</a>
<a href="/Donate" className="pwnResultLink"><i className="fa fa-bitcoin fa-lg"></i><i className="fa fa-paypal fa-lg payPalLogo"></i> Donate</a>
</p>
<p className="socialLinks">
<a className="socialLink" href="https://www.facebook.com/sharer/sharer.php?u=https%3a%2f%2fhaveibeenpwned.com"><i className="fa fa-facebook-square fa-3x"></i></a>
<a className="socialLink" href="https://twitter.com/intent/tweet?url=https%3a%2f%2fhaveibeenpwned.com&amp;text=Oh+no+%e2%80%94+I%27ve+been+pwned!+%40haveibeenpwned"><i className="fa fa-twitter-square fa-3x"></i></a>
</p>
</div>
</div>
</div>



<div>

  <header className="navbar navbar-inverse navbar-static-top">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle">
  <span className="icon-bar"></span>
  <span className="icon-bar"></span>
  <span className="icon-bar"></span>
    </button>
      </div>
      <div className="navbar-collapse collapse">
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#">Bliv Verificeret</a></li>
          <li><a href="#">Anmeld</a></li>
          <li className="dropdown ">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">MM Liste</a>
            <ul className="dropdown-menu">
              <li><a href="#">Overview</a></li>
              <li><a href="#">Latest pastes</a></li>
            </ul>
          </li>

          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Om Platformen</a>
            <ul className="dropdown-menu">
              <li><a href="/About">Who, what &amp; why</a></li>
              <li><a href="/FAQs">FAQs</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </header>
</div>


<div id="invalidAccount" class="pwnedSearchResult panel-collapse  collapse ">
<div class="container">
<div class="row pwnResultBanner">
<h2>
</h2>
</div>
</div>
</div>







<div className="bodyGradient">
  <Link to={'/'}><img style={{width: '6%', left: '46%'}} className="logo-img" src="images/lion_logo2.png" alt=""/></Link>

  <div className="main" style={{paddingTop: '180px'}}>
    <div className="container">
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
          <span style={{fontSize: '3.15em'}} className="logo">Anmeld Scammer</span>
        </div>
        <p>Her kan du anmelde en formodet Scammer, og advare andre mod personen.</p>
      </div>

    </div>
  </div>
  <div style={{height:'820px'}} id="searchContainer" className="secondaryHeader">
    <div className="container">
      <form action="/" method="post">
        <div style={{marginBottom: '30px'}} className="input-group">
          <input autoCapitalize="off" autoCorrect="off" className="form-control anmeld-input" id="email" maxLength="255" name="name" placeholder="Din Email..." spellCheck="false" type="text"/>
        </div>

        <div className="input-group">
          <input autoCapitalize="off" autoCorrect="off" className="form-control anmeld-input" id="steamid" maxLength="255" name="name" placeholder="Scammerens SteamID64..." spellCheck="false" type="text"/>
        <p className="steam-id">Find SteamID64 her: <a href="https://steamid.io"><b>https://steamid.io</b></a></p>
      </div>

        <div style={{marginTop: '10px'}} className="input-group">
          <input autoCapitalize="off" autoCorrect="off" className="form-control anmeld-input" id="facebook" maxLength="255" name="name" placeholder="Scammerens Facebook Link..." spellCheck="false" type="text"/>
      </div>

        <div style={{marginTop: '30px'}} className="input-group">
          <input autoCapitalize="off" autoCorrect="off" className="form-control anmeld-input" id="value" maxLength="255" name="name" placeholder="Beløb eller Skins du blev Scammet for..." spellCheck="false" type="text"/>
        </div>

        <div style={{marginTop: '30px'}} className="input-group">
          <input autoCapitalize="off" autoCorrect="off" className="form-control anmeld-input" id="how" maxLength="255" name="name" placeholder="Fortæl os kort hvordan du blev Scammet..." spellCheck="false" type="text"/>
        </div>

        <div style={{marginTop: '30px'}} className="input-group">
          <textarea id="evidence" className="anmeld-textarea" placeholder="Bevis materiale..." rows="4" cols="50"></textarea>
        <p style={{marginTop: '-30px'}} className="steam-id">Upload billeder til Imgur: <a href="http://imgur.com/"><b>http://imgur.com/</b></a></p>
      </div>
      </form>
      <button style={{width:'102%', borderRadius: '10px'}} className="btn btn-primary">Anmeld</button>
    </div>
  </div>
</div>
