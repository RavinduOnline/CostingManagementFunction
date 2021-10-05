import React, { Component } from 'react'
import axios from 'axios'
import companyLogo from '../Images/logo_[Black Edition]_ICO.png';

export default class CustomerEdit extends Component {


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
    const id = this.props.match.params.id;
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

    axios.put(`/customer/update/${id}`,data).then((res) =>{
      if(res.data.success){
        alert("Updated Successfully")
        window.location.replace('/customer');
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




  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/customer/getone/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
              Fname:res.data.post.Fname,
              Lname:res.data.post.Lname,
              Pnumber:res.data.post.Pnumber,
              JoinDate:res.data.post.JoinDate,
              Point:res.data.post.Point,
              type:res.data.post.type
        });

        console.log(this.state.post);
      }
    });
  }


  render(){
    const {Fname} = this.state;

    return(

      <div className="containerHome">


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





      {/* <div className="col-md-8 mt-4 mx-auto">
        <h1 className-="h3 mb-3 font-weight-normal">Edit Customer</h1>
          <form className="needs-validation" noValidate>
            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>First Name</label>
              <input type="text"
              className="form-control"
              name="Fname"
              placeholder="Enter First name"
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
              placeholder="Enter Point"
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
              <i className="far fa-check-squre"></i>
              &nbsp; Update
            </button>
          </form>
      </div> */}



<div className = "display">
          <div className="col-md-8 mt-4 mx-auto" id="updateDis">
          <h1 className-="h3 mb-3 font-weight-normal" id ="CUSName">{Fname}</h1>
            
          <form className="needs-validation" noValidate>
            

           
            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Phone Number</label>
              <input type="text"
              className="form-control"
              name="Pnumber"
              placeholder="Enter Phone Number"
              value={this.state.Pnumber}
              onChange={this.handleInputChange}readOnly/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Join Date</label>
              <input type="text"
              className="form-control"
              name="JoinDate"
              placeholder="Enter Join Date"
              value={this.state.JoinDate}
              onChange={this.handleInputChange}readOnly/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Point</label>
              <input type="text"
              className="form-control"
              name="Point"
              placeholder="Enter Point"
              value={this.state.Point}
              onChange={this.handleInputChange}readOnly/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Type</label>
              <input type="text"
              className="form-control"
              name="type"
              placeholder="Enter Type"
              value={this.state.type}
              onChange={this.handleInputChange}readOnly/>
            </div>

            
          </form>
              <button className="btn btn-success" data-toggle="modal" data-target="#edituser"> <i className="fas fa-edit" id ="updateBtn2" ></i>&nbsp;UPDATE</button>
          </div>
          </div>






          {/*--------------------------------- UPDATE Customer POPUP -----------------------------*/}

<div className="container">

  {/* Modal */}
  <div className="modal fade" id="edituser" role="dialog">
    <div className="modal-dialog">
    
       {/* Modal content */}
      <div className="modal-content">
        <div className="closeBtn">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        <div className="modal-body">

          {/* <div className="editDisImg">
          <img src={editDiscount} alt="Edit Discount"/>
          </div> */}


<h1 className-="h3 mb-3 font-weight-normal">Edit Customer</h1>
          <form className="needs-validation" noValidate>
            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>First Name</label>
              <input type="text"
              className="form-control"
              name="Fname"
              placeholder="Enter First name"
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
              placeholder="Enter Point"
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
              <i className="far fa-check-squre"></i>
              &nbsp; Update
            </button>
          </form>

        </div>
        {/* <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div> */}
      </div>
      
    </div>
  </div>
  
</div>

{/*--------------------------------- UPDATE DISCOUNT POPUP -----------------------------*/}


      </div>
    )
  }
}