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

  findLastElement(arr) {
    if (arr.length === 0) return;
    let innerArr = arr[arr.length - 1];
    let lastElement = innerArr[innerArr.length - 1];
    return lastElement;
  }

  createpaginationItems(data) {
    let totalPage = Math.ceil(data.length / this.props.currentShowCount);
    let items = [];
    let paginationArray = [];

    for (let number = 1; number <= totalPage; number++) {
      items.push(number);
      if (number % 10 === 0 || number === totalPage) {
        paginationArray.push(items);
        items = [];
      }
    }

    return paginationArray;
  }

  showPaginationItem(pageGroup, paginationArray) {
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
    }
  }

  handleCurrentGroup(number, pgArr) {
    let currentGroup = this.state.defaultPageGroup + number;
    if (currentGroup < 0 || currentGroup > pgArr.length - 1) return;
    let currentPage = pgArr[currentGroup][0];
    this.handleCurentPage(currentPage, currentGroup);
  }

  handleGroupCountValue(data) {
    this.props.actions.setCurrentPage(1);
    this.props.actions.setCurrentShowCount(data);
  }

  editData() {
    if (this.props.tableData.length > 0) {
      return this.props.tableData;
    } else if (
      this.props.tableData.length === 0 &&
      Array.isArray(this.props.generalData)
    ) {
      return this.props.generalData;
    } else return [];
  }

  render() {
    const paginationArray = this.createpaginationItems(this.editData());
    const lastPage = this.findLastElement(paginationArray);

    return (
      <Row className="pl-3">
        <Pagination>
          <Pagination.Item onClick={() => this.handleCurentPage(1, 0)}>
            First
          </Pagination.Item>
          <Pagination.Item
            onClick={() => this.handleCurrentGroup(-1, paginationArray)}
          >
            Prev
          </Pagination.Item>

          {this.showPaginationItem(
            this.state.defaultPageGroup,
            paginationArray
          )}
          <Pagination.Item
            onClick={() => this.handleCurrentGroup(+1, paginationArray)}
          >
            Next
          </Pagination.Item>
          <Pagination.Item
            onClick={() =>
              this.handleCurentPage(lastPage, paginationArray.length - 1)
            }
          >
            Last
          </Pagination.Item>
        </Pagination>
        <Form className="col-4">
          <Form.Row>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control
                as="select"
                onChange={(e) => this.handleGroupCountValue(e.target.value)}
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
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

export default connect(mapStateToProps, mapDispatchToProps)(SmartPagination);
