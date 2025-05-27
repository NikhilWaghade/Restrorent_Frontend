import React from 'react';

const MenuSection = () => {
  const menuItems = [
    { name: 'Drink & Juice', price: '$315.99', desc: "It's testament to our." },
    { name: 'Chicken Pizza', price: '$65.99', desc: "It's a testament to our." },
    { name: 'Chicken Fried Rice', price: '$25.99', desc: "It's a testament to our." },
    { name: 'Chicken White Rice', price: '$135.99', desc: "It's a testament to our." },
    { name: 'Chicken Pizza', price: '$115.99', desc: "It's a testament to our." },
    { name: 'Spatial Barger', price: '$95.99', desc: "It's a testament to our." },
    { name: 'Chicken Noodles', price: '$154.99', desc: "It's a testament to our." },
    { name: 'Vegetables Burger', price: '$75.99', desc: "It's a testament to our." },
    { name: 'Brief Chicken', price: '$55.99', desc: "It's a testament to our." },
    { name: 'Grilled Chicken', price: '$44.99', desc: "It's a testament to our." }
  ];

  return (
    <section className="menu-section">
      <h2>Fresheat Foods Menu</h2>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item">
            <h3>{item.name}</h3>
            <p className="price">{item.price}</p>
            <p className="description">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="discount-offer">
        <h3>SPECIAL OFFERS</h3>
        <p>Get 30% Discount Every Item</p>
      </div>

      <div className="chef-profiles">
        <div className="chef">
          <h4>Ralph Edwards</h4>
          <p>Chef Lead</p>
        </div>
        <div className="chef">
          <h4>Leslie Alexander</h4>
          <p>Chef Assistant</p>
        </div>
        <div className="chef">
          <h4>Ronald Richards</h4>
          <p>Chef Assistant</p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;