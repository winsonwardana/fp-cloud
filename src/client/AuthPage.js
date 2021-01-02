import React from 'react';
import './index.css';
import LoginPage from '../components/LoginPage';
import SignUpPage from '../components/SignUpPage';



class AuthPage extends React.Component {
  constructor(){
    super()

  }


  componentDidMount(){
  }


  delete = (e) => {


  }



  render(){
    return(
        <div>
          {window.location.pathname === '/login' ?
                <LoginPage />
                :
                <SignUpPage />
                }
        </div>
      )
  }
}

export default AuthPage;
