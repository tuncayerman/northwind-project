import React, { Component } from "react";
import SmartTable from "./SmartTable";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as orderActions from "../redux/actions/orderActions";

class Orders extends Component {
  componentDidMount() {
    this.props.actions.fetchOrders();
  }

  render() {
    let columns = [
      {
        name: "Order Date",
        field: "orderDate",
        type: "Date",
      },
      {
        name: "Required Date",
        field: "requiredDate",
        type: "Date",
      },
      {
        name: "Shipped Date",
        field: "shippedDate",
        type: "Date",
      },
      {
        name: "Ship Via",
        field: "shipVia",
        type: "Number",
      },
      {
        name: "Freight",
        field: "freight",
        type: "Number",
      },
      {
        name: "Ship Name",
        field: "shipName",
        type: "String",
      },
    ];
    return (
      <div>
        <SmartTable columns={columns} data={this.props.orders} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    orders: state.orderListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      fetchOrders: bindActionCreators(orderActions.getOrders, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
