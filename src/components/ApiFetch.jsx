// React does not allow asynchronous operations like fetch to be executed in JSX because JSX is meant for rendering UI, not for side effects
// useEffect can also be used for fetching data, directly updating the DOM, and timer when AUTO rendering is needed


import React, { useState, useEffect } from 'react';

export default function ApiFetch() {
  const [data, setData] = useState(null);


  // using HOOK - useEffect()

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((result) => setData(result.message))
      .catch((error) => console.error('Error:', error));
  }, []);


  // traditional method
  // const fetchData = () => {
  //   var img = React.createElement("img", null, " ")
  //   fetch('https://dog.ceo/api/breeds/image/random')
  //     .then((response) => response.json())
  //     .then((result) => setData(result.message))
  //     .catch((error) => console.error('Error:', error));
  // };

  return (
    // <div className='container d-flex flex-column justify-content-center'>
    //   <img className=' mx-auto' src={data} alt="Random Dog" style={{ width: '300px', height: '300px' }} /> 
    //   <button onClick={fetchData} className='btn btn-dark border border-2  mt-2 w-25 mx-auto'>Fetch Random Dog Image</button>



    // </div>

    // 2nd method
    // <div>
    // <button onClick={fetchData} className='btn btn-dark border border-2  mt-2 w-25 mx-auto'>Fetch Random Dog Image</button>
    // </div>


    <div>
      <h1>Random Dog Image</h1>
      {data ? (
        <img src={data} alt="Random Dog" style={{ width: '300px', height: '300px' }} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

