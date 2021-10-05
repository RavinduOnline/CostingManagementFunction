import React, { Component } from 'react';
import axios from 'axios';                       // <---------------import axios from axios method, this is used for comunicate with frontend with backend
import companyLogo from './logo_[Black Edition]_ICO.png';


export default class CashierHome extends Component {
    constructor(props){                              // <-------------- create constructor from Component class
      super(props);
  
      this.state={
        posts:[]                                     // <-------------- this.state = post[] is use for, when we request crud by using frontend then that request go to backend and do perticular calculations and it call back to here as response, so we have to catch those data using array.
      };
    }
  
  
    componentDidMount(){                             // <-------------- this method is one of react method and this is use to when our all components render to homepage or some frontend page, then this will running, this is use to call retrievePost() method after all components are render. retrievePost() method is implementing after this method you can see in down. and also you can see rendor() method on bottom
      this.retrievePost();
    }
  
  
    //create  method for retrieving data
    retrievePost(){
      axios.get("/FoodItems/get").then(res => {
        if(res.data.success){                        // <--------------- you can see success in get method of backend > routes > posts.js, go and see it!, in that point we code success=true, thats mean in here we call success and backend take it as true, then we can retrive data from backend//

          this.setState({
            posts:res.data.existingPosts             // <--------------- you can see this existingPosts key in get method of backend > routes > posts.js, we retriving data by this to here
          });
  
          console.log(this.state.posts);             // <--------------- this is implementing for just see this method working correctly or not in  browser console           
  
        }
  
      });
    }





    filterData(posts,searchKey){

      const result = posts.filter((post) =>
          post.ItemName.toLowerCase().includes(searchKey)||
          post.MCategory.toLowerCase().includes(searchKey)||
          post.SubCategory.toLowerCase().includes(searchKey)
      )
  
          this.setState({posts:result})
  
  }
  
  handleSearchArea = (e) =>{
  
      const searchKey = e.currentTarget.value;
  
      axios.get("/FoodItems/get").then(res => {
          if(res.data.success){                        // <--------------- you can see success in get method of backend > routes > posts.js, go and see it!, in that point we code success=true, thats mean in here we call success and backend take it as true, then we can retrive data from backend//
    
            this.filterData(res.data.existingPosts,searchKey)
    
          }
    
        });
  
  }









    render() {
        return (

          <div className="container1">



{/* -----------------------------------------------------------------Start of the Header -------------------------------------------------*/}
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
  
                  <a className="navbar-brand" href="/" style={{color:"green"}}><img src={companyLogo} alt="logo"/></a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
  
  
                  
  
              </div>
          </nav>
{/* -----------------------------------------------------------------End of the Header -----------------------------------------------*/}





{/* -----------------------------------------------------------------Start of the Search -----------------------------------------------*/}

          <div className="searchContainer">

              <div className="searchBox">
                <input id="searchNav" className="form-control me-2" type="search" placeholder="Search......" aria-label="Search" onChange={this.handleSearchArea}/>
              </div>

          </div>

{/* -----------------------------------------------------------------End of the search -----------------------------------------------*/}





{/* -----------------------------------------------------------------Start of the Regular Customer Button Home -----------------------------------------------*/}

          <div className="RegularCustomerBtn">
          <a href="/add" style={{textDecoration:'none',color:'white'}}><button>ADD REGULAR CUSTOMER</button></a>
          </div>
          

{/* -----------------------------------------------------------------End of the Regular Customer Button Home -----------------------------------------------*/}


  
  


  
{/* -----------------------------------------------------------------Start of the Cahier Home -----------------------------------------------*/}

          <div className="cashierContainer">

                    <div className="cashierItemBox">
                        
                        {this.state.posts.map((posts,index) => (

                            <div className="detail_box">

                                <img alt="ItemImage" className="ImgContainerH" src={posts.ItemImg}/>

                                <br/>

                              <div className="detailBox">
                                <h1>{posts.ItemName}</h1>
                                <h2>{posts.MCategory}</h2>
                                <h2>{posts.SubCategory}</h2>
                                <h2>Rs.{posts.ItemUnitPrice}/=</h2>
                              </div>

                            </div>
                        ))}
                            
                        
                    </div>

          </div>

{/* -----------------------------------------------------------------Start of the Cahier Home -----------------------------------------------*/}







{/* -----------------------------------------------------------------Start of the Cart Container -----------------------------------------------*/}

          <div className="Cart_ContainerH">

            <div className="cart_container_DataH">
                <h1>CART</h1>
            </div>

        </div>

{/* -----------------------------------------------------------------End of the Cart Container -----------------------------------------------*/}



          
        </div>
            

        )
      }

}