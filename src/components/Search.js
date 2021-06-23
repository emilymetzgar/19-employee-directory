import React from "react";

function SearchEmployees(props) {
  return (
    <form>
      <div className="form-group">
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="searchemployees"
          type="text"
          className="form-control"
          id="searchemployees"
        />
      </div>
    </form>
  );
}

export default SearchEmployees;