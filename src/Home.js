import React, { useState, useEffect }  from "react";
import "./Home.css";
import Product from "./Product";

function Home() {

  const [ data , setData ] = useState ( [ ] ) ;   
  useEffect ( ( ) => {  
    asyncFetch ( ) ;
  } , [ ] ) ; 
  const asyncFetch = ( ) => {     
    fetch ( 'http://starlord.hackerearth.com/recipe' )
      . then ( ( response ) => response . json ( ) ) 
      . then ( ( json ) => setData ( json ) )  
      . catch ( ( error ) => {  
        console . log ( 'Data failed FETCH' , error ) ;
      } ) ;
  } ;
console.log(data)
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://img.freepik.com/free-photo/fresh-food-groceries-tray-box-wood-tabletop-banner-background_8087-2719.jpg?size=626&ext=jpg&ga=GA1.2.2067853158.1600041600"
          alt=""
        />
        <div className="home__row">
          {
            data.map(det => {
              return(
                <Product 
                  id={det.id}
                  title={det.name}
                  price={det.price}
                  rating={4}
                  image={det.image}
                />
              )
            })
          }
        </div>
        
      </div>
    </div>
  );
}

export default Home;
