import { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function SelectBar(props) {
  const [innerSearch, setInnerSearch] = useState("");
  return (
    <DropdownButton
      id="dropdown-variants-dark"
      variant="dark"
      menuVariant="dark"
      title={innerSearch === "" ? "Industy Search" : innerSearch}
    >
      <Dropdown.Item
        eventKey="All Industries"
        onClick={(event) => {
          setInnerSearch(event.target.textContent);
          props.onSubmit("");
        }}
      >
        All Industries
      </Dropdown.Item>
      {props.options.map((title) => (
        <Dropdown.Item
          eventKey={title}
          onClick={(event) => {
            setInnerSearch(event.target.textContent);
            props.onSubmit(event.target.textContent);
          }}
        >
          {title}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

export default SelectBar;
