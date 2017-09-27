import React, { Component } from 'react';
import CartTab from './components/CartTab';
import MenuTab from "./components/MenuTab";


class App extends Component {

    constructor() {
        super();
        this.state = {
            inventory: [
                {fooditem: "Pasta Carbonara", price: 12.00},
                {fooditem: "Margherita Pizza", price: 27.00},
                {fooditem: "Mushroom Risotto", price: 16.00},
                {fooditem: "Panzenella", price: 10.00},
                {fooditem: "Bruschetta", price: 10.00},
                {fooditem: "Tiramisu", price: 6.00}
            ],
            cart: [],
            total: [{totalvalue: 0}]
        };
    }


    handleRemoveFromCart = (item) => {
        var index=-1;
        this.setState((state)=>
        {
            state.cart = this.state.cart.map((cartItem) => {
                if(cartItem.fooditem===item.fooditem)
                {
                    index= this.state.cart.indexOf(cartItem);
                }
                return cartItem;
            });
            if(index!==-1) {
                state.cart.splice(index,1);
            }
            this.updateTotal(state);
        });
        console.log(this.state.cart);

    };

    handleAddToCart = (newItem) => {
        var cartData = this.state.cart;
        var alreadyInCart = false;
        this.setState((state) => {
            if(cartData.length>0) {
                state.cart = this.state.cart.map((cartitem) => {
                    if (cartitem.fooditem===newItem.fooditem) {
                        cartitem.qty+=1;
                        alreadyInCart=true;
                    }
                    return cartitem;
                });
            }
            if(!alreadyInCart)
            {
                state.cart.push({
                    fooditem: newItem.fooditem,
                    price: newItem.price,
                    qty: 1
                });
            }
            this.updateTotal(state);
        });
        console.log(this.state.cart);
    };

    updateTotal = (state) => {
        if(state.cart.length>0) {
            console.log(state.cart+"\n"+this.state.cart.length);
            let total=0;
            state.total.totalvalue = state.cart.every((cartitem)=>
            {
                total+= (cartitem.price*cartitem.qty);
                return total;
            });
            //
            // let total = 0;
            // for (let i = 0; i < this.state.cart.length; i++) {
            //     console.log("price:"+this.state.cart[i]["price"]);
            //     total += this.state.cart[i].price * this.state.cart[i].qty;
            // }
            console.log("total amount: "+total);
            state.total.totalvalue = total;
        }
        else
        {
            state.total.totalvalue = 0;
        }
    };

    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="row justify-content-md-center">
                                <div className="panel panel-primary">
                                    <div className="panel-body">
                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div className="panel-heading">
                                                <MenuTab
                                                    inventory={this.state.inventory}
                                                    handleAddToCart={this.handleAddToCart}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div className="panel-heading">
                                                <CartTab
                                                    cart={this.state.cart}
                                                    handleRemoveFromCart={this.handleRemoveFromCart}
                                                    total={this.state.total}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
