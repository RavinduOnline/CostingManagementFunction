import React, { Component } from 'react'
import axios from 'axios'
import companyLogo from '../Images/logo_[Black Edition]_ICO.png';
import editDiscount from '../Images/editDis.jpg';

export default class UpdateDiscount extends Component {


  constructor(props){
    super(props);
    this.state={
      discountName:"",
      minAmount:"",
      percentage:"",
      maxLimit:""
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
    const {discountName,minAmount,percentage,maxLimit} = this.state;

    const data ={
      discountName:discountName,
      minAmount:minAmount,
      percentage:percentage,
      maxLimit:maxLimit
    }

    console.log(data)

    axios.put(`/discount/update/${id}`,data).then((res) =>{
      if(res.data.success){
        // alert("Post Updated Successfully")
        window.location.replace('/discount');
        this.setState(
          {
            discountName:"",
            minAmount:"",
            percentage:"",
            maxLimit:""
          }
        )
      }
    })
  }




  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/discount/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          discountName:res.data.post.discountName,
          minAmount:res.data.post.minAmount,
          percentage:res.data.post.percentage,
          maxLimit:res.data.post.maxLimit
        });

        console.log(this.state.post);
      }
    });
  }


  render(){
    const {discountName,minAmount,percentage,maxLimit} = this.state;
    return(
      

      <div className="DiscountcontainerPopup">


        <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">

                  <a className="navbar-brand" href="/discount" style={{color:"green"}}><img src={companyLogo} alt="logo"/></a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>


                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <form className="d-flex">
                          {/* <input id="searchNav" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleSearchArea}/> */}
                      </form>
                  </div>

              </div>
          </nav>


          <br/><br/>









          {/* <div style={{marginTop:'20px'}}>
        <h4>{discountName}</h4>
        <hr/>


        <dl className="row">
          <dt className="col-sm-3">Min Amount</dt>
          <dd className="col-sm-9">{minAmount}</dd>

          <dt className="col-sm-3">Percentage</dt>
          <dd className="col-sm-9">{percentage}</dd>

          <dt className="col-sm-3">Max Limit</dt>
          <dd className="col-sm-9">{maxLimit}</dd>
        </dl>
      </div> */}





       <div className = "displayDetails">
          <div className="col-md-8 mt-4 mx-auto" id="DiscountForm">
          <h1 className-="h3 mb-3 font-weight-normal" id ="discountName">{discountName}</h1>
            
              <form className="needs-validation" noValidate>
          

                <div className="form-group" style={{marginBottom:'15px'}}>
                  <label style={{marginBottom:'5px'}}>Min Amount(Rs.)</label>
                  <input type="text"
                  className="form-control"
                  name="minAmount"
                  placeholder="Enter Min Amount"
                  value={this.state.minAmount}
                  onChange={this.handleInputChange} readOnly/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                  <label style={{marginBottom:'5px'}}>Percentage</label>
                  <input type="text"
                  className="form-control"
                  name="percentage"
                  placeholder="Enter Percentage"
                  value={this.state.percentage}
                  onChange={this.handleInputChange}readOnly/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                  <label style={{marginBottom:'5px'}}>Max Limit</label>
                  <input type="text"
                  className="form-control"
                  name="maxLimit"
                  placeholder="Enter Max Limit"
                  value={this.state.maxLimit}
                  onChange={this.handleInputChange}readOnly/>
                </div>

                {/* <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                  <i className="far fa-check-squre"></i>
                  &nbsp; UPDATE
                </button> */}
              </form>
              <button className="UPDATEBtn" data-toggle="modal" data-target="#editDisModal"> <i className="fas fa-edit" id ="updateBtn2" ></i>&nbsp;UPDATE</button>
          </div>
          </div>
      


{/*--------------------------------- UPDATE DISCOUNT POPUP -----------------------------*/}



<div className="DiscountcontainerPopup">

  {/* Modal */}
  <div className="modal fade" id="editDisModal" role="dialog">
    <div className="modal-dialog">
    
       {/* Modal content */}
      <div className="modal-content">
        <div className="addDisPopcloseBtn">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        <div className="modal-body">

          <div className="editDisImg">
          <img src={editDiscount} alt="Edit Discount"/>
          </div>


          <h4 className="addDisTitle">Update Discount</h4>

          <form className="needs-validation" noValidate>
                <div className="form-group" style={{marginBottom:'15px'}}>
                  <label style={{marginBottom:'5px'}}>Discount Name</label>
                  <input type="text"
                  className="form-control"
                  name="discountName"
                  placeholder="Enter Discount Name"
                  value={this.state.discountName}
                  onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                  <label style={{marginBottom:'5px'}}>Min Amount(Rs.)</label>
                  <input type="text"
                  className="form-control"
                  name="minAmount"
                  placeholder="Enter Min Amount"
                  value={this.state.minAmount}
                  onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                  <label style={{marginBottom:'5px'}}>Percentage</label>
                  <input type="text"
                  className="form-control"
                  name="percentage"
                  placeholder="Enter Percentage"
                  value={this.state.percentage}
                  onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                  <label style={{marginBottom:'5px'}}>Max Limit</label>
                  <input type="text"
                  className="form-control"
                  name="maxLimit"
                  placeholder="Enter Max Limit"
                  value={this.state.maxLimit}
                  onChange={this.handleInputChange}/>
                </div>

                <button className="btn btn-success" id="addBtn" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                <i className="far fa-check-square"></i>
                  &nbsp; CONFIRM
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