import './Bottle.css'
const Bottle = ({ bottle }) => {
    const { name, price, img } = bottle;
    return (
        <div className='bottle-card'>
            <h3>{name}</h3>
            <img className='bottle-img' src={img} alt="" />
            <h3>Price: {price}</h3>
        </div>
    );
};

export default Bottle;