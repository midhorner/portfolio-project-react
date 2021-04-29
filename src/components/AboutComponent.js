import React from 'react';

function About() {
  return(

    <div class="container">     
      <div class="row mb-5">
        <div class="col text-center">           
          <h3>We are currently take out only.</h3>
          <div class="row mt-3 justify-content-center">
            <div class="col-md-4 mt-5"><a class="order-links" href="http://smokepgh.com/s/order" target="blank">Order Online</a></div>
            <div class="col-md-4 mt-5"><a class="order-links" href="https://www.ubereats.com/" target="blank">Uber Eats</a></div>
            <div class="col-md-4 mt-5"><a class="order-links" href="https://www.doordash.com/" target="blank">Doordash</a></div>
          </div>      
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-lg-6">
          <img src="../assets/images/betterfrontofrestaurant.jpg" className="img-fluid" alt="..." />
        </div>
        <div class="col-lg-6 mt-3 mt-lg-0">
          <h3>Housemade Everything.</h3>
          <p class="mb-5">We make everything from scratch. All dressings, mayos, and sauces are made in our kitchen. Piedmontese Brisket, Berkshire Pork & Freebird chicken are smoked in house using hickory, maple, oak, and cherry. Our tortillas are made by hand everyday. The buttermilk flour tortillas contain lard so are not vegetarian. The corn tortillas, also made by hand, do not contain any gluten or animal product. The food is bomb - hope you dig it.</p>
          <p>
            Monday: Closed
            <br/>
            Tuesday: Closed
            <br/>
            Wednesday: Closed
            <br/>
            Thursday: Noon - 8:00PM
            <br/>
            Friday: Noon - 8:00PM
            <br/>
            Saturday: Noon - 8:00PM
            <br/>
            Sunday: 10:00AM - 6:00PM
          </p>
        </div>
      </div>   
    </div>
  );
}

export default About;