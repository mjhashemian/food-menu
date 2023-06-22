import React from 'react';
import salamino from "../img/salamino.jpg"
import focaccia from "../img/focaccia.jpg"
import margherita from "../img/margherita.jpg"
import spinaci from "../img/spinaci.jpg"
import funghi from "../img/funghi.jpg"
import prosciutto from "../img/prosciutto.jpg"
import "../index.css"

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6 + "$",
        photoName: focaccia,
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10 + "$",
        photoName: margherita,
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12 + "$",
        photoName: spinaci,
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12 + "$",
        photoName: funghi,
        soldOut: false
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15 + "$",
        photoName: salamino,
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18 + "$",
        photoName: prosciutto,
        soldOut: false,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18 + "$",
        photoName: prosciutto,
        soldOut: false,
    },
];




const Menu = () => {



    return (<>
        <main className='menu'>
            <h2>our menu</h2>

            <ul className='pizzas' >
                {pizzaData.map((pizza, index) => (
                    <Pizza pizzaObj={pizza} key={index} />
                ))}
            </ul>
        </main >
    </>
    )

}

function Pizza({ pizzaObj }) {
    return (<>
        <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
            <img src={pizzaObj.photoName} alt="pizza name" />
            <h3>{pizzaObj.name}</h3>
            <p>{pizzaObj.ingredients}</p>
            <span>{pizzaObj.soldOut ? "soldout" : pizzaObj.price}</span>
        </li>
    </>
    )
}

export default Menu