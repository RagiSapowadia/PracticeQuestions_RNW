import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function DisplayProduct() {
  return (
    <div>
      <Header/>
      <div class="container-fluid mt-lg-5 text-center align-items-center justify-content-evenly d-flex flex-column">
                <div class="row ">
                    <p class="col-12 display-6 text-dark">
                        Empty Wishlist
                    </p>

                </div>
                <div class="row">
                    <p class="col-12 text-secondary">You have no products in your wishlist</p>

                </div>
                <div class="row">
                    <a href="products.html" class="col-12 text-decoration-none text-light p-2" id="startShop">Start Shopping</a>

                </div>
            </div>
<Footer/>
    </div>
  )
}
