import React, { Component } from "react";
import SmartTable from "./SmartTable";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as customerActions from "../redux/actions/customerActions";
import customerReducer from "../redux/reducers/customerReducer";

class Customers extends Component {
  componentDidMount() {
    this.props.actions.fetchCustomer();
  }
  

  render() {
    let columns = [
      {
        name: "Customer Name",
        field: "contactName",
        type: "String",
      },
      {
        name: "Company Name",
        field: "companyName",
        type: "String",
      },
      {
        name: "Contact Title",
        field: "contactTitle",
        type: "String",
      },
    ];

    return (
      <div>
        <SmartTable
          columns={columns}
          data={this.props.customers}/>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    //stateler gelecek
    customers: state.customerReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      //actions gelecek
      fetchCustomer: bindActionCreators(customerActions.getCustomers, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Customers);
