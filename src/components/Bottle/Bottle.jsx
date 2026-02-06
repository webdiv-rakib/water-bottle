import './Bottle.css'
const Bottle = ({ bottle, handleAddToCard }) => {
    const { name, price, img } = bottle;
    return (
        <div className='bottle-card'>
            <h3>{name}</h3>
            <img className='bottle-img' src={img} alt="" />
            <h3>Price: {price}$</h3>
            <button onClick={() => handleAddToCard(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;