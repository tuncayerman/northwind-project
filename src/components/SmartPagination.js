import React, { Component } from "react";
import { Pagination } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class SmartPagination extends Component {
  state={
      defaultPageGroup:0,
      paginationArray:[]
    }
  
  componentDidMount() {
    const pgArr = this.createpaginationItems(this.props.tableData);
    this.setState({paginationArray:pgArr});
  }

 

  createpaginationItems(data) {
    let active = 2;
    let totalPage = Math.ceil(
      data.length / this.props.currentShowCount
    );
    let items = [];
    let paginationArray = [];

    console.log(this.props.currentShowCount);
    console.log(totalPage);
    // deneme amaçlı
    totalPage=100;

    for (let number = 1; number <= totalPage; number++) {
      items.push(
        number
        // <Pagination.Item key={number} active={number === active}>
        //   {number}
        // </Pagination.Item>
      );
      if(number%10 === 0 || number === totalPage){
        paginationArray.push(items);
        items=[];
      }
    }
    console.log(paginationArray);
    return paginationArray;
  }

  showPaginationItem(pageGroup, paginationArray){
    console.log(paginationArray);
    if(paginationArray !== undefined || paginationArray !== null){
      let items=[]
      for(let index in paginationArray[pageGroup]){
        items.push(<Pagination.Item key={index}>{paginationArray[pageGroup][index]}</Pagination.Item>)
      }
      return items;
    }
  }
  render() {
    const showCount = [10, 20, 50, 100];
    
    return (
      <div>
        <Pagination>
          <Pagination.Item>First</Pagination.Item>
          <Pagination.Item>Prev</Pagination.Item>
            {this.showPaginationItem(this.state.defaultPageGroup, this.state.paginationArray)}
          <Pagination.Item>Next</Pagination.Item>
          <Pagination.Item>Last</Pagination.Item>
        </Pagination>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentShowCount: state.currentShowCountReducer,
    tableData : state.tableDataReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {},
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SmartPagination);
