const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString) {
        return JSON.parse(storedCartString);
    }
    return [];
}

const saveCartToLS = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

// save to local storage
const addToLS = id => {
    const cart = getStoredCart();
    cart.push(id);
    saveCartToLS(cart);
}

const removeFromLS = id => {
    const cart = getStoredCart();
    // removing every ids
    const remaining = cart.filter(idx => idx !== id);
    saveCartToLS(remaining);
}
export { addToLS, getStoredCart, removeFromLS };