import React, { Component } from 'react';
import axios from 'axios'; 
import companyLogo from '../Images/logo_[Black Edition]_ICO.png';
import CostAddImg from '../Images/Costing Add Icon.png';



class CostingManage extends Component {

            constructor (props){
              super(props);
          
              this.state={
                posts:[]
              };
            }

            componentDidMount(){
              this.retrievePosts();
            }

            retrievePosts(){
              axios.get("/costing")
                    .then(res =>{
                      if(res.data.success){
                        this.setState({
                          posts:res.data.existingPosts
                        });
                        console.log(this.state.posts);
                      }

                    });
                    
            }



            onDelete = (id) =>{
              axios.delete(`/costing/delete/${id}`)
              .then((res) =>{
                alert("Delete Successfully");
                this.retrievePosts();
              })
            }

       /*--------------------------------- ADD Cost POPUP Fu Start -----------------------------*/


                      handleInputChange = (e) =>{
                      const {name,value} = e.target;

                      this.setState({
                        ...this.state,
                        [name]:value
                      })

                      }

                      onSubmit = (e) =>{
                      e.preventDefault();

                      const {name,yearAndmonth,cost_LKR,type} = this.state;

                      const data ={
                        name:name,
                        yearAndmonth:yearAndmonth,
                        cost_LKR:cost_LKR,
                        type:type
                      }

                      console.log(data)

                      axios.post("/costing/save",data).then((res) =>{
                        if(res.data.success){
                          window.location.replace('/costing');

                          this.setState(
                            {
                              name:"",
                              yearAndmonth:"",
                              cost_LKR:"",
                              type:"",
                            }
                          )
                        }
                      })
                      }

        /*--------------------------------- ADD Cost POPUP Fu End -----------------------------*/






  render() {

    return (
      <div className="containerHome">


{/*--------------------------------- Nav Bar Start-----------------------------*/}


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
{/*--------------------------------- Nav Bar End-----------------------------*/}


             {/*--------------------------------- ADD Cost POPUP Start -----------------------------*/}
                <div className="container">

                  {/* Modal */}
                  <div className="modal fade" id="addCostPop" role="dialog">
                    <div className="modal-dialog">
                    
                      {/* Modal content */}
                      <div className="modal-content">
                        <div className="addCosPopcloseBtn">
                          <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">

                          <div>
                               <img className="addCostImg" src={CostAddImg} alt="Add Costing"/>
                          </div>

                          <h4 className="addCostTitle">Add Cost</h4>
                                <br/>



           <form className="needs-validation" noValidate>
                <div className="form-group" style={{marginBottom:'15px'}}>
                  <label style={{marginBottom:'5px'}}>Name</label>
                  <input type="text"
                  className="form-control"
                  name="name"
                  placeholder="Enter Name"
                  value={this.state.name}
                  onChange={this.handleInputChange}/>
                </div>
    
                <div className="form-group" style={{marginBottom:'15px'}}>
                  <label style={{marginBottom:'5px'}}>Year & Month</label>
                  <input type="month"
                  className="form-control"
                  name="yearAndmonth"
                  value={this.state.yearAndmonth}
                  onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                  <label style={{marginBottom:'5px'}}>Cost (LKR)</label>
                  <input type="number"
                  className="form-control"
                  name="cost_LKR"
                  placeholder="Enter Cost (ex: 1200.00)"
                  value={this.state.cost_LKR}
                  onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                  <label style={{marginBottom:'5px'}}>Select Cost Type</label>
                   <select className="form-control" name="type" 
                      value={this.state.type}
                      onChange={this.handleInputChange}>
                        <option value="" selected disabled hidden>Choose Type</option>
                        <option value="Monthly Utilities">Monthly Utilities</option>
                        <option value="Telecom">Telecom</option>
                        <option value="Insurance">Insurance</option>
                        <option value="Leasing and Finance">Leasing and Finance</option>
                        <option value="Charity and Donations">Charity and Donations</option>
                        <option value="Other">Other</option>
                   </select>
                </div>

    
                <button className="btn btn-success" id="CostaddBtn" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                  <i className="far fa-check-square"></i>
                  &nbsp; Add &nbsp;
                </button>
           </form>

                        </div>
                        
                      </div>
                      
                    </div>
                  </div>
                  
                </div>
                {/*--------------------------------- ADD Cost POPUP End -----------------------------*/}


          
          <button className = "addCosBtn" type="button" data-toggle="modal" data-target="#addCostPop">
          <i class="fas fa-plus-circle"></i> &nbsp; ADD NEW COST</button>

         
{/*--------------------------------- Costing Table Start-----------------------------*/}


  <div id="TitleContainer1">
     <h1 id="TitleOfFunction">COSTING</h1>
  </div>

          <table className="tableFoodItem">
            <thead>
              <tr>
                <th style={{borderTopLeftRadius:'10px'}} scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Year & Month</th>
                <th scope="col">Cost (LKR)</th>
                <th scope="col">Type</th>
                <th style={{borderTopRightRadius:'1px'}} scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map((posts,index) =>(
                <tr key={index}>
                  <td id="costingID" scope="row">{index+1}
                  </td>

                  <td id="foddItem_th_name"><a href={`/costing/details/${posts._id}`} style={{textDecoration:'none'}}>{posts.name}</a></td>
                  <td>{posts.yearAndmonth}</td>
                  <td>Rs.{posts.cost_LKR}</td>
                  <td>{posts.type}</td>
                  <td>
                    <a className="btn btn-warning" id="editBtn" href={`/costing/edit/${posts._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp;
                    <a className="btn btn-danger" id="deletetBtn" onClick={() =>this.onDelete(posts._id)}>
                      <i className="fas fa-trash-alt"></i>&nbsp;Delete   
                    </a>
                  </td>
                </tr>


              ))}
            </tbody>


            
          </table>


          {/*--------------------------------- Costing Table End-----------------------------*/}


        </div>
      )
  }


  }



export default CostingManage;