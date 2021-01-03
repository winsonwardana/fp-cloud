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
          <nav className="navbar navbar-expand-lg navbar-light" style={{padding:"20px 400px",backgroundColor:"#c6dbda"}}>
            <div className="container-fluid">
              <a className="navbar-brand" href="/" style={{fontFamily:"PoppinsSemiBold"}}>HOME</a>

            </div>
          </nav>
                    
        </div>
      )
  }
}

export default Header;