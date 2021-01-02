import React from 'react';
import '../index.css';


class Header extends React.Component {
   


  componentDidMount(){
  }


  delete = (e) => {


  }



  render(){
    return(
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{padding:"20px 400px"}}>
            <div className="container-fluid">
              <a className="navbar-brand" href="/">HOME</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                </ul>
                  {/* dropdown */}
                  <div className="btn-group">
                    
                    {/* <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    
                    </button> */}
                    <i className="fas fa-user" data-bs-toggle="dropdown"></i>
                    <ul className="dropdown-menu" style={{marginLeft:"-170px"}}>
                      <li><a className="dropdown-item" href="/login">login</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                  </div>
              </div>
            </div>
          </nav>
                    
        </div>
      )
  }
}

export default Header;