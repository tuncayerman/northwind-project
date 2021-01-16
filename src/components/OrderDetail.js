import { Component } from "react";
//react-bootstrap
import { Col, Container, Row } from "react-bootstrap";

//redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//utils
import { showValue } from "../utils/editData";

//actions
import * as productActions from "../redux/actions/productActions";

class OrderDetail extends Component {
  componentDidMount() {
    let id = this.props.orderDetail.details[0].productId;
    if (id !== undefined) this.props.actions.getProductById(id);
  }
  componentDidUpdate() {}
  render() {
    let orderDetail = this.props.orderDetail;
    let address = this.props.orderDetail.shipAddress;
    let details = this.props.orderDetail.details[0];

    return (
      <Container className="">
        <div className="bg-warning d-flex justify-content-center rounded-pill mt-2">
          <h2>Order Details</h2>
        </div>

        <Row className="p-3">
          <Col className="border-bottom border-dark">
            <Row>
              <Col className="font-weight-bold">Order Date:</Col>
              <Col className="text-left">
                {showValue(orderDetail.orderDate, "Date")}
              </Col>
            </Row>
          </Col>
          <Col className="border-bottom border-dark">
            <Row>
              <Col className="font-weight-bold">Required Date:</Col>
              <Col>{showValue(orderDetail.requiredDate, "Date")}</Col>
            </Row>
          </Col>
        </Row>
        <Row className="pl-3 pr-3">
          <Col className="border-bottom border-dark">
            <Row>
              <Col className="font-weight-bold">Shipped Date:</Col>
              <Col className="text-left">
                {showValue(orderDetail.shippedDate, "Date")}
              </Col>
            </Row>
          </Col>
          <Col className="border-bottom border-dark">
            <Row>
              <Col className="font-weight-bold">Ship Via:</Col>
              <Col>{orderDetail.shipVia}</Col>
            </Row>
          </Col>
        </Row>
        <Row className="p-3">
          <Col className="border-bottom border-dark">
            <Row>
              <Col className="font-weight-bold">Freight:</Col>
              <Col className="text-left">{orderDetail.freight}</Col>
            </Row>
          </Col>
          <Col className="border-bottom border-dark">
            <Row>
              <Col className="font-weight-bold">Ship Name:</Col>
              <Col>{orderDetail.shipName}</Col>
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
              <Col className="text-left">{address.street}</Col>
            </Row>
          </Col>
          <Col className="border-bottom border-dark">
            <Row>
              <Col className="font-weight-bold">City:</Col>
              <Col>{address.city}</Col>
            </Row>
          </Col>
        </Row>
        <Row className="pl-3 pr-3">
          <Col className="border-bottom border-dark">
            <Row>
              <Col className="font-weight-bold">Postal Code:</Col>
              <Col className="text-left">{address.postalCode}</Col>
            </Row>
          </Col>
          <Col className="border-bottom border-dark">
            <Row>
              <Col className="font-weight-bold">Country</Col>
              <Col>{address.country}</Col>
            </Row>
          </Col>
        </Row>
        <Row className="p-3">
          <Col className="border-bottom border-dark">
            <Row>
              <Col className="font-weight-bold">Region:</Col>
              <Col className="text-left">{address.region}</Col>
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
          <h3>Product Details</h3>
        </div>
        <Row className="p-3">
          <Col className="border-bottom border-dark">
            <Row>
              <Col className="font-weight-bold">Product:</Col>
              <Col className="text-left">{this.props.product.name}</Col>
            </Row>
          </Col>
          <Col className="border-bottom border-dark">
            <Row>
              <Col className="font-weight-bold">Unit Price:</Col>
              <Col>{details.unitPrice}</Col>
            </Row>
          </Col>
        </Row>
        <Row className="pl-3 pr-3">
          <Col className="border-bottom border-dark">
            <Row>
              <Col className="font-weight-bold">Quantity:</Col>
              <Col className="text-left">{details.quantity}</Col>
            </Row>
          </Col>
          <Col className="border-bottom border-dark">
            <Row>
              <Col className="font-weight-bold">Discount</Col>
              <Col>{details.discount}</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    orderDetail: state.orderDetailReducer,
    product: state.productReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProductById: bindActionCreators(
        productActions.getProductById,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail);
