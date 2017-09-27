import React, {Component} from 'react';


class MenuItems extends Component {

    handleAddToCart = (item) => {
        this.props.handleAddToCart(item)
    };

    render() {

        const {item} = this.props;
        return (
            <div className="row justify-content-md-center">
                <div className="col-md-12 col-xs-12 col-lg-12 col-sm-12">
                    <div className='alert alert-info' >
                        <div className="col-md-4 col-lg-4 col-sm-4 col-xs-4 col-md-offset-0 col-xs-offset-0 col-lg-offset-0">
                            { item.fooditem }
                        </div>
                        <div className="col-md-3 col-lg-3 col-sm-3 col-xs-3 col-md-offset-1 col-xs-offset-1 col-lg-offset-1">
                            <label className="label label-info">Price:</label>    ${ item.price }
                        </div>
                        <div className="col-md-2 col-lg-2 col-sm-2 col-xs-2 col-md-offset-1 col-xs-offset-1 col-lg-offset-1">
                            <input type="button" value="Add" className="btn-group-lg btn-group-sm btn-group-xs btn-primary" id="btnAdd"
                                   onClick={()=> {
                                       this.handleAddToCart(item);
                                   }}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuItems;