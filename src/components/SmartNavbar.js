import React, { Component } from "react";
import { Container, Row, ButtonGroup, Button } from "react-bootstrap";

//router
import { Link } from "react-router-dom";

//redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//actions
import * as paginationActions from "../redux/actions/paginationActions";


class Home extends Component {
  onHandle(){
    this.props.actions.setCurrentPage(1);
    this.props.actions.setCurrentShowCount(10);
  }

  render() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Toonch-i Store</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item ">
              <Link to="/customers" class="nav-link" onClick={()=>this.onHandle()} >CUSTOMERS <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
              <Link to="/orders" class="nav-link" >ORDERS</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentShowCount: state.currentShowCountReducer,
    tableData: state.tableDataReducer,
    currentPage: state.currentPageReducer,
    generalData: state.generalDataReducer,

  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      setCurrentPage: bindActionCreators(
        paginationActions.setCurrentPage,
        dispatch
      ),
      setCurrentShowCount: bindActionCreators(
        paginationActions.setCurrentShowCount,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
