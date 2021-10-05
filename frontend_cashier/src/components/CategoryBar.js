import React, { Component } from 'react';
import dessert from '../Icons/dessert.png';
import foods from '../Icons/foods.png';
import drink from '../Icons/drink.png';
import snack from '../Icons/snack.png';
import package1 from '../Icons/package.png';

export default class CategoryBar extends Component {





        openNavFoods() {
            document.getElementById("FoodsBar_Container").style.width= "65px"
            console.log('Clicked!!!!')
        }
        closeNav() {
            document.getElementById("FoodsBar_Container").style.width = "0"
            console.log('Clicked!!!!')
          }


        openNavDrinks() {
          document.getElementById("DrinksBar_Container").style.width = "65px"
          console.log('Clicked!!!!')
        }


        openNavSnacks() {
          document.getElementById("SnacksBar_Container").style.width = "65px"
          console.log('Clicked!!!!')
        }


        openNavDessert() {
          document.getElementById("DessertBar_Container").style.width = "65px"
          console.log('Clicked!!!!')
        }
        


        openNavPackages() {
          document.getElementById("PackagesBar_Container").style.width = "65px"
        }
        
        closeNav() {
          document.getElementById("PackagesBar_Container").style.width = "0px"
        }








    
    render() {
    return (


        <div>




             <div className="categoryBar_Container">

                <div className="categoryDetails">
                    <div>
                        <button onClick={this.openNavFoods}></button>
                        <h1>Foods</h1>
                    </div>
                    <div>
                        <button onClick={this.openNavDrinks}><img alt="Drinks" src={drink}></img></button>
                        <h1>Drinks</h1>
                    </div>
                    <div>
                        <button onClick={this.openNavSnacks}><img alt="Snacks" src={snack}></img></button>
                        <h1>Snacks</h1>
                    </div>
                    <div>
                        <button onClick={this.openNavDessert}><img alt="Dessert" src={dessert}></img></button>
                        <h1>Dessert</h1>
                    </div>
                    <div>
                        <button onClick={this.openNavPackages}><img alt="Packages" src={package1}></img></button>
                        <h1>Packages</h1>
                    </div>
                    
                </div>

            </div> 



















            {/*---------------- For Foods Button ----------------------*/}
            <div id="FoodsBar_Container" className="subContainer">
                <a  className="closebtn" href="javascript:void(0)" onClick={this.closeNav}>X</a>


                    <div>
                        <button><img alt="Foods" src={foods}></img></button>
                        <h1>Foods</h1>
                    </div>
                    <div>
                        <button><img alt="Drinks" src={drink}></img></button>
                        <h1>Drinks</h1>
                    </div>
                    <div>
                        <button><img alt="Snacks" src={snack}></img></button>
                        <h1>Snacks</h1>
                    </div>
                    <div>
                        <button><img alt="Dessert" src={dessert}></img></button>
                        <h1>Dessert</h1>
                    </div>
                    <div>
                        <button><img alt="Packages" src={package1}></img></button>
                        <h1>Packages</h1>
                    </div>
                    

            </div>







            {/* -------------------For Drinks Button-------------------------- */}
            <div id="DrinksBar_Container" className="subContainer">
                <a href="!#" className="closebtn" onClick={this.closeNav}>×</a>


                    <div>
                        <button><img alt="Foods" src={foods}></img></button>
                        <h1>Foods</h1>
                    </div>
                    <div>
                        <button><img alt="Drinks" src={drink}></img></button>
                        <h1>Drinks</h1>
                    </div>
                    <div>
                        <button><img alt="Snacks" src={snack}></img></button>
                        <h1>Snacks</h1>
                    </div>
                    <div>
                        <button><img alt="Dessert" src={dessert}></img></button>
                        <h1>Dessert</h1>
                    </div>
                    <div>
                        <button><img alt="Packages" src={package1}></img></button>
                        <h1>Packages</h1>
                    </div>
                    

            </div>








            {/* -------------------For Snacks Button-------------------------- */}
            <div id="SnacksBar_Container" className="subContainer">
                <a href="!#" className="closebtn" onClick={this.closeNav}>×</a>

                    <div>
                        <button><img alt="Foods" src={foods}></img></button>
                        <h1>Foods</h1>
                    </div>
                    <div>
                        <button><img alt="Drinks" src={drink}></img></button>
                        <h1>Drinks</h1>
                    </div>
                    <div>
                        <button><img alt="Snacks" src={snack}></img></button>
                        <h1>Snacks</h1>
                    </div>
                    <div>
                        <button><img alt="Dessert" src={dessert}></img></button>
                        <h1>Dessert</h1>
                    </div>
                    <div>
                        <button><img alt="Packages" src={package1}></img></button>
                        <h1>Packages</h1>
                    </div>
                    

            </div>







            {/* -------------------For Dessert Button-------------------------- */}
            <div id="DessertBar_Container" className="subContainer">
                <a href="!#" className="closebtn" onClick={this.closeNav}>×</a>

                    <div>
                        <button><img alt="Foods" src={foods}></img></button>
                        <h1>Foods</h1>
                    </div>
                    <div>
                        <button><img alt="Drinks" src={drink}></img></button>
                        <h1>Drinks</h1>
                    </div>
                    <div>
                        <button><img alt="Snacks" src={snack}></img></button>
                        <h1>Snacks</h1>
                    </div>
                    <div>
                        <button><img alt="Dessert" src={dessert}></img></button>
                        <h1>Dessert</h1>
                    </div>
                    <div>
                        <button><img alt="Packages" src={package1}></img></button>
                        <h1>Packages</h1>
                    </div>
                    

            </div>






            {/* -------------------For Packages Button-------------------------- */}
            <div id="PackagesBar_Container" className="subContainer">
                <a href="!#" className="closebtn" onClick={this.closeNav}>×</a>

                    <div>
                        <button><img alt="Foods" src={foods}></img></button>
                        <h1>Foods</h1>
                    </div>
                    <div>
                        <button><img alt="Drinks" src={drink}></img></button>
                        <h1>Drinks</h1>
                    </div>
                    <div>
                        <button><img alt="Snacks" src={snack}></img></button>
                        <h1>Snacks</h1>
                    </div>
                    <div>
                        <button><img alt="Dessert" src={dessert}></img></button>
                        <h1>Dessert</h1>
                    </div>
                    <div>
                        <button><img alt="Packages" src={package1}></img></button>
                        <h1>Packages</h1>
                    </div>
                    

            </div>




        </div>

        

    )
  }
}