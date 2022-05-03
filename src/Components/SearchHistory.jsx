import { Form, FormControl, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function SearchHistory() {
  const navigate = useNavigate();
  const [innerSearch, setInnerSearch] = useState("");
  return (
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        value={innerSearch}
        onChange={(Symbol) => setInnerSearch(Symbol.target.value)}
      />
      <Button
        variant="outline-light"
        onClick={() =>
          navigate(`/history/${innerSearch}`, {
            state: { name: innerSearch },
          })
        }
      >
        Search
      </Button>
    </Form>
  );
}
export default SearchHistory;
