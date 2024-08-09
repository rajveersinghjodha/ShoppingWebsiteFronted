import React from 'react';

function ItemsForm() {
  return (
    <>
    <div className="input-group">
  <span className="input-group-text">First and last name</span>
  <input type="text" aria-label="First name" className="form-control" />
  <input type="text" aria-label="Last name" className="form-control" />
</div>


<div className="input-group mb-3">
  <span className="input-group-text">$</span>
  <span className="input-group-text">0.00</span>
  <input
    type="text"
    className="form-control"
    aria-label="Dollar amount (with dot and two decimal places)"
  />
</div>

<div className="input-group">
  <span className="input-group-text">Description</span>
  <textarea
    className="form-control"
    aria-label="With textarea"
    defaultValue={""}
  />
</div>


      <div className="mb-3">
  <label htmlFor="formFile" className="form-label">
    Default file input example
  </label>
  <input className="form-control" type="file" id="formFile" />
</div>

<button type="submit" className="btn btn-primary">
          Submit
        </button>

    </>
  );
}

export default ItemsForm;