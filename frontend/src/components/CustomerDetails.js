import React, { Component } from 'react';
import axios from 'axios'

export default class CustomerDetails extends Component {
  constructor(props){
    super(props);

    this.state={
        post:{}
    };
  }

  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/customer/getone/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          post:res.data.post
        });

        console.log(this.state.post);
      }
    });
  }

  render() {

    const {Fname,Lname,Pnumber,JoinDate,Point,type} = this.state.post;
    return (
      <div style={{marginTop:'20px'}}>
        <h4>{Fname}</h4>
        <hr/>


        <dl className="row">
          <dt className="col-sm-3">Last Name</dt>
          <dd className="col-sm-9">{Lname}</dd>

          <dt className="col-sm-3">Phone Number</dt>
          <dd className="col-sm-9">{Pnumber}</dd>

          <dt className="col-sm-3">Join Date</dt>
          <dd className="col-sm-9">{JoinDate}</dd>

          <dt className="col-sm-3">Point</dt>
          <dd className="col-sm-9">{Point}</dd>

          <dt className="col-sm-3">Type</dt>
          <dd className="col-sm-9">
            {type}
            </dd>
        </dl>
      </div>
    )
  }
}