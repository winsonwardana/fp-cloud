import React from 'react';
import '../index.css';
import Post from '../components/Post';
import Header from '../components/Header';

import axios from 'axios'; 




class UpdatePage extends React.Component {
  constructor(){
    super()
    this.state = {
      id :  '',
      name :  '',
      content :  '',
    }

  }

  componentDidMount(){
    this.getPostDetail();
  }
  onChange = (e) =>{
    this.setState({
      [e.target.name] : e.target.value,

    })
  }

 

  updatePost = (e) => {
    e.preventDefault()

    const post = {
      id : this.state.id,
      name: this.state.name,
      major : this.state.major,
      content : this.state.content,
    }

    axios.post('https://i3s1fysq31.execute-api.ap-southeast-1.amazonaws.com/dev/update',post)
    .then(response => {

      window.location.href = '/'

      },
      error=>{

      })

  }
  getPostDetail = () => {
    axios.get('https://i3s1fysq31.execute-api.ap-southeast-1.amazonaws.com/dev/update/'+this.props.match.params.id)
    .then(response => {
      console.log(response);
      this.setState({
        id: response.data._id,
        name :  response.data.name,
        content :  response.data.content,
      })
    },
    error=>{

    })
  }



  render(){
    return(
        <div>
            <Header/>
            <div className='row m-0'>
            <div className='col-md-4' style={{paddingTop:"50px"}}>
              
              
                          
              
            </div> 
            <div className='col-md-4 mt-5'>
            <div className='row p-4' style={{backgroundColor:"#82B6D9",borderRadius: "10px",marginTop:"30px"}}>
                   
                   <div className='col-md-12' style={{textAlign:'left'}} > 
                   
                   <h3>
                   <i className="fas fa-user" >
       
                   </i>
                     {this.state.name}
                     
                     
                 </h3>
                     
                   </div>
                   <div className='col-md-12 mt-3'> 
                   {/* <input type="text" value="{this.state.content}/> */}
                   <input onChange={this.onChange} name="content" type="text" value={this.state.content} style={{width:"100%"}} placeholder="Click to edit your post" />

                   
                   </div>
                   
                   
       
                 </div>

                 <div className="col-md-12 col-2 p-0 mt-2 " style={{textAlign:"right"}}>
                  <form  onSubmit={this.updatePost}>
                    <button type="submit" className="btn btn-success">Update</button>
                  </form>
                </div>

            </div>
            <div className='col-md-4'>
              
              

            </div>
          </div>
            
        </div>
      )
  }
}

export default UpdatePage;