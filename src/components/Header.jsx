import React from 'react'

export default function Header_Footer() {
    return (
        <div>

            <header className="col-11 mt-3 shadow sticky-top position-fixed mt-3 position-fixed  container-fluid bg-light ">



                <div class="navHeader py-2 row align-items-center ">
                    <div class=" col-12 col-lg-4 d-lg-flex d-none justify-content-sm-start">
                        <nav class="navbar gap-4">
                            <a href="products.html" class="nav-link text-dark">Products</a>
                            <a href="products.html" class="nav-link text-dark">Best Sellers</a>
                            <a href="products.html" class="nav-link text-dark">Offers</a>
                        </nav>
                    </div>

                    <div class=" logo  col-lg-4 col-md-1 col-sm-5 col-6 text-lg-center">
                        <a href="index.html">
                            <img src="https://shop.hofindia.com/cdn/shop/files/HOF-dark-logo.svg?v=1734094805&width=75"
                                alt="Logo" height="60" />
                        </a>
                    </div>


                    <div
                        class="rightPanel  col-lg-4 col-md-10 col-3  d-flex justify-content-center justify-content-lg-end   align-items-center gap-2 gap-md-3 ">
                        <i id="SearchIcon" class="fa-solid fa-magnifying-glass "></i>
                        <a id="searchBar" href="products.html"
                            class="col-md-3 col-lg-5 col-sm-12 d-sm-flex align-items-center text-decoration-none text-dark border border-secondary   p-2">
                            <i class="fa-solid fa-magnifying-glass me-2"></i>
                            Search
                        </a>


                        <div class="d-flex gap-sm-3  align-items-center">
                            <a href="wishlist.html" class="text-dark text-decoration-none">
                                <i id="icon" class="fa-solid fa-heart"></i>
                            </a>
                            <a href="cart.html" class="text-dark text-decoration-none">
                                <i id="icon" class="fa-solid fa-cart-shopping"></i>
                            </a>
                            <a href="#" class="text-dark text-decoration-none">
                                <i id="icon" class="fa-solid fa-location-dot"></i>
                            </a>
                        </div>

                        <a href="login .html" class="text-dark login text-decoration-none border-start ps-3 ms-3">
                            Login
                        </a>
                        <a href="#" class="  text-dark text-decoration-none menu">
                            <i id="icon" class="fa-solid fa-bars  "></i>
                        </a>
                    </div>
                </div>

            </header>



      
                </div>




                )
}
