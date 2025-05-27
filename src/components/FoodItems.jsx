import React from 'react';

const FoodItems = () => {
  const popularItems = [
    { name: 'Chicken Pizza', price: 'The Registration Fee' },
    { name: 'Egg And Cucumber', price: 'The Registration Fee' },
    { name: 'Chicken Fried Rice', price: 'The Registration Fee' },
    { name: 'Chicken Leg Piece', price: 'The Registration Fee' }
  ];

  const bestSelling = [
    { name: 'Chicken Fried Rice', price: 'The Registration Fee' },
    { name: 'Chinese Pasta', price: 'The Registration Fee' },
    { name: 'Chicken Pizza', price: 'The Registration Fee' },
    { name: 'Chicken Noodles', price: 'The Registration Fee' },
    { name: 'Grilled Chicken', price: 'The Registration Fee' }
  ];

  return (
    <section className="food-items">
      <h2>Popular Food Items</h2>
      <div className="popular-items">
        {popularItems.map((item, index) => (
          <div key={index} className="food-item">
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>

      <div className="special-offers">
        <div className="offer">
          <h3>SPICY FRIED CHICKEN</h3>
          <p>Limits Time Offer</p>
        </div>
        <div className="offer">
          <h3>TODAY SPACIAL FOOD</h3>
          <p>Limits Time Offer</p>
        </div>
        <div className="offer">
          <h3>SPECIAL CHICKEN ROLL</h3>
          <p>Limits Time Offer</p>
        </div>
      </div>

      <div className="cuisine-text">
        <h3>Variety Of Flavours From American Cuisine</h3>
        <p>
          It is a long established fact that a reader will be distracted the readable content
          of a page when locking at layout the point established fact that
        </p>
      </div>

      <h2>Best Selling Dishes</h2>
      <div className="best-selling">
        {bestSelling.map((item, index) => (
          <div key={index} className="food-item">
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodItems;