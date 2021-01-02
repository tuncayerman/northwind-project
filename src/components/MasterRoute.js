import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Customers from "./Customers";
import Orders from "./Orders";

export default class MasterRoute extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/orders" component={Orders}></Route>
        </Switch>

        {/* <Route path="/customers/customerDetail" component={}></Route>
                <Route path="/orders" component={}></Route>
                <Route path="orders/orderDetails" component={}></Route> */}
      </div>
    );
  }
}
