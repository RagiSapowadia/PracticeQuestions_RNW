import React, { useRef, useState } from "react";

export default function LocalStoragePrac() {
  const email = useRef("");
  const pswd = useRef("");
  const [dispData, setDispData] = useState([]);

  function submitForm(e) {
    e.preventDefault();

    const usrData = JSON.parse(localStorage.getItem("UserInfo")) || [];

    var obj = {
      email: email.current.value,
      pswd: pswd.current.value,
    };

    usrData.push(obj);
    localStorage.setItem("UserInfo", JSON.stringify(usrData));

  }

  function showData() {
    var usrData = JSON.parse(localStorage.getItem("UserInfo")) || [];
    setDispData(usrData);
  }

  function editData(index) {
    const newEmail = prompt("Enter new email:", dispData[index].email);
    const newPswd = prompt("Enter new password:", dispData[index].pswd);

    if (newEmail !== null && newPswd !== null) {
      let updatedData = [...dispData];
      updatedData[index] = { email: newEmail, pswd: newPswd };

      localStorage.setItem("UserInfo", JSON.stringify(updatedData));
      setDispData(updatedData);
    }
  }

  function delData(index) {
    let updatedData = [...dispData];
    updatedData.splice(index, 1);

    localStorage.setItem("UserInfo", JSON.stringify(updatedData));
    setDispData(updatedData);
  }

  return (
    <div>3
      <form onSubmit={submitForm} id="login" className="border border-2 mt-5 mx-auto w-25 p-5">
        <div className="form-group mb-2">
          <label className="fw-bold">Email</label>
          <input ref={email} className="form-control" placeholder="Enter Email" />
        </div>

        <div className="form-group mb-2">
          <label className="fw-bold">Password</label>
          <input ref={pswd} type="password" className="form-control" placeholder="Enter Password" />
        </div>

        <button type="submit" className="btn btn-primary w-50">Submit</button>
        <button type="button" className="btn btn-primary w-50" onClick={showData}>Show Data</button>
      </form>

      <table className="table table-bordered w-75 mt-3 mx-auto text-center">
        <thead>
          <tr>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {dispData.map((el, i) => (
            <tr key={i}>
              <td>{el.email}</td>
              <td>{el.pswd}</td>
              <td>
                <button className="btn btn-primary me-2" onClick={() => editData(i)}>Edit</button>
                <button className="btn btn-danger" onClick={() => delData(i)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
