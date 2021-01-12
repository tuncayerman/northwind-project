import react, { Component } from "react";
//react-bootstrap
import { Col, Container, Row } from "react-bootstrap";

//redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class CustomerDetail extends Component {
  render() {
    return (
      <Container className="">
        <div className="bg-warning d-flex justify-content-center rounded-pill mt-2">
          <h2>Customer Details</h2>
        </div>

        <Row className="p-3">
          <Col className="border-bottom border-dark">
            <Row>
              <Col className="font-weight-bold">Contact Name:</Col>
              <Col className="text-left">{this.props.customerDetail.contactName}</Col>
            </Row>
          </Col>
          <Col className="border-bottom border-dark">
            <Row>
              <Col className="font-weight-bold">Company Name:</Col>
              <Col>{this.props.customerDetail.companyName}</Col>
            </Row>
          </Col>
        </Row>
        <Row className="pl-3 pr-3">
          <Col className="border-bottom border-dark">
            <Row>
              <Col className="font-weight-bold">Contact Title:</Col>
              <Col className="text-left">{this.props.customerDetail.contactTitle}</Col>
            </Row>
          </Col>
          <Col className="border-bottom border-dark">
            <Row>
              <Col className="font-weight-bold"></Col>
              <Col></Col>
            </Row>
          </Col>
        </Row>
        <div className=" d-flex justify-content-start rounded-pill mt-5">
          <h3>Address Details</h3>
        </div>

        <Row className="p-3">
          <Col className="border-bottom border-dark">
            <Row>
              <Col className="font-weight-bold">Street:</Col>
              <Col className="text-left">{this.props.customerDetail.address.street}</Col>
            </Row>
          </Col>
          <Col className="border-bottom border-dark">
            <Row>
              <Col className="font-weight-bold">City:</Col>
              <Col>{this.props.customerDetail.address.city}</Col>
            </Row>
          </Col>
        </Row>
        <Row className="pl-3 pr-3">
          <Col className="border-bottom border-dark">
            <Row>
              <Col className="font-weight-bold">Postal Code:</Col>
              <Col className="text-left">{this.props.customerDetail.address.postalCode}</Col>
            </Row>
          </Col>
          <Col className="border-bottom border-dark">
            <Row>
              <Col className="font-weight-bold">Country</Col>
              <Col>{this.props.customerDetail.address.country}</Col>
            </Row>
          </Col>
        </Row>
        <Row className="p-3">
          <Col className="border-bottom border-dark">
            <Row>
              <Col className="font-weight-bold">Phone:</Col>
              <Col className="text-left">{this.props.customerDetail.address.phone}</Col>
            </Row>
          </Col>
          <Col className="border-bottom border-dark">
            <Row>
              <Col className="font-weight-bold"></Col>
              <Col></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    customerDetail: state.customerDetailReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {},
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerDetail);
