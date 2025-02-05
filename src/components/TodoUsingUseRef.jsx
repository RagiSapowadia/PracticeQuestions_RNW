import React, {useEffect, useRef,useState} from 'react'

export default function TodoUsingUseRef() {
    const cmtRef = useRef(null)
    const reviewRef = useRef(null)
    const [dispData, setDispData] = useState([]);

    useEffect(()=>{
      showData();
    })
    
    function submitForm(e) {
      e.preventDefault();
  
      const usrData = JSON.parse(localStorage.getItem("UserInfo")) || [];
  
      var obj = {
        comment: cmtRef.current.value,
        review: reviewRef.current.value,
      };
  
      usrData.push(obj);
      localStorage.setItem("UserInfo", JSON.stringify(usrData));
      cmtRef.current.value = ""
      reviewRef.current.value = ""
    }
  
    function showData() {
      var usrData = JSON.parse(localStorage.getItem("UserInfo")) || [];
      setDispData(usrData);
    }
 
    function editData(index) {
      const newcomment = prompt("Enter new comment:", dispData[index].comment);
      const newreview = prompt("Enter new password:", dispData[index].review);
  
      if (newcomment !== null && newreview !== null) {
        let updatedData = [...dispData];
        updatedData[index] = { comment: newcomment, review: newreview };
  
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
    <div>
     

      <form onSubmit={submitForm} id="login" className="border border-2 mt-5 mx-auto w-25 p-5">
        <div className="form-group mb-2">
          <label className="fw-bold">Comment</label>
          <input ref={cmtRef} className="form-control" placeholder="Enter Comment" />
        </div>

        <div className="form-group mb-2">
          <label className="fw-bold">Review</label>
          <input ref={reviewRef} type="text" className="form-control" placeholder="Enter Reveiew" />
        </div>

        <button type="submit" className="btn btn-primary w-50">Submit</button>
      </form>




      <table className="table table-bordered w-75 mt-3 mx-auto text-center">
        <thead>
          <tr>
            <th scope="col">Comment</th>
            <th scope="col">Review</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {dispData.map((el, i) => (
            <tr key={i}>
              <td>{el.comment}</td>
              <td>{el.review}</td>
              <td>
                <button className="btn btn-primary me-2" onClick={() => editData(i)}>Edit</button>
                <button className="btn btn-danger" onClick={() => delData(i)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
