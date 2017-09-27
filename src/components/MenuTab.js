import React, {Component} from 'react';
import MenuItems from "./MenuItems";

class MenuTab extends Component {

    render() {
        const {inventory} = this.props;

        return (
            <div className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-md-6">
                        <h2 className="text-center">Menu</h2>
                    </div>

                </div>
                <div className="row justify-content-md-center">
                    <div className="card col-md-6">
                        <div className="card-body">
                            {
                                inventory.map((inventory,index) => {
                                    return(
                                        <MenuItems
                                            key={index}
                                            item={inventory}
                                            handleAddToCart = {this.props.handleAddToCart}
                                        />
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuTab;