import React from 'react';
import '../index.css';
import axios from 'axios';



class Post extends React.Component {
  componentDidMount(){
  }



  deletePost = async (e) => {
    e.preventDefault();
    const data = {
      id : this.props.post._id
    }
    await axios.delete('https://i3s1fysq31.execute-api.ap-southeast-1.amazonaws.com/dev/', {
      headers: data
     })

     window.location.href = '/'

}



  render(){
    return(
        <div>
          
          <div className='p-5' style={{backgroundColor:"#c6dbda",borderRadius: "10px",marginTop:"30px"}}>
                   
            <div className='col-md-12' style={{textAlign:'left'}} > 
            
            <h3 style={{fontFamily:"PoppinsSemiBold"}}>
            <i className="fas fa-user" style={{marginRight:"20px"}}>

            </i>
              {this.props.post.name}
            </h3>
              
            </div>
            <div className='col-md-12 mt-3'> 
            <p style={{fontSize:"20px",fontFamily:"PoppinsRegular"}}>
              {this.props.post.content}
            </p>
            </div>
            <div style={{display:"flex",flexWrap:"wrap",flexDirection:"flex-end"}}>
            <form onSubmit={this.deletePost}>
                <input type="text" name="id" value={this.props.post._id} hidden/>
                <button class="btn btn-danger" onclick="return confirm('Are you sure you want to archive this post?')" type="submit">Delete</button>
            </form>
            {/* <button type="button" class="btn btn-primary" style={{marginLeft:"10px"}}>Update</button> */}
            <a href={'/update/'+ this.props.post._id} class="btn btn-primary" style={{marginLeft:"10000px !important"}}>Update</a>

            </div>
            <div className='col-md-6'> 

            </div>
            <div className='col-md-6' style={{textAlign:'left' }}> 

            </div>

          </div>


        </div>
      )
  }
}

export default Post;