import React, { Component} from 'react';
import axios from 'axios';
import companyLogo from '../Images/logo_[Black Edition]_ICO.png';

export default class CustomerManage extends Component {
  constructor(props){
  super(props);

  this.state={
    posts:[]
  };

  }

  componentDidMount(){
    this.retrievePosts();
  }

  retrievePosts(){
    axios.get("/customer/get").then(res =>{
      if(res.data.success){
        this.setState({
          posts:res.data.existingPosts
        });
      console.log(this.state.posts);
      }
    });
  }


  onDelete = (id) =>{
    axios.delete(`/customer/delete/${id}`).then((res) =>{
      alert("Deteted Successfully");
      this.retrievePosts();
    })
  }

  filterData(posts,searchKey){
    const result = posts.filter((post) =>
    post.Fname.toLowerCase().includes(searchKey) 
    

    )

    this.setState({posts:result})

  }

  handleSearchArea = (e) =>{
    const searchKey = e.currentTarget.value;

    axios.get("/posts").then(res =>{
      if(res.data.success){
        
        this.filterData(res.data.existingPosts,searchKey)
      }
    });
  }

  render(){
    return (
      <div className="container1" id="CusManHome">

<nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">

                  <a className="navbar-brand" href="/" style={{color:"green"}}><img src={companyLogo} alt="logo"/></a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>


                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <form className="d-flex">
                          <input id="searchNav" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleSearchArea}/>
                      </form>
                  </div>

              </div>
          </nav>


          <br/><br/>

        {/* ----------------------------Table-------------------------------- */}

        <div id="TitleContainer">
          <h1 id="TitleOfFunction">USER ACCOUNTS</h1>
        </div>

        <table className="tableFoodItem" id="tableCUS">
          
          <thead>
            <tr>
              <th id="cusMan_th" style={{borderTopLeftRadius:'10px'}} scope="col">Id</th>
              <th id="cusMan_th" scope="col">First Name</th>
              <th id="cusMan_th" scope="col">Last Name</th>
              <th id="cusMan_th" scope="col">Phone Number</th>
              <th id="cusMan_th" scope="col">Join Date</th>
              <th id="cusMan_th" scope="col">Point</th>
              <th id="cusMan_th" scope="col">Type</th>

              <th id="cusMan_th" style={{borderTopRightRadius:'1px'}} scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {this.state.posts.map((posts,index) => (
              <tr key={index}>
                <td id="cusMan_td">{index+1}</td>
                <td id="cusMan_td">
                    <a href={`/customer/details/${posts._id}`} style={{textDecoration:'none',color:'black'}}>
                        {posts.Fname}
                    </a>
                </td>    
                <td id="cusMan_td">{posts.Lname}</td>
                <td id="cusMan_td">{posts.Pnumber}</td>
                <td id="cusMan_td">{posts.JoinDate}</td>
                <td id="cusMan_td">{posts.Point}</td>
                <td id="cusMan_td">{posts.type}</td>

                <td id="cusMan_td">
                   <button type="button" className="editBtn1"><a style={{textDecoration:'none',color:'white'}} href={`/customer/edit/${posts._id}`}>Edit</a></button>
                  &nbsp;
                  <button type="button" className="deleteBtn1"><a  style={{textDecoration:'none',color:'white'}} onClick={() => this.onDelete(posts._id)}>Delete</a></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

          
      </div>
    )
  }
} 