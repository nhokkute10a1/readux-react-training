import React, { Component } from 'react';

export default class ProductList extends Component {
    render() {
        return (
            <div className="card border-primary mb-3" >
                <div className="card-header bg-primary" style={{ color: 'white' }}>Danh Sách Sản Phẩm</div>
                <div className="card-body ">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã Sản Phẩm</th>
                                <th>Tên Sản Phẩm</th>
                                <th>Giá</th>
                                <th>Trạng Thái</th>
                                <th>Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                           {this.props.children}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}