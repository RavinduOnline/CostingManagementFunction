import React, { Component } from 'react';
import axios from 'axios'; 
import companyLogo from '../Images/logo_[Black Edition]_ICO.png';




class PostDetails extends Component {
    constructor (props){
        super(props);
        this.state={
            post:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`/costing/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });
            }
            console.log(this.state.post);
        });
    }
    render() {

            const{name,yearAndmonth,cost_LKR,type,createdAt,updatedAt}=this.state.post;

        return (
            <div>

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


            <div className="CostDetailsCont">
                <br/>
                <h1 className="addUpTitle" id="costDtailsTitle">COST DETAILS</h1> 
                <label>Name </label>
                 <input className="form-control" id="detailInput" value={name} readOnly/>
                
                <label>Year & Month</label>
                <input className="form-control" id="detailInput" value={yearAndmonth} readOnly/>
                <label>Cost (LKR)</label>
                <input className="form-control"  id="detailInput" value={cost_LKR} readOnly/>
                <label>Cost Type</label>
                <input className="form-control" id="detailInput" value={type} readOnly/>
                <label>Cost Added Date</label>
                <input className="form-control" id="detailInput" value={createdAt} readOnly/>
                <label>Cost Last Updated Date </label>
                <input className="form-control" id="detailInput" value={updatedAt} readOnly/>
                <br/>

                <div className="CosDeteBackButDiv">
                    <a href="/costing">
                        <button id="CosDeteBackBut"  className="btn btn-secondary"> <i class="fas fa-chevron-left">
                    </i> &nbsp;BACK</button> 
                    </a>
                </div>

                <br/>


            </div>
            </div>
        );
    }
}

export default PostDetails;