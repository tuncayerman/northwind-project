import React, { Component } from "react";
import SmartTable from "./SmartTable";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as customerActions from "../redux/actions/customerActions";
import * as tableActions from "../redux/actions/tableActions";

class Customers extends Component {
  componentWillMount() {
    this.props.actions.fetchCustomer();
    this.props.actions.getBaseCustomers();
  }

  componentDidUpdate() {
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
        <SmartTable columns={columns} dataType="customer" title="Customers" />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    //stateler
    customers: state.customerReducer,
    generalData: state.generalDataReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      fetchCustomer: bindActionCreators(customerActions.getCustomers, dispatch),
      getBaseCustomers: bindActionCreators(
        customerActions.getBaseCustomers,
        dispatch
      ),
      setTableData: bindActionCreators(tableActions.setTableData, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Customers);
