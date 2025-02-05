import React from 'react';

export default function BootstrapHomepage() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg fixed-top bg-light bg-body-tertiary">
                <div class="container-fluid mx-3">
                    <a class="navbar-brand text-decoration-none text-info" href="#">
                        <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="" style={{ height: 40 }} /> React
                    </a>
                    <a href="#" className='btn btn-primary'>SignUP</a>

                </div>
            </nav>

            <div className="section-1 d-flex align-items-center justify-content-center " style={{ backgroundImage: `url('https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-masthead.jpg')`, minHeight: "100vh", width: "100%", backgroundSize: 'cover', backgroundPosition: 'center' }}>


                <div>
                    <h1 className="text-white ">Welcome to React</h1>
                    <div className='d-flex gap-2'>

                        <input type="text" className='bg-light fs-4 form-control p-3' placeholder='Enter your email address' />
                        <a href="#" className='btn btn-primary  text-center fs-4 p-3'>Submit</a>
                    </div>
                </div>
            </div>


            <div className='row mx-auto justify-content-center mt-5 '>
                <div class="card col-3 border-0" style={{ width: "18rem;" }}>
                    <div className="card-img-top text-center">
                        <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="" style={{ height: 100 }} />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-center">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div class="card col-3 border-0" style={{ width: "18rem;" }}>
                    <div className="card-img-top text-center">
                        <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="" style={{ height: 100 }} />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-center">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div class="card col-3 border-0" style={{ width: "18rem;" }}>
                    <div className="card-img-top text-center">
                        <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="" style={{ height: 100 }} />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title  text-center">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>

            <div className='overflow-hidden mt-5'>
                <div className=" row" >
                    <div className=" col-md-6 text-dark p-5 text-center">
                        <p className="text-dark p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, distinctio similique aperiam voluptatem cupiditate libero omnis nemo explicabo in, exercitationem id accusamus qui, debitis repellat voluptas. Hic sunt aperiam vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima doloribus obcaecati velit officia fuga commodi sapiente quas illum odio beatae illo totam, dolorum earum necessitatibus, eum quos voluptatibus, similique incidunt!</p>
                    </div>
                    <div className='col-md-6' style={{ backgroundImage: `url("https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600")`, backgroundSize: "fill", minHeight: "100%", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>

                    </div>
                </div>
                <div className=" row">


                    <div className='col-md-6' style={{ backgroundImage: `url("https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600")`, backgroundSize: "fill", minHeight: "100%", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>

                    </div>

                    <div className=" col-md-6  p-5 text-center">
                        <p className="text-dark p-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi perferendis explicabo dolore culpa assumenda alias suscipit? Maiores ipsum culpa, delectus ratione officiis eaque corrupti alias porro error voluptate aperiam doloremque harum asperiores at eius. Placeat optio, incidunt rerum, nam vitae nostrum facilis nesciunt alias tenetur, tempora dignissimos. Ipsam, fugiat non.</p>
                    </div>
                </div>
                <div className=" row">
                    <div className="col-md-6  p-5 text-center">
                        <p className="text-dark p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur incidunt voluptates quaerat debitis laudantium odit distinctio tempora esse odio adipisci alias corrupti quos animi reiciendis deserunt dolor possimus, libero mollitia! Delectus voluptates atque maiores impedit optio dolore labore doloremque. Beatae ratione tenetur dolor quibusdam ex, optio eius hic ab tempora iste temporibus placeat laborum esse id soluta officia illo a sit sint, obcaecati veritatis, debitis ducimus. Libero, quidem? Voluptates, ipsum.</p>
                    </div>
                    <div className='col-md-6'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVWpbKHyUncM0G4wkM86t6BonGyrjP_dzRnA&s" alt="" style={{ height: "100%" }} />
                    </div>
                </div>

            </div>

            <div className='row mx-auto justify-content-center mt-5 '>
                <h3 className='text-center my-5'>What people are saying...</h3>
                <div class="card col-3 border-0" style={{ width: "18rem;" }}>
                        <img className='rounded-circle mx-auto' src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-1.jpg" alt="" style={{ height: "55%",width:"50%" }} />
                    <div class="card-body">
                        <h5 class="card-title text-center">Margaret E.</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div class="card col-3 border-0" style={{ width: "18rem;" }}>
                        <img className='rounded-circle mx-auto' src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-2.jpg" alt="" style={{ height: "55%",width:"50%" }} />
                    <div class="card-body">
                        <h5 class="card-title text-center">Fred S.</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div class="card col-3 border-0" style={{ width: "18rem;" }}>
                        <img className='rounded-circle mx-auto' src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-3.jpg" alt="" style={{ height: "55%",width:"50%" }} />
                    <div class="card-body">
                        <h5 class="card-title text-center">Sarah W.</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div> 
            </div> 

            <div className="footer overflow-hidden mt-5  bg-light pt-5">
                <div className="row justify-content-center">
                    <div className="col-8 row mx-auto ps-5">
                        <ul className='d-flex gap-2 list-unstyled'>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Terms of use</a></li>
                            <li><a href="#">Privacy policy</a></li>
                        </ul>
                        <p>© All Rights Reserved.</p>
                    </div>
                    <div className="col-4">
                            <ul className='d-flex justify-content-center align-items-center gap-2 list-unstyled'>
                                <li><a href="#">FaceBook</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Instagram</a></li>
                            </ul>
                    </div>
                </div>
            </div>



        </div>
    );
}
