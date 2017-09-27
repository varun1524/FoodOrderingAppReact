import React, {Component} from 'react';
import MenuItems from "./MenuItems";
import CartItems from "./CartItems";

class HomePage extends Component {

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
        let index=-1;
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
        let alreadyInCart = false;
        this.setState((state) => {
            if(state.cart.length>0) {
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
            state.cart.every((cartitem)=>
            {
                total+= (cartitem.price*cartitem.qty);
                return total;
            });
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
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="row justify-content-md-center">
                            <div className="panel panel-primary">
                                <div className="panel-body">
                                    <div className="col-sm-6 col-md-6 col-lg-6">
                                        <div className="panel panel-primary">
                                            <div className="panel-body">
                                                <div className="panel-heading">
                                                    <div className="container-fluid">
                                                        <div className="row justify-content-md-center">
                                                                <h2 className="text-center">Menu</h2>
                                                        </div>
                                                        <div className="row justify-content-md-center">
                                                                <div className="card-body">
                                                                    {
                                                                        this.state.inventory.map((inventory,index) => {
                                                                            return(
                                                                                <MenuItems
                                                                                key={index}
                                                                                item={inventory}
                                                                                handleAddToCart = {this.handleAddToCart}
                                                                            />
                                                                        );
                                                                    })
                                                                }
                                                                </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6">
                                        <div className="panel panel-primary">
                                            <div className="panel-body">
                                                <div className="panel-heading">
                                                    <div className="container-fluid">
                                                        <div className="row justify-content-md-center">
                                                            <h2 className="text-center">Order</h2>
                                                        </div>
                                                        <div className="row justify-content-md-center">
                                                                <div className="card-body">
                                                                    {
                                                                        this.state.cart.map((cart,index) => {
                                                                        return(
                                                                            <CartItems
                                                                                key={index}
                                                                                item={cart}
                                                                                handleRemoveFromCart = {this.handleRemoveFromCart}
                                                                            />
                                                                        );
                                                                        })
                                                                    }
                                                                </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <label className="h1 control-label">Total: {this.state.total.totalvalue}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default HomePage;