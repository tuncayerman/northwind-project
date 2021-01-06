import React, { Component } from "react";
import { Pagination, Form, Row } from "react-bootstrap";

//redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//actions
import * as paginationActions from "../redux/actions/paginationActions";

class SmartPagination extends Component {
  state = {
    defaultPageGroup: 0,
    paginationArray: [],
    lastPage: 1,
  };

  componentDidMount() {
    const pgArr = this.createpaginationItems(this.props.tableData);
    this.setState({ paginationArray: pgArr });
    this.findLastElement(pgArr);
  }
  // componentDidUpdate(){
  //   const pgArr = this.createpaginationItems(this.props.tableData);
  //   this.setState({ paginationArray: pgArr });
  //   this.findLastElement(pgArr);
  // }

  findLastElement(arr) {
    let innerArr = arr[arr.length - 1];
    let lastElement = innerArr[innerArr.length - 1];
    this.setState({ lastPage: lastElement });
  }

  createpaginationItems(data) {
    let active = 2;
    let totalPage = Math.ceil(data.length / this.props.currentShowCount);
    let items = [];
    let paginationArray = [];

    console.log(this.props.currentShowCount);
    console.log(totalPage);
    // deneme amaçlı
    totalPage = 100;

    for (let number = 1; number <= totalPage; number++) {
      items.push(
        number
        // <Pagination.Item key={number} active={number === active}>
        //   {number}
        // </Pagination.Item>
      );
      if (number % 10 === 0 || number === totalPage) {
        paginationArray.push(items);
        items = [];
      }
    }
    console.log(paginationArray);
    return paginationArray;
  }

  showPaginationItem(pageGroup, paginationArray) {
    console.log(paginationArray);
    if (paginationArray !== undefined || paginationArray !== null) {
      let items = [];
      for (let index in paginationArray[pageGroup]) {
        items.push(
          <Pagination.Item
            key={index}
            active={
              paginationArray[pageGroup][index] === this.props.currentPage
            }
            onClick={() =>
              this.handleCurentPage(paginationArray[pageGroup][index])
            }
          >
            {paginationArray[pageGroup][index]}
          </Pagination.Item>
        );
      }
      return items;
    }
  }

  handleCurentPage(number, groupNumber) {
    if (number !== undefined) this.props.actions.setCurrentPage(number);
    if (groupNumber !== undefined) {
      this.setState({ defaultPageGroup: groupNumber });
      console.log("buraya geliyor mu" + groupNumber);
    }
  }

  handleCurrentGroup(number) {
    let currentGroup = this.state.defaultPageGroup + number;
    if (
      currentGroup < 0 ||
      currentGroup > this.state.paginationArray.length - 1
    )
      return;
    let currentPage = this.state.paginationArray[currentGroup][0];
    this.handleCurentPage(currentPage, currentGroup);
  }

  render() {
    const showCount = [10, 20, 50, 100];

    return (
      <Row>
        <Pagination>
          <Pagination.Item onClick={() => this.handleCurentPage(1, 0)}>
            First
          </Pagination.Item>
          <Pagination.Item onClick={() => this.handleCurrentGroup(-1)}>
            Prev
          </Pagination.Item>

          {this.showPaginationItem(
            this.state.defaultPageGroup,
            this.state.paginationArray
          )}
          <Pagination.Item onClick={() => this.handleCurrentGroup(+1)}>
            Next
          </Pagination.Item>
          <Pagination.Item
            onClick={() =>
              this.handleCurentPage(
                this.state.lastPage,
                this.state.paginationArray.length - 1
              )
            }
          >
            Last
          </Pagination.Item>
        </Pagination>
        <Form className="col-4">
          <Form.Row>
            <Form.Group controlId="exampleForm.ControlSelect1">
              
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
        </Form>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentShowCount: state.currentShowCountReducer,
    tableData: state.tableDataReducer,
    currentPage: state.currentPageReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      setCurrentPage: bindActionCreators(
        paginationActions.setCurrentPage,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SmartPagination);
