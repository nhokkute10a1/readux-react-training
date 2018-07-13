import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductItem extends Component {
    onDelete = (id) => {
        if (confirm('Bạn có muốn xóa không?')) //eslint-disable-line
        {
            this.props.onDelete(id);
        }
    }

    render() {
        var { product, index } = this.props;
        var statusName = product.status ? 'Còn Hàng' : 'Hết Hàng';
        var statusClass = product.status ? 'success' : 'warning';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`badge badge-${statusClass}`}>{statusName}</span>
                </td>
                <td>

                    <Link to={`/product/edit/${product.id}`} className="btn btn-success mr-10">
                        <i className="fas fa-pencil-alt"></i> Sửa
                                </Link>

                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.onDelete(product.id)}
                    >
                        <i className="far fa-trash-alt"></i> Xóa
                                </button>

                </td>
            </tr>
        );
    }
}