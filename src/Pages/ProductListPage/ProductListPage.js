import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import callApi from './../../utils/apiCaller';
import { Url } from './../../utils/apiUrl';
import { Link } from 'react-router-dom';
import { actFetchProductsRequest, actDeleteProductsRequest } from '../../action/index';

class ProductListPage extends Component {
    componentDidMount = () => {
        this.props.fetchAllProducts();
        // this.GetListData();
    }
    onDelete = (id) => {
        // var { products } = this.state;
        // callApi(Url.ProductApi + "/" + id, 'DELETE', null)
        //     .then(res => {
        //         if (res.status === 200) {
        //             var index = this.findIndex(products, id);
        //             if (index !== -1) {
        //                 products.splice(index, 1);
        //                 this.setState({
        //                     products: products
        //                 })
        //             }
        //         }
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
        this.props.onDeleteProducts(id);
    }
    // findIndex = (products, id) => {
    //     var result = -1;
    //     products.forEach((products, index) => {
    //         if (products.id === id) {
    //             result = index;
    //         }
    //         return result;
    //     });
    // }

    showProduct = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}
                    />
                )
            });
        }
        return result;
    }

    GetListData = () => {

        // callApi(Url.ProductApi, 'GET', null)
        //     .then(res => {
        //         this.setState({
        //             products: res.data
        //         })
        //     }).catch(err => {
        //         console.log(err);
        //     });
        this.props.fetchAllProducts();
    }
    render() {
        // var { products } = this.props;
        var { products } = this.props;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="/product/add" className="btn btn-info mb-10">
                    Thêm Sản Phẩm
                            </Link>
                <ProductList>
                    {this.showProduct(products)}
                </ProductList>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest());
        },
        onDeleteProducts: (id) => {
            dispatch(actDeleteProductsRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);