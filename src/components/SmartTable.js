import React, { Component } from "react";

//redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// react-bootstrap
import { Table, Container, Form, Button, Row } from "react-bootstrap";

//components
import SmartPagination from "./SmartPagination";

//utils
import { filterData, showdata } from "../utils/showingData";
import { showValue } from "../utils/editData";
import { detailFind } from "../utils/dataFind";

//actions
import * as tableActions from "../redux/actions/tableActions";
import * as customerActions from "../redux/actions/customerActions";
import * as orderActions from "../redux/actions/orderActions";

//router
import { Link } from "react-router-dom";

class SmartTable extends Component {
  state = {
    fields: [],
    searchText: "",
    clear: false,
    cacheData: [],
  };
  componentDidMount() {
    this.setFields();
  }
  componentDidUpdate() {
    if (this.state.cacheData !== this.props.generalData) {
      this.props.actions.setTableData(this.props.generalData);
      this.setState({ cacheData: this.props.generalData });
    }
  }

  setFields() {
    let fields = [];
    for (const index in this.props.columns) {
      fields.push(this.props.columns[index].field);
    }
    this.setState({ fields });
  }

  createTableBody() {
    let data = [];
    data = this.props.tableData;

    if (data.length === 0)
      return <p className="mr-auto ml-auto">Search is not found</p>;

    data = showdata(this.props.currentPage, data, this.props.currentShowCount);

    return data.map((item) => (
      <tr key={item.id}>
        <td>{item.lineNumber}</td>
        {this.props.columns.map((column) => (
          <td>{showValue(item[column.field], column.type)}</td>
        ))}
        {this.props.dataType === "order" && (
          <td>
            <Link
              to="/customerDetail"
              onClick={() => this.handleCustomersDetail(item.customerId)}
            >
              {this.findCustomerName(item.customerId)}
            </Link>
          </td>
        )}
        <td>
          <Link
            to={
              this.props.dataType === "order"
                ? "/orderDetail"
                : "/customerDetail"
            }
            onClick={() => this.handleDetail(item.id, this.props.dataType)}
          >
            Detail
          </Link>
        </td>
      </tr>
    ));
  }

  handelSearchText(searchText) {
    this.setState({ searchText });
    this.setState({ clear: true });
  }

  searchClick() {
    let filterDatas = filterData(
      this.props.generalData,
      this.state.searchText,
      this.state.fields
    );
    this.props.actions.setTableData(filterDatas);
  }

  clearClick() {
    this.setState({ clear: false });
    this.setState({ searchText: "" });
  }

  handleDetail(id, type) {
    let detail = {};
    if (type === "order") {
      detail = detailFind(id, this.props.orders);
      if (detail === undefined) this.props.actions.getOrderDetail(id);
      else this.props.actions.setOrderDetail(detail);
    } else if (type === "customer") {
      detail = detailFind(id, this.props.customers);
      if (detail === undefined) this.props.actions.getCustomerDetail(id);
      else this.props.actions.setCustomerDetail(detail);
    }
  }

  handleCustomersDetail(id) {
    let customerDetail = detailFind(id, this.props.customers);
    if (customerDetail === undefined)
      this.props.actions.getCustomerDetail(id.toString());
    else this.props.actions.setCustomerDetail(customerDetail);
  }
  findCustomerName(id) {
    let customerDetail = detailFind(id, this.props.customers);
    if (customerDetail === undefined) return "";
    else return customerDetail.contactName;
  }

  render() {
    return (
      <Container className="justify">
        <h2 className="text-center mt-5">{this.props.title}</h2>
        <Row className="pr-2 mt-3 mb-4">
          <Form className="col-3 ml-auto">
            <Form.Control
              type="text"
              placeholder="Search..."
              value={this.state.searchText}
              onChange={(e) => this.handelSearchText(e.target.value)}
            />
          </Form>
          <Button className="mr-2" size="sm" onClick={() => this.searchClick()}>
            Search
          </Button>
          {this.state.clear && (
            <Button size="sm" onClick={() => this.clearClick()}>
              Clear
            </Button>
          )}
        </Row>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Line No:</th>
              {this.props.columns.map((column) => (
                <th key={column.name}>{column.name}</th>
              ))}
              {this.props.dataType === "order" && <th>Customer Name</th>}
              <th></th>
            </tr>
          </thead>
          <tbody>{this.createTableBody()}</tbody>
        </Table>
        <SmartPagination data={this.props.data} />
      </Container>
    );
  }
}
function mapStateToProps(state) {
  return {
    tableData: state.tableDataReducer,
    generalData: state.genralDataReducer,
    currentPage: state.currentPageReducer,
    currentShowCount: state.currentShowCountReducer,
    customers: state.customerReducer,
    orders: state.orderListReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      setTableData: bindActionCreators(tableActions.setTableData, dispatch),
      getCustomerDetail: bindActionCreators(
        customerActions.getCustomerDetail,
        dispatch
      ),
      setCustomerDetail: bindActionCreators(
        customerActions.setCustomerDetail,
        dispatch
      ),
      getOrderDetail: bindActionCreators(orderActions.getOrderDetail, dispatch),
      setOrderDetail: bindActionCreators(orderActions.setOrderDetail, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SmartTable);
