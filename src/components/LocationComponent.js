import React from 'react';

function Location() {
  return(
    <div className="container-fluid" style={{height: "82.5vh"}}>
      <div className="row align-items-lg-center h-100">
        <div className="col-lg-6 mx-auto my-2">
          <iframe src="https://www.editmysite.com/ajax/apps/generateMap.php?elementid=55cd1010-8365-11eb-91f6-c175945164d5&amp;map=google&amp;ineditor=0&amp;width=auto&amp;point=1&amp;control=3&amp;scalecontrol=1&amp;height=500px&amp;zoom=10&amp;zoomScale=70&amp;lat=40.47&amp;long=-79.9611&amp;pincolor=D85040&amp;pinbordercolor=C74D40&amp;pincirclecolor=8A1E16&amp;styles=%5B%7B%22featureType%22%3A%22poi%22%2C%22elementType%22%3A%22labels.text%22%2C%22stylers%22%3A%5B%7B%22visibility%22%3A%22off%22%7D%5D%7D%2C%7B%22featureType%22%3A%22poi.business%22%2C%22stylers%22%3A%5B%7B%22visibility%22%3A%22off%22%7D%5D%7D%2C%7B%22featureType%22%3A%22road%22%2C%22elementType%22%3A%22labels.icon%22%2C%22stylers%22%3A%5B%7B%22visibility%22%3A%22off%22%7D%5D%7D%2C%7B%22featureType%22%3A%22transit%22%2C%22stylers%22%3A%5B%7B%22visibility%22%3A%22off%22%7D%5D%7D%5D&amp;touch=1&amp;forcemapdrag=1" title="google-map" allowtransparency="true" frameborder="0" scrolling="no" loading="lazy" style={{width: "100%", height: "500px"}} />
        </div>
        <div className="col-md-6 col-lg-3">
          <p>
            Smoke
            <br />
            4115 Butler Street
            <br />
            Pittsburgh, PA 15201
            <br />
            <a className="misc-links" href="tel:412-852-2726">412-852-2726</a>          
          </p>
          <p><strong><a className="misc-links" href="https://www.google.com/maps/dir/?api=1&destination=4115+Butler+St+PITTSBURGH+Pennsylvania+15201+US">Get Directions</a></strong></p>
        </div>
        <div className="col-md-6 col-lg-3">
          <p>
            Monday: Closed
            <br />
            Tuesday: Closed
            <br />
            Wednesday: Closed
            <br />
            Thursday: Noon - 8:00PM
            <br />
            Friday: Noon - 8:00PM
            <br />
            Saturday: Noon - 8:00PM
            <br />
            Sunday: 10:00AM - 6:00PM
          </p>
        </div>
      </div>
    </div>
  );
}

export default Location;