import logo from "./logo.svg";
import "./App.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

var date = new Date();
var utcDate = new Date().getHours();
// date.getUTCFullYear(),
// date.getUTCMonth(),
// date.getUTCDate(),
// date.getUTCHours(),
// date.getUTCMinutes(),
// date.getUTCSeconds(),
// date.getUTCMilliseconds()
console.log(utcDate);
const isOpen = utcDate >= 10 && utcDate <= 23;
function App() {
  if (isOpen) {
    return (
      <div className="container">
        <Header />
        <Menu />
        <Footer date={new Date().toLocaleTimeString()} />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Closed</h1>
      </div>
    );
  }
}

// const data = pizzaData;

// const pizzadta = pizzaData;
function Pizza(props) {
  // console.log(props);
  return (
    <li className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>
          {" "}
          {`${props.pizzaObj.name} ${
            props.pizzaObj.soldOut ? "" : "available"
          }`}
        </h3>
        <p> {props.pizzaObj.ingredients}</p>
        <span>
          {props.pizzaObj.soldOut ? "Sold Out" : props.pizzaObj.price}
        </span>
      </div>
    </li>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>This is from Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizzaDataObj) => {
          return (
            <Pizza
              pizzaObj={pizzaDataObj}
              key={pizzaDataObj.name}
              // name={pizzaDataObj.name}
              // ingredients={pizzaDataObj.ingredients}
              // photoName={pizzaDataObj.photoName}
              // price={pizzaDataObj.price}
            />
          );
        })}
      </ul>
      {/* <Pizza
        name="Pizza Prosciutto"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizzas/prosciutto.jpg"
        price={18}
      />
      <Pizza
        name="Chandrika Special Coffe for Narendra"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizzas/coffe.jpeg"
        price={20}
      /> */}
    </main>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Chandrika's Pizza Co.</h1>
    </header>
  );
}

function Footer(props) {
  console.log(props);
  return (
    <footer>
      {isOpen && (
        <div className="order">
          <p>We are open until {23}:00. Come Visit us or order online.</p>
          <button className="btn">order now</button>
        </div>
      )}
    </footer>
  );
}
export default App;
