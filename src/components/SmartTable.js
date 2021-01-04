import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Table, Container } from "react-bootstrap";
import SmartPagination from "./SmartPagination";

class SmartTable extends Component {
  componentDidMount(){
    console.log(this.props.columns);
   
  }
  componentDidUpdate(){
     console.log(this.props.data);
  }

  createTableBody(){
    const data = this.props.tableData;
    let lineNo=1;
    let fields=[];
    for(const index in this.props.columns){
      fields.push(this.props.columns[index].field);
    }
    return data.map((item)=>(
      <tr key={item.id}>
        <td>{lineNo++}</td>
        {fields.map((field)=>(
          <td>{item[field]}</td>
        ))}
      </tr>
      
    ))
  }
  
  render() {
    return (
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Line No:</th>
              {this.props.columns.map(column =>(
                  <th key={column.name}>{column.name}</th>
              ))}  
            </tr>
          </thead>
          <tbody>
            {this.createTableBody()}
          </tbody>
        </Table>
        <SmartPagination data={this.props.data}/>
      </Container>
    );
  }
}
function mapStateToProps(state){
  return{
    tableData:state.tableDataReducer,

  }
}
function mapDispatchToProps(dispatch){
  return{
    actions:{

    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SmartTable);
