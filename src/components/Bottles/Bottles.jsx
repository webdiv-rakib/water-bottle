import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addToLS, getStoredCart } from '../../utilities/localstorage';
import Cart from '../Cart/Cart';
const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
            .catch(err => console.log(err))
    }, [])

    // load card from local storage
    useEffect(() => {
        console.log('called the useEffect', bottles.length)
        if (bottles.length > 0) {
            const storedCart = getStoredCart();
            const savedCart = [];
            for (const id of storedCart) {
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id);
                if (bottle) {
                    savedCart.push(bottle)
                }
            }
            console.log('saved cart', savedCart);
            setCart(savedCart);
        }
    }, [bottles])

    // add event handler
    const handleAddToCard = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id);
    }
    return (
        <div>
            <h3>Total Bottles: {bottles.length}</h3>
            <Cart cart={cart}></Cart>
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