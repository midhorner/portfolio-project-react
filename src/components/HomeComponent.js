import React from 'react';

function Home() {
  return(
    <div className="container-fluid" id="splash">
      <div className="row h-100">
        <div className="col my-auto">
          <div className="row">
            <div className="col-12 text-center">
              <img src="/assets/images/Goatfam.png" className="img-fluid" alt="goat-fam" />           
            </div>
            <div className="col-12 text-center">
              <cite className="text-white">Established 2011</cite>
            </div>
          </div>
        </div>        
      </div>   
    </div>
  );
}

export default Home;