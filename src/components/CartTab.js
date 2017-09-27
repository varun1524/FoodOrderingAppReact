import React, {Component} from 'react';
import CartItems from "./CartItems";

class CartTab extends Component {

    updateTotal = () => {
        return this.props.updateTotal();
    };

    render() {

        const {cart} = this.props;
        const {total} = this.props;
        console.log("Total value is: "+ total.totalvalue);

        return (
            <div className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-md-6">
                        <h2 className="text-center">Order</h2>
                    </div>

                </div>
                <div className="row justify-content-md-center">
                    <div className="card col-md-6">
                        <div className="card-body">
                            {
                                cart.map((cart,index) => {
                                    return(
                                        <CartItems
                                            key={index}
                                            item={cart}
                                            handleRemoveFromCart = {this.props.handleRemoveFromCart}
                                        />
                                    );
                                })
                            }
                        </div>
                        <div>
                            <label>Total:
                                {this.updateTotal()}
                                {total.totalvalue}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartTab;