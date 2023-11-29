import React from "react";
import ReactDOM from "react-dom/client";

/* const parent = React.createElement(
  "div",
  { id: "heading" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an H1 tag.🚀"),
    React.createElement("h2", {}, "I'mm an H2 tag.✅"),
  ])
);
console.log(parent); // object

const heading = <h1 id="header">I'm also an H1 tag created using JSX!🚀</h1>;
console.log(heading); //Object

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent); // HTML element
root.render(heading); // HTML element
 */
/* 
const Title = () => <h1 className="head">Namaste World!😺</h1>;

const HeadingComponent = () => (
  <>
    <Title />
    <h1 className="head">React Functional Component.🚀🚀</h1>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30151557/1516.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/votokwhf8vvovgnprjmu"
      />
      <h3>Meghna Foods</h3>
      <h5>Biryani, North Indian, Asian</h5>
      <h5>4.4 Stars</h5>
      <h5>38 minutes</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
