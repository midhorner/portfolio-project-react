import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardImg } from 'reactstrap';
import '../styles/MenuComponent.css';


function RenderFood({food}) {
  return(

      <Card className="my-2">
        <div className="row no-gutters align-items-center">
          <div className="col-4">
            <CardImg className="img-fluid" src={food.image} alt="..." />
          </div>
        
          <div className="col text-left">
            <CardBody className="py-0">
              <CardTitle className="mb-0" tag="h5">{food.name}</CardTitle>
              <CardText className="mb-0 description" tag="div">{food.description}
                <br/>
                ${food.cost}
              </CardText>
            </CardBody>
          </div>
        </div>
      </Card>

  );
}

function RenderCocktails({cocktail}) {
  return(
    
    <Card className="my-2">
        <div className="row no-gutters align-items-center">
          <div className="col-4">
            <CardImg className="img-fluid" src={cocktail.image} alt="..." />
          </div>
        
          <div className="col text-left">
            <CardBody className="py-0">
              <CardTitle className="mb-0" tag="h5">{cocktail.name}</CardTitle>
              <CardText className="mb-0 description" tag="div">{cocktail.description}</CardText>
              <br/>
              <CardText tag="strong">${cocktail.cost}</CardText>
            </CardBody>
          </div>
        </div>
      </Card>
  );
}

function Menu(props) {
  const menu = props.food.map(food => {
    return(
      <div key="item.id" className="col-lg-6 text-center">
        <RenderFood food={food} />
      </div>
    );
  });
  const cocktails = props.cocktails.map(cocktail => {
    return(
      <div key="cocktail.id" className="col-lg-6 text-center">
        <RenderCocktails cocktail={cocktail} />
      </div>
    );
  });
  return(
    <div className="container">
      <div className="row">
        {menu}
      </div>
      <div className="row">
        {cocktails}
      </div>
    </div>
  );
}

export default Menu;