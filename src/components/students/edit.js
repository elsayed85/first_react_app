import React from "react";

class Edit extends React.Component {
  render() {
    return (
      <form method="post">
        <div className="form-group row">
          <label for="name" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
              value="ahmed essam"
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="inputEmail3"
              placeholder="Email"
              value="ahmed@gmail.com"
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword3"
              placeholder="Password"
            />
          </div>
        </div>
        <fieldset className="form-group">
          <div className="row">
            <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
            <div className="col-sm-10">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="gridRadios1"
                  value="m"
                  checked
                />
                <label className="form-check-label" for="gridRadios1">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="gridRadios2"
                  value="f"
                />
                <label className="form-check-label" for="gridRadios2">
                  Female
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">
              Edit
            </button>
          </div>
        </div>
      </form>
    );
  }
}
export default Edit;
