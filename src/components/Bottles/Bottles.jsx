import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
            .catch(err => console.log(err))
    }, [])

    // add event handler
    const handleAddToCard = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart)
    }
    return (
        <div>
            <h3>Total Bottles: {bottles.length}</h3>
            <h3>Card: {cart.length}</h3>
            <div className='bottles-container'>
                {
                    bottles.map(bottle => <Bottle
                        bottle={bottle}
                        key={bottle.id}
                        handleAddToCard={handleAddToCard}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;