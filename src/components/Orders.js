import React, { Component } from "react";
//components
import SmartTable from "./SmartTable";

//redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//actions
import * as orderActions from "../redux/actions/orderActions";
import * as customerActions from "../redux/actions/customerActions"

class Orders extends Component {
  componentDidMount() {
    this.props.actions.fetchOrders();
    this.props.actions.fetchCustomers();
    this.props.actions.fetchBaseOrders();
  }
  componentDidUpdate(){
    this.props.actions.fetchOrders();
    this.props.actions.fetchCustomers();
    //this.props.actions.fetchBaseOrders();
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
        <SmartTable columns={columns}  dataType="order" title="Orders" />
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
      fetchCustomers: bindActionCreators(customerActions.getBaseCustomers,dispatch),
      fetchBaseOrders: bindActionCreators(orderActions.getBaseOrders,dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
