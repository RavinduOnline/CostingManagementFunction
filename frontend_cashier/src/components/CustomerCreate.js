import React, { Component } from 'react'
import axios from 'axios'
import companyLogo from './logo_[Black Edition]_ICO.png';

export default class CustomerCreate extends Component {

  constructor(props){
    super(props);
    this.state={
      Fname:"",
      Lname:"",
      Pnumber:"",
      JoinDate:"",
      Point:"",
      type:""
    }
  }

  handleInputChange = (e) =>{
    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })

  }

  onSubmit = (e) =>{
    e.preventDefault();

    const {Fname,Lname,Pnumber,JoinDate,Point,type} = this.state;

    const data ={
      Fname:Fname,
      Lname:Lname,
      Pnumber:Pnumber,
      JoinDate:JoinDate,
      Point:Point,
      type:type
    }

    console.log(data)

    axios.post("/customer/save",data).then((res) =>{
      if(res.data.success){
        alert("Customer Added")
        window.location.replace('/');
        this.setState(
          {
            Fname:"",
            Lname:"",
            Pnumber:"",
            JoinDate:"",
            Point:"",
            type:""
          }
        )
      }
    })
  }


  render(){
    return(



      <div>



          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
  
                  <a className="navbar-brand" href="/" style={{color:"green"}}><img src={companyLogo} alt="logo"/></a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
   
  
              </div>
          </nav>



      <div className="display">



      <div className="col-md-8 mt-4 mx-auto" id="adduser">
        <h1 className-="h3 mb-3 font-weight-normal">Add New Customer</h1>
          <form className="needs-validation" noValidate>
            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>First Name</label>
              <input type="text"
              className="form-control"
              name="Fname"
              placeholder="Enter First Name"
              value={this.state.Fname}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Last Name</label>
              <input type="text"
              className="form-control"
              name="Lname"
              placeholder="Enter Last Name"
              value={this.state.Lname}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Phone Number</label>
              <input type="text"
              className="form-control"
              name="Pnumber"
              placeholder="Enter Phone Number"
              value={this.state.Pnumber}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Join Date</label>
              <input type="text"
              className="form-control"
              name="JoinDate"
              placeholder="Enter Join Date"
              value={this.state.JoinDate}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Point</label>
              <input type="text"
              className="form-control"
              name="Point"
              placeholder="Points"
              value={this.state.Point}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Type</label>
              <input type="text"
              className="form-control"
              name="type"
              placeholder="Enter Type"
              value={this.state.type}
              onChange={this.handleInputChange}/>
            </div>

            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Add Customer
            </button>
          </form>
      </div>
      </div>

  </div>

    )
  }
}