import { useState } from "react";
import Select from "react-select";

function SearchBar(props) {
  const [innerSearch, setInnerSearch] = useState("");
  return (
    <Select
      className="basic-single"
      classNamePrefix="select"
      defaultValue={props.options[0]}
      isDisabled={false}
      isClearable={true}
      isSearchable={true}
      name="color"
      placeholder={"Symbol Search"}
      options={props.options}
      theme={(theme) => ({
        ...theme,
        borderRadius: 1,
        colors: {
          ...theme.colors,
          primary25: "primary50",
          primary: "black",
        },
      })}
      onChange={(characterEntered) => {
        setInnerSearch(characterEntered.value);
      }}
      onInputChange={props.onSubmit(innerSearch)}
    />
  );
}

export default SearchBar;
