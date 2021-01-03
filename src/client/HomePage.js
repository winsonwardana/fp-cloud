import React from 'react';
import '../index.css';
import Header from '../components/Header';
import Post from '../components/Post';
import axios from 'axios'; 



class HomePage extends React.Component {
   


  constructor(){
    super()
    this.state = {
      posts :  [],
      content : ''
    }
  }

  onChange = (e) =>{
    this.setState({
      [e.target.name] : e.target.value,

    })
  }

  componentDidMount(){
    this.getPosts();
  }



  getPosts = () => {

    axios.get('https://i3s1fysq31.execute-api.ap-southeast-1.amazonaws.com/dev/get')
    .then(response => {
      this.setState({
        posts : response.data.reverse()
      })

    },
    error=>{

    })
  }


  createPost = async (e) => {
    e.preventDefault()
    const post = {
      name : 'Anonymous',
      content : this.state.content,
      
    }
    console.log(post)

    axios.post('https://i3s1fysq31.execute-api.ap-southeast-1.amazonaws.com/dev/insert',post)
    .then(response => {

      window.location.href = '/'

    },
    error=>{

    })
  }



  render(){
    return(
        <div>
          <Header/>

          <div className='row m-0'>
            <div className='col-md-3' style={{paddingTop:"50px",}}>
                                        
              
            </div> 
          


          <div className='col-md-6 mt-5 p-0'>
            <form onSubmit={this.createPost}> 
            
            <div className="row m-0">
              
            <div className="col-md-12 p-0" >
              <h1 style={{padding:"0px   !important",fontFamily:"PoppinsSemiBold"}}>Tempat Curhat</h1>
            </div>
                <div className="col-md-10 mt-2 p-0" >
                  <input className="form-control me-2" type="search" placeholder="Text" aria-label="Search" onChange={this.onChange} name="content"/>
                </div>
                <div className="col-md-2 mt-2">
                  <button type="submit" class="btn btn-success w-100" style={{float:"right",fontFamily:"PoppinsRegular"}}>Post</button>

                </div> 
            </div>
            </form>
          {
              this.state.posts.map( (e , index) => {
                console.log(e);
                return(
                    <React.Fragment>
                      <Post 
                          post = {e}
                      />
                    </React.Fragment>

                )
              })
              }


            </div>
            <div className='col-md-3'>
              
              

            </div>
          </div> 
          
          
          
        </div>
      )
  }
}

export default HomePage;