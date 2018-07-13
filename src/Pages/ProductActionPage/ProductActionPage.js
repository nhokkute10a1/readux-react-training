import React, { Component } from 'react';
import callApi from './../../utils/apiCaller';
import { Url } from './../../utils/apiUrl';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { actAddProductsRequest, actGetByIdProductsRequest, actUpdateProductsRequest } from '../../action/index';

class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: 0,
            chkStatus: false
        };
    }
    componentDidMount() {
        console.log('componentDidMount');
        
        this.GetIdByData();
    }
    // khi  nhan duoc props ms su dung componentWillReceiveProps
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
        if (nextProps && nextProps.itemEditting) {
            var { itemEditting } = nextProps;
            this.setState({
                id: itemEditting.id,
                txtName: itemEditting.name,
                txtPrice: itemEditting.price,
                chkStatus: itemEditting.status
            })
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onSave = (e) => {
        e.preventDefault(); //ko cho load lai trang
        var { id } = this.state;
        if (id) {
            this.onEdit();
        }
        else {
            this.onCreate(e);
        }
    }
    onCreate = (e) => {
        e.preventDefault(); //ko cho load lai trang
        var { txtName, txtPrice, chkStatus } = this.state;
        var objData = {
            name: txtName,
            price: txtPrice,
            status: chkStatus
        }
        var { history } = this.props;
        this.props.onAddProducts(objData);
        history.goBack();
        // callApi(Url.ProductApi, 'POST', objData)
        //     .then(res => {
        //         history.goBack();
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
    }
    onEdit = (e) => {
        //e.preventDefault(); //ko cho load lai trang
        var { match } = this.props;
        var { txtName, txtPrice, chkStatus } = this.state;

        var id = match.params.id;
        var objData = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: chkStatus
        }
        var { history } = this.props;
        if (match) {
            this.props.onEditProducts(objData);
            history.goBack();
            // callApi(Url.ProductApi + '/' + id, 'PUT', objData)
            //     .then(res => {
            //         history.goBack();
            //     })
            //     .catch(err => {
            //         console.log(err);
            //     })

        }
    }

    GetIdByData = () => {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.GetByIdProducts(id);
            // callApi(Url.ProductApi + '/' + id, 'GET', null)
            //     .then(res => {
            //         var data = res.data;
            //         this.setState({
            //             id: data.id,
            //             txtName: data.name,
            //             txtPrice: data.price,
            //             chkStatus: data.status
            //         });
            //     })
            //     .catch(err => {
            //         console.log(err);
            //     })

        }
    }
    render() {
        var { txtName, txtPrice, chkStatus } = this.state;
        return (
            <div className="container">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Tên Sản Phẩm</label>
                        <input
                            name="txtName"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Nhập Tên Sản Phẩm"
                            type="text"
                            value={txtName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Giá</label>
                        <input
                            name="txtPrice"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Nhập Giá"
                            type="text"
                            value={txtPrice}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group form-check">
                        <input
                            name="chkStatus"
                            className="form-check-input"
                            id="exampleCheck1"
                            type="checkbox"
                            value={chkStatus}
                            onChange={this.onChange}
                            checked={chkStatus}
                        />
                        <label className="form-check-label" htmlFor="exampleCheck1">Còn Hàng</label>
                    </div>
                    <Link to="/product-list" className="btn btn-info mr-10">
                        Trở Lại
                    </Link>
                    <button type="submit" className="btn btn-success">Lưu Lại</button>
                </form>

            </div>
        );
    }
}

const mapStatusToProps = state => {
    return {
        itemEditting: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        GetByIdProducts: (products) => {
            dispatch(actGetByIdProductsRequest(products));
        },
        onAddProducts: (products) => {
            dispatch(actAddProductsRequest(products));
        },
        onEditProducts: (product) => {
            dispatch(actUpdateProductsRequest(product));
        },
    }
}



export default connect(mapStatusToProps, mapDispatchToProps)(ProductActionPage);