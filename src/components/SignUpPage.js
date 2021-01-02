import React from 'react';
import '../index.css';
import Header from '../components/Header';


class SignUpPage extends React.Component {
  


  componentDidMount(){
  }


  delete = (e) => {


  }



  render(){
    return(
      <div>
        <Header/>

        <div className="row m-0" style={{padding:"350px 800px"} } >   
            <div className="col-md-12"  style={{textAlign:"left"}}>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Fullname</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelpte" style={{}}/>
                        <div id="emailHelp" className="form-text"></div>
                        </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{}}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"style={{}} />
                        </div>
                        <div> 
                        <a href="/login">Login account</a>
                        </div>
                    <button type="submit" className="btn btn-primary" style={{marginTop:"10px"}}>Submit</button>
                </form> 


            </div>

        </div>
    
  </div>
      )
  }
}

export default SignUpPage;