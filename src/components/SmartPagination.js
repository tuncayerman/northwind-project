import React, { Component } from "react";
import { Pagination } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class SmartPagination extends Component {
  componentDidMount() {}
  componentDidUpdate() {
    this.createpaginationItem();
  }
  createpaginationItem() {
    const totalPage = Math.ceil(
      this.props.data.length / this.props.currentShowCount
    );
    let items=[]

    console.log(this.props.currentShowCount);
    console.log(totalPage);
    // for (let number = 1; number <= totalPage; number++) {
    //     items.push(
    //   <Pagination.Item key={number} active={number === active}>
    //     {number}
    //   </Pagination.Item>)
    // }
    return items
  }

  render() {
    const showCount = [10, 20, 50, 100];
    return (
      <div>
        <Pagination></Pagination>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentShowCount: state.currentShowCountReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {},
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SmartPagination);
