import { Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function MyDatePicker(props) {
  const [to, setTo] = useState(new Date());
  return (
    <div className="date">
      <Row>
        <Col md="auto">
          <DatePicker selected={to} onChange={(date) => setTo(date)} />
        </Col>
        <Col>
          <Button
            variant="dark"
            type="submit"
            id="search-button"
            onClick={() => props.onSubmit(to)}
          >
            Search Date
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default MyDatePicker;
