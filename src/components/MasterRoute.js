import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Customers from "./Customers";
import Orders from "./Orders";
import CustomerDetail from "./CustomerDetail";
import OrderDetail from "./OrderDetail";
import SmartNavbar from "./SmartNavbar";

export default class MasterRoute extends Component {
  render() {
    return (
      <div>
        <SmartNavbar />
        <Switch>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/orders" component={Orders}></Route>
          <Route path="/customerDetail" component={CustomerDetail}></Route>
          <Route path="/orderDetail" component={OrderDetail}></Route>
        </Switch>
      </div>
    );
  }
}
