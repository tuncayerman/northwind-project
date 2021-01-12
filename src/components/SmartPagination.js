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
    console.log("creatednnnn")
    //const pgArr = this.createpaginationItems(data);
    // this.setState({ paginationArray: pgArr });
    //this.findLastElement(pgArr);
  }
  // componentDidUpdate(){
  //   const pgArr = this.createpaginationItems(this.props.tableData);
  //   if(pgArr !== this.state.paginationArray){
  //     this.setState({ paginationArray: pgArr });
  //     this.findLastElement(pgArr);
  //   }
      
  // }

  findLastElement(arr) {
    if(arr.length===0)
      return;
    console.log(arr);
    let innerArr = arr[arr.length - 1];
    let lastElement = innerArr[innerArr.length - 1];
    //this.setState({ lastPage: lastElement });
    return lastElement;
  }

  createpaginationItems(data) {
    let active = 2;
    let totalPage = Math.ceil(data.length / this.props.currentShowCount);
    let items = [];
    let paginationArray = [];

    console.log(this.props.currentShowCount);
    console.log(totalPage);
    // deneme amaçlı
   

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
    
    //this.findLastElement(paginationArray);
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

  handleCurrentGroup(number,pgArr) {
    console.log(pgArr);
    let currentGroup = this.state.defaultPageGroup + number;
    if (
      currentGroup < 0 ||
      currentGroup > pgArr.length - 1
    )
      return;
    let currentPage = pgArr[currentGroup][0];
    this.handleCurentPage(currentPage, currentGroup);
  }

  handleGroupCountValue(data){
    this.props.actions.setCurrentPage(1);
    this.props.actions.setCurrentShowCount(data);
    
  }

  editData(){
    console.log(Array.isArray(this.props.generalData));
    if(this.props.tableData.length>0){
      return this.props.tableData; 
    }
    else if (this.props.tableData.length === 0 && Array.isArray(this.props.generalData)){
      return this.props.generalData;
    }
    else
      return [];
  }

  render() {
    const showCount = [10, 20, 50, 100];
    const paginationArray = this.createpaginationItems(this.editData());
    const lastPage = this.findLastElement(paginationArray);
    
    return (
      <Row>
        <Pagination>
          <Pagination.Item onClick={() => this.handleCurentPage(1, 0)}>
            First
          </Pagination.Item>
          <Pagination.Item onClick={() => this.handleCurrentGroup(-1,paginationArray)}>
            Prev
          </Pagination.Item>

          {this.showPaginationItem(
            this.state.defaultPageGroup,
            paginationArray
          )}
          <Pagination.Item onClick={() => this.handleCurrentGroup(+1,paginationArray)}>
            Next
          </Pagination.Item>
          <Pagination.Item
            onClick={() =>
              this.handleCurentPage(
                lastPage,
                paginationArray.length - 1
              )
            }
          >
            Last
          </Pagination.Item>
        </Pagination>
        <Form className="col-4">
          <Form.Row>
            <Form.Group controlId="exampleForm.ControlSelect1">
              
              <Form.Control as="select" onChange={(e)=>this.handleGroupCountValue(e.target.value)}>
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
